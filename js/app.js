const allPlayers =() =>{
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(response => response.json())
    .then(data => showPlayerDetails(data.player))
}

const showPlayerDetails = (players) => {
    for(const player of players){
        const parent = document.getElementById("player-container")
    const div = document.createElement("div")
    div.innerHTML = `<div class="card border p-5 m-1 bg-secondary">
    <div class="pro-pic">
        <img class="w-50" src="${player.strThumb}" alt="">
    </div>
    <h3>Name: ${player.strPlayer}</h3>
    <h3>Country: ${player.strNationality}</h3>
    <p></p>
    <div class="all-btn">
        <button class="btn btn-danger">Delete</button>
        <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
    </div>
</div>`
parent.appendChild(div)
    } 
}

const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}
    `
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
}

