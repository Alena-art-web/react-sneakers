
export const getFavfromLS = () => {
    const data = localStorage.getItem('favorites')
    const items = data ? JSON.parse(data) : [] 
    return {
        items
    }
}

