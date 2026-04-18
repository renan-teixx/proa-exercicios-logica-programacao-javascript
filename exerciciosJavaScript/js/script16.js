function sumir(){
    document.getElementById("imagem").style.display = "none"
}
function aparecer(){
    document.getElementById("imagem").style.display = "block"
}
 
function sumirOuAparecer(){
    if(document.getElementById("imagem").style.display == "block"){
        document.getElementById("imagem").style.display = "none"
    }else{
        document.getElementById("imagem").style.display = "block"
    }
}