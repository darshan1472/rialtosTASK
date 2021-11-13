let movie=document.querySelectorAll(".movie")

for(let i=0;i<8;i++){
    movie[i].addEventListener("click",()=>{
        alert(`${movie[i].children[1].textContent}`);
    })
}