const Libros = (dataLibros) => {
    const libritos = dataLibros.map(dataBook => {
        return dataBook
    })
    return libritos
}


const Peliculas = (dataPeliculas) => {
    const peliculitas = dataPeliculas.map(dataMovie => {
        return dataMovie
    })
    return peliculitas
}

const MovieExactly = (dataPeliculaExactly) => {
    const result = dataPeliculaExactly.filter(dataPeliculaExactly => dataPeliculaExactly.id === 1);
    return result
}



module.exports = {Libros, Peliculas, MovieExactly};