var img = document.querySelector('.img img');
var lov = document.querySelector('#lov');

img.addEventListener("dblclick",()=>{
    lov.style.opacity = 0.9;
    lov.style.transform = "translate(-50%, -50%) scale(1)";

    setTimeout(()=>{
        lov.style.transform = "translate(-50%,-380%) rotate(-60deg) scale(1)";
    },800)
    setTimeout(()=>{
         lov.style.transform = "translate(-50%, -50%) scale(0)";
    },1100)
})