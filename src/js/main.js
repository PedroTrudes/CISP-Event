//mostrar imagens dos palestrantes
document.getElementById("seeAllSpeakers").onclick = function() {
    let containerImages01 = document.getElementById("container_images--02");
    let containerImages02 = document.getElementById("container_images--03")
    let button = document.getElementById("seeAllSpeakers")

    if(containerImages01.style.display === "none" && containerImages02.style.display === "none") {
        containerImages01.style.display = "block";
        containerImages02.style.display = "block";
        button.textContent = "Ver menos";
    }else {
        containerImages01.style.display = "none";
        containerImages02.style.display = "none";
        button.textContent = "Ver todos"
    }
}

//mecanica do historico de edicoes
let indicatorSeg = document.getElementById("historical-seg");
let indicatorTer = document.getElementById("historical-ter");
let indicatorQua = document.getElementById("historical-qua");
let indicatorQui = document.getElementById("historical-qui");

let eventSeg = document.getElementById("activities-seg");
let eventTer = document.getElementById("activities-ter");
let eventQua = document.getElementById("activities-qua");
let eventQui = document.getElementById("activities-qui");

indicatorSeg.onclick = function() {
    if(indicatorSeg.classList.contains("active")){
        indicatorSeg.classList.remove("active")
        eventSeg.style.display = "none";
    }else{
        indicatorSeg.classList.add("active");
        indicatorTer.classList.remove("active")
        indicatorQua.classList.remove("active")
        indicatorQui.classList.remove("active")
        eventSeg.style.display = "block";
        eventTer.style.display = "none";
        eventQua.style.display = "none";
        eventQui.style.display = "none";
    }
}

indicatorTer.onclick = function(){
    if(indicatorTer.classList.contains("active")){
        indicatorTer.classList.remove("active");
        eventTer.style.display = "none";
    }else{
        indicatorSeg.classList.remove("active")
        indicatorTer.classList.add("active");
        indicatorQua.classList.remove("active")
        indicatorQui.classList.remove("active")
        eventSeg.style.display = "none";
        eventTer.style.display = "block";
        eventQua.style.display = "none";
        eventQui.style.display = "none";
    }
}

indicatorQua.onclick = function() {
    if(indicatorQua.classList.contains("active")){
        indicatorQua.classList.remove("active");
        eventQua.style.display = "none";
    }else{
        indicatorSeg.classList.remove("active")
        indicatorTer.classList.remove("active")
        indicatorQua.classList.add("active");
        indicatorQui.classList.remove("active")
        eventQui.style.display = "none";
        eventQua.style.display = "block";
        eventTer.style.display = "none";
        eventSeg.style.display = "none";

    }
}

indicatorQui.onclick = function() {
    if(indicatorQui.classList.contains("active")){
        indicatorQui.classList.remove("active");
        eventQui.style.display = "none";
    }else{
        indicatorSeg.classList.remove("active")
        indicatorTer.classList.remove("active")
        indicatorQua.classList.remove("active")
        indicatorQui.classList.add("active");
        eventQui.style.display = "block";
        eventQua.style.display = "none";
        eventTer.style.display = "none";
        eventSeg.style.display = "none";

    }
}

//container de videos do youtube

let btnSeeAllPlayer = document.getElementById("seeAllPlayer");

btnSeeAllPlayer.onclick = function() {
    let containerPlayers = document.getElementById("container-player");
    if(containerPlayers.classList.contains("remove-container")){
        console.log("ele tem ")
        containerPlayers.classList.remove("remove-container");
        btnSeeAllPlayer.textContent = "Ver menos"
    }
    else {
        console.log("ele não tem ")
        containerPlayers.classList.add("remove-container")
        btnSeeAllPlayer.textContent = "Ver todos"
       // containerPlayers.style.display = "flex";
    }
}
