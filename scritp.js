yesBtn.addEventListener("mouseover",function(){
    const randomX = parseInt(Math.random()*1000);
    const randomY = parseInt(Math.random()*1000);
    yesBtn.style.setProperty("top",randomY+"%");
    yesBtn.style.setProperty("left",randomX+"%");
    yesBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})
noBtn.addEventListener("click",function(){
    alert("creo que eres increíble y me encantaría conocerte mejor ¿Podemos salir a tomar algo este fin de semana?");
})
