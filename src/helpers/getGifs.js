

export const getGifs = async(category)=> {
    const apiKey = "zpug3MZs3vbWAlprAWc5N3FSu5SqqiG3"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    return data.map((gif)=> {
        return {
            url: gif.images.downsized.url,
            title: gif.title,
            id: gif.id
        }
    })
    

}