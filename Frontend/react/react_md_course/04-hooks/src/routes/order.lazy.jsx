import { useState, useEffect, useContext } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Pizza from '../Pizza'
import Cart from '../Cart'
import { CartContext } from '../contexts'

export const Route = createLazyFileRoute("/order")({
  component: Order,
});

const intl = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]) //initially empty array stored, later on from the :3000/api/pizzas, the this gets filled up with pizza types jsons
  const [pizzaType, setPizzaType] = useState('pepperoni') // initially kept as "Onion", later changes based on user clicking on type
  const [pizzaSize, setPizzaSize] = useState('M') // initially S, but changes based on user selecting size
  const [cart, setCart] = useContext(CartContext)
  const [loading, setLoading] = useState(true) //checking the loading status

  let price, selectedPizza
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    price = intl.format(selectedPizza.sizes[pizzaSize])
  }

  useEffect(() => {
    fetchPizzaTypes()
  }, [])

  async function checkout() {
    setLoading(true)

    await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart: cart,
      }),
    })

    setCart([])
    setLoading(false)
  }

  async function fetchPizzaTypes() {
    const pizzaResponse = await fetch('/api/pizzas')
    const pizzaJson = await pizzaResponse.json()
    setPizzaTypes(pizzaJson)
    setLoading(false)
  }

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }])
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div onChange={(e) => setPizzaSize(e.target.value)}>
              <span>
                <input
                  checked={pizzaSize === 'S'}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'M'}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === 'L'}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {loading ? (
          <h2>Loading bhai...!!</h2>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <Cart checkout={checkout} cart={cart} />
        )}
      </form>
    </div>
  )
}
