export const fetchProducts = async () => {
    const {data} = await axios.get('/api/home')
    return data.products
}