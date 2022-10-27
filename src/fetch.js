const Libros = (dataLibros) => {
    const llibros = dataLibros.map(dataBook => {
        return dataBook
    })
    return llibros
}


const Peliculas = (dataPeliculas) => {
    const pelliculas = dataPeliculas.map(dataMovie => {
        return dataMovie
    })
    return pelliculas
}
module.exports = {Libros, Peliculas};