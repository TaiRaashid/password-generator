let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let characters2=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let generateEl=document.getElementById("generate")
let randomchar
let password1=""
let password2=""

function getranmdom(){
   return randomchar=Math.floor(Math.random()*characters.length)
}
function getranmdom2(){
    return randomchar=Math.floor(Math.random()*characters2.length)
 }
function generator(){
    
    password1=""
    password2=""
    for(let i=0;i<12;i++){
        password1+=characters[getranmdom()]
    }
    for(let i=0;i<12;i++){
        password2+=characters[getranmdom()]
    }
    document.getElementById("buttonone").textContent=password1
    document.getElementById("buttontwo").textContent=password2

}

function generator2(){
    password1=""
    password2=""
    for(let i=0;i<12;i++){
        password1+=characters2[getranmdom2()]
    }
    for(let i=0;i<12;i++){
        password2+=characters2[getranmdom2()]
    }
    document.getElementById("buttonone").textContent=password1
    document.getElementById("buttontwo").textContent=password2
}
