let fav = []
let detils=[];
//here showfav function used to  showing the favourite movies
function showFav(element){
    // const moiveBox = document.querySelector("#favourite_page");
    // console.log(moiveBox)
    // moiveBox.innerHTML = "";
    let imgSrc = element.thumbnail.path+"."+element.thumbnail.extension;
    // console.log(imgSrc);
    
    // const box = document.createElement("div");
           

    // box.classList.add("box");
    // box.innerHTML = 
               

    return ` 
    <div class="box">
    
    <img src=${imgSrc} alt="">
 <div class="overlay">
 <div>
<i  class="fa ${element.favourite ? 'fa-heart' : 'fa-heart-o'} favourite-button" aria-hidden="true" data-id="${element.id}"></i>
</div>
   <div class="title">
     <h2>${element.name}</h2>
     <h2>Series:<span>${element.series.available}</span></h2>
     <h2>Stories:<span>${element.stories.available}</span></h2>
   </div>
   <div class="button">
     <button type="button" class="btn btn-outline-primary">
     <a href=${element.urls[2] ? element.urls[2].url : "..."}  target="_blank" > <span >Comicsection: <span >${element.comics.available
    }</span></a>
     </button>
     <button type="button" class="btn btn-outline-primary"> <a href=${element.urls[0].url}  target="_blank">More Detail</a></button>

   </div>
 </div>
 </div>`

// moiveBox.appendChild(box);
   
}

// we are geting the local storage  favourite iteam
const isPresent = localStorage.getItem("favMovie");
if(isPresent){
    fav = JSON.parse(isPresent);
}
// fav.ForEach(val=>{
//     console.log(val);
// })

function display(){
    let hero = "";
    fav.forEach(element =>{
        hero+=showFav(element);
    })
    document.getElementById("favourite_page").innerHTML = hero;
    // console.log(hero);
    // return hero;
}
display();

//thi addevenlistner used to unfavourite 
var containerDiv = document.getElementById("favourite_page");
containerDiv.addEventListener("click",(e)=>{
    // console.log(e.target.dataset.id);
    let favId = e.target.dataset.id;
    for(let i=0;i<fav.length;i++){
        if(favId == fav[i].id){
            fav.splice(i,1);
            localStorage.setItem("favMovie",JSON.stringify(fav));
            display();
            break;
        }
    }
})

// display();