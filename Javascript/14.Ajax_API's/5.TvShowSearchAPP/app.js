
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e){
    try{
        e.preventDefault();
        const searchTerm = form.elements.query.value;
        const config = {params: {q : searchTerm}}
        //const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        makeImages(res.data);
        form.elements.query.value = '';
    }catch(e){
        console.log("ERROR!", e);
    }

});

const makeImages = (movies) => {
    for (let movie of movies){
        if(movie.show.image)
        {
            const srcImage = movie.show.image.medium;
            const img = document.createElement('IMG');
            img.src = srcImage;
            document.body.append(img);
        }
    }
}