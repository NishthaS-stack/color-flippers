const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const color=document.querySelector('.color');
btn.addEventListener('click',function(){
    let hexcolor='#'
    hexcolor=getcolor(hexcolor);
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor;
})
function getcolor(color){
    for(let i=0;i<6;i++){
        let n=Math.floor(Math.random()*hex.length);
        color=color+hex[n];
    }
    return color;
}