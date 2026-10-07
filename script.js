
let j=0;
function m(num){
    if(j!=0)
         document.getElementsByTagName("button")[j-1].style.backgroundColor="blue"
let s=document.getElementsByTagName("button")[num-1];
s.style.backgroundColor="yellow";
document.getElementById("text").innerText+=s.innerText;
j=num;

      
}
   
function d(){
    let g=document.getElementById("text").innerText;
    document.getElementById("text").innerText=g.substring(0,g.length-1);
}
