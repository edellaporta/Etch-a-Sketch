
for (let i=0;i<=(16*16);i++){
    console.log(i)
    let nuevoDiv = document.createElement("div");
    //nuevoDiv.textContent="8";
    nuevoDiv.style.width='50px';
    nuevoDiv.style.height='50px';
    
    nuevoDiv.addEventListener("mouseover",function(){
        nuevoDiv.style.backgroundColor='black';
    })
    
    document.getElementById("contenedor").appendChild(nuevoDiv);
}


