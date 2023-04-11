const key = 'db8c0f3c626d8c9031cff2167c5dd1a6'

const  requests = {
        requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
        requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
        requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
        requestSimilarMovies : `https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${key}&language=en-US&page=1`,
        requestTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
}     


export default requests




// className='border bg-gray-300 text-black border-gray-300 py-2 px-5 '
// className='border border-gray-300 py-2 px-5 ml-4'