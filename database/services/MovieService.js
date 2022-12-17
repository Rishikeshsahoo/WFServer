const Movie= require('../modals/MovieModal')


const addMovie=async (params)=>{
    const movie= new Movie(params)
    await movie.save()
}



module.exports={addMovie}