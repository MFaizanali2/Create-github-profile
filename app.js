let github = document.getElementById("githubUser");
let githubProfiler = document.getElementById("container");

const getuser = () => {

    fetch(`https://api.github.com/users/${github.value}`)
    console.log(github.value)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            githubProfiler.innerHTML = ` <img src="${data.avatar_url}"  alt="...">`
         `<div class="card" style="width: 18rem;">
         <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
        })
        .catch((error) => {
            console.log(error)
        })
}

