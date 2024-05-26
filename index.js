let homepoints=document.getElementById('home-p')
let guestpoints=document.getElementById('guest-p')
let scorehome=parseInt(homepoints.innerText)
let scoregueset=parseInt(guestpoints.innerText)
function add1pointh(){
scorehome=Number(homepoints.innerText)+1
homepoints.innerText=scorehome
}
function add2pointh(){
scorehome=Number(homepoints.innerText)+2
homepoints.innerText=scorehome
}
function add3pointh(){
scorehome=Number(homepoints.innerText)+3
homepoints.innerText=scorehome
}
function add1pointg(){
scoregueset=Number(guestpoints.innerText)+1
guestpoints.innerText=scoregueset
}
function add2pointg(){
scoregueset=Number(guestpoints.innerText)+2
guestpoints.innerText=scoregueset
}
function add3pointg(){
scoregueset=Number(guestpoints.innerText)+3
guestpoints.innerText=scoregueset
}
function reset(){
    guestpoints.innerText=0
    homepoints.innerText=0
}