export const fetchProducts = async () => {
    const {data} = await axios.get('/api/home')
    return data.products
}
export const fetchCategories = async () => {
    const {data} = await axios.get('/api/home')
    return data.categories
}
export const fetchUsers = async () => {
    const {data} = await axios.get('api/home')
    return data.users
}