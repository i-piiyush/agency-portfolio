let cursor = document.querySelector(".cursor");
window.addEventListener("mousemove",(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = y + "px"
    cursor.style.left = x +"px"
   
    
})
