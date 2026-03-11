const historia = document.getElementById("historia")
const cultura = document.getElementById("cultura")
const curiosidades = document.getElementById("curiosidades")
const bandeira = document.getElementById("bandeira")
const fotos = document.getElementById("fotos")


function esconder(){
    cultura.style.opacity = 0;
    curiosidades.style.opacity = 0 
    bandeira.style.opacity = 0
    historia.style.opacity = 0
    fotos.style.opacity = 0


}
function mostraConteudoHistoria(){
    esconder()
                let opacidade = 0
    const intervalo = setInterval(() => {
        opacidade+=0.2
        historia.style.opacity = opacidade
        if (opacidade == 1){
            clearInterval(intervalo)
        }
    },50)

}


function mostraConteudoCultura(){
    esconder()
                let opacidade = 0
    const intervalo = setInterval(() => {
        opacidade+=0.2
        cultura.style.opacity = opacidade
        if (opacidade == 1){
            clearInterval(intervalo)
        }
    },50)

}


function mostraConteudoCuriosidades(){
    esconder()
            let opacidade = 0
    const intervalo = setInterval(() => {
        opacidade+=0.2
        curiosidades.style.opacity = opacidade
        if (opacidade == 1){
            clearInterval(intervalo)
        }
    },50)

}



function mostraConteudoBandeira(){
    esconder()
    let opacidade = 0
    const intervalo = setInterval(() => {
        opacidade+=0.2
        bandeira.style.opacity = opacidade
        if (opacidade == 1){
            clearInterval(intervalo)
        }
    },50)

}

function mostraConteudoFotos(){
    esconder()
        let opacidade = 0
    const intervalo = setInterval(() => {
        opacidade+=0.2
        fotos.style.opacity = opacidade
        if (opacidade == 1){
            clearInterval(intervalo)
        }
    },50)
}


const clickHistoria =document.getElementById("click_historia")
const clickCuriosidades = document.getElementById("click_curiosidades")
const clickBandeira = document.getElementById("click_bandeira")
const clickCultura = document.getElementById("click_cultura")
const clickFoto = document.getElementById("album")



clickHistoria.addEventListener("click", () => {mostraConteudoHistoria()})
clickCuriosidades.addEventListener("click", () => {mostraConteudoCuriosidades()})
clickCultura.addEventListener("click", () => {mostraConteudoCultura()})
clickBandeira.addEventListener("click", () => {mostraConteudoBandeira()})
clickFoto.addEventListener("click",() => {mostraConteudoFotos()})