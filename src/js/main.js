console.log("chamando aquirvo")
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
function SeeAllPlayer() {
    let btnSeeAllPlayer = document.getElementById("seeAllPlayer");
    let containerPlayers = document.getElementById("container-player");
    if(containerPlayers.classList.contains("remove-container")){
        containerPlayers.classList.remove("remove-container");
        btnSeeAllPlayer.textContent = "Ver menos";
    }
    else {
        containerPlayers.classList.add("remove-container");
        btnSeeAllPlayer.textContent = "Ver todos";
       // containerPlayers.style.display = "flex";
    }

}

//mostrar imagens dos palestrantes
function seeAllSpeakers(){
    let btnSeeAllSpeakers = document.getElementById("seeAllSpeakers");
    let containerImages01 = document.getElementById("container_images--02");
    let containerImages02 = document.getElementById("container_images--03");
    if(containerImages01.classList.contains("remove-speakers")){
        containerImages01.classList.remove("remove-speakers");
        containerImages02.classList.remove("remove-speakers");
        btnSeeAllSpeakers.textContent = "Ver menos";
    }else {
        containerImages01.classList.add("remove-speakers");
        containerImages02.classList.add("remove-speakers");
        btnSeeAllSpeakers.textContent = "Ver todos";
    }

}