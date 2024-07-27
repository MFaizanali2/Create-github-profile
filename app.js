let github = document.getElementById("githubUser");
let btn = document.getElementById("btn")
let githubProfiler = document.querySelector(".container");


function getuser() {

    event.preventDefault();

    fetch(`https://api.github.com/users/${github.value}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
        showdata(data);
        
    })
    .catch((error) => {
        console.log(error)
    })
    console.log(github.value)
}


btn.addEventListener("click", getuser); 
function showdata(main) {
    
    githubProfiler.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${main.avatar_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${main.name}</h5>
                <h5 class="card-title">${main.bio}</h5>
                <h5 class="card-text">Followers : ${main.followers}</h5>
                <h5 class="card-text">Following : ${main.following}</h5>
                <a href="#" class="btn btn-primary">Follow me</a>
            </div>
        </div>`
}

