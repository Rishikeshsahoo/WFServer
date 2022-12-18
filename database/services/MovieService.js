const Movie= require('../models/MovieModel')

const getMovie = async () => {
    const data = await Movie.find();
    return data
}

const addMovie=async (params)=>{
    const movie= new Movie(params)
    await movie.save()
}



module.exports={addMovie, getMovie}