import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Pizza name="Onion" description="onion pizza it is" image={"/public/pizzas/pepperoni.webp"}/>
      <Pizza name="Tomato" description="cheesy Tomato" image= {"/public/pizzas/pepperoni.webp"} />
      <Pizza name="Paneer" description="malai Paneer"  image= {"/public/pizzas/pepperoni.webp"}/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
