const allPlayers =() =>{
    document.getElementById('player-container').innerHTML=``
    // document.getElementById('spinner').style.display= 'block'
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        if(data.player==null){
            document.getElementById('spinner').style.display= 'block'
            
        }else{
            showPlayerDetails(data.player);
            document.getElementById('spinner').style.display= 'none'
        }
    }) 
    // document.getElementById('spinner').style.display= 'none'
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
    .then(data => ShowDetails(data.players[0]))
}

const ShowDetails = (info) => {
    console.log(info.strGender)
    if(info.strGender == "Male"){
        document.getElementById('male').style.display="block"
        document.getElementById('female').style.display="none"
    }
    else{
        document.getElementById('male').style.display="none"
        document.getElementById('female').style.display="block"
    }
    document.getElementById('details-container').innerHTML=`
    <img src="${info.strThumb}" class="rounded w-50 ml-5" alt="">
    <h2 class="ml-5">Name: ${info.strPlayer}</h2>
    <h3 class="ml-5">Team: ${info.strTeam}</h3>
    `
    console.log(info)
}

