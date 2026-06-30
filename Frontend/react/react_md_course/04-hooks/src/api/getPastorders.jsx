export default async function getPastOrders(page) {
    const resp = await fetch(`/api/past-orders?page=${page}`)
    const data = await resp.json();
    return data;
}