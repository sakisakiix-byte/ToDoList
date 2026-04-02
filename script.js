const url = "https://movie.pequla.com/api/movie"

fetch(url)
    .then(rsp => rsp.json())
    .then(data => {
        console.log(data)
    })