import peliculas from './peliculas.js'

const accion = document.getElementById("genero-28")
const thriller = document.getElementById("genero-53")
const aventura = document.getElementById("genero-12")

function pintarPelicula(pelicula, contenedor) {

    let divPelicula = document.createElement("div")
    divPelicula.classList.add("pelicula")
    let tituloPelicula = document.createElement("h2")
    tituloPelicula.classList.add("titulo")
    let portadaPelicula = document.createElement("img")
    portadaPelicula.classList.add("portada")

    tituloPelicula.textContent = pelicula.title
    portadaPelicula.src =  "https://image.tmdb.org/t/p/w500/" + pelicula.poster_path
    portadaPelicula.alt = pelicula.title

    divPelicula.appendChild(tituloPelicula)
    divPelicula.appendChild(portadaPelicula)
    contenedor.appendChild(divPelicula)
}

function filtrarXgenero(generoId, contenedor) {
    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i]
        if (pelicula.genre_ids.includes(generoId)) {
            pintarPelicula(pelicula, contenedor)
        }
    }
}

filtrarXgenero(28, accion)
filtrarXgenero(53, thriller)
filtrarXgenero(12, aventura)


