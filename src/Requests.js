const APIKEY="deeb8fc4f4d54283844184858ad689c9"


const requests={
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=US`,
    fetchNetflixOrginals:`/discover/tv?api_key=${APIKEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchAction:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchScienceFiction:`/discover/movie?api_key=${APIKEY}&with_genres=878`,
    fetchAdventure:`/discover/movie?api_key=${APIKEY}&with_genres=12`,
    fetchAnimation:`/discover/movie?api_key=${APIKEY}&with_genres=16`,
    fetchFantasy:`/discover/movie?api_key=${APIKEY}&with_genres=14`,
    fetchHorror:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchMystery:`/discover/movie?api_key=${APIKEY}&with_genres=9648`,
    fetchRomance:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchCrime:`/discover/movie?api_key=${APIKEY}&with_genres=80`,
    fetchFamily:`/discover/movie?api_key=${APIKEY}&with_genres=10751`,
}


export default requests