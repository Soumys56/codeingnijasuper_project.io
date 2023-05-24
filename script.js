//searchapi
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f251a697950107bf0cef4aa78392b5a3&hash=f7bdffa281793ccfe227000cd25d1240


//public key
//f251a697950107bf0cef4aa78392b5a3

//private-key
//00317bfde461985b23adbaddc5daab49b168cf09


//ts
//1

//100317bfde461985b23adbaddc5daab49b168cf09f251a697950107bf0cef4aa78392b5a3

// HashChangeEvent

//e7d534421368f89b68d56c4588e2bc27


//here will api url
const APIURL =
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f251a697950107bf0cef4aa78392b5a3&hash=e7d534421368f89b68d56c4588e2bc27&limit=100"
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const SEARCHAPI1 = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f251a697950107bf0cef4aa78392b5a3&hash=e7d534421368f89b68d56c4588e2bc27&query=";


//store all movie details
let moviesDetails = []
//here store all favourite array
var favArray = [];


//fatching the api afre that store the data into getMovies 

const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
}


// showmovies function defination

const showMovies = (data, target) => {
    const moiveBox = document.querySelector(target);
    moiveBox.innerHTML = "";
    console.log(data);
    data.forEach(
        (iteam) => {
            var imagePath = iteam.thumbnail["path"];
            var poster_path = iteam.thumbnail["extension"];
            var description = iteam.description;
          
            const box = document.createElement("div");
           

            box.classList.add("box");
           
    
            box.innerHTML = 
               

                ` <img src=${imagePath + "." + poster_path} alt="">
             <div class="overlay">
             <div>
            <i  class="fa ${iteam.favourite ? 'fa-heart' : 'fa-heart-o'} favourite-button" aria-hidden="true" data-id="${iteam.id}"></i>
          </div>
               <div class="title">
                 <h2>${iteam.name}</h2>
                 <h2>Series:<span>${iteam.series.available}</span></h2>
                 <h2>Stories:<span>${iteam.stories.available}</span></h2>
               </div>
               <div class="button">
                 <button type="button" class="btn btn-outline-primary">
                 <a href=${iteam.urls[2] ? iteam.urls[2].url : "..."}  target="_blank" > <span >Comicsection: <span >${iteam.comics.available
                }</span></a>
                 </button>
                 <button type="button" class="btn btn-outline-primary"> <a href=${iteam.urls[0].url}  target="_blank">More Detail</a></button>
     
               </div>
             </div>`

            moiveBox.appendChild(box);


        }
    )
}





    //here  we are calling the showmovies 
getMovies(APIURL).then(data => {
    console.log(data.results);
 
    moviesDetails = data.data.results;
    comic = data.data.comic

    //localStorage.setItem('movieDetails', JSON.stringify(moviesDetails));
    showMovies(moviesDetails, "#movie-box");
})


const searchBox = document.querySelector("#search")

//search box eventlistner seaching the movie
searchBox.addEventListener("keyup", () => {
    let movies = moviesDetails.filter((val) => {

        return val.name.toLowerCase().includes(searchBox.value.trim().toLowerCase())
    });
    showMovies(movies, "#movie-box");
})


//here we are use favourite the movie  set into localstorage  and updating the favarry
document.getElementById('movie-box').addEventListener('click', (evt) => {
 
    const ele = evt.target;

   
    if (ele.classList.contains('favourite-button')) {
        console.log(ele.dataset)
        let id = ele.dataset.id;
        
        moviesDetails.find(val => {
            if (val.id == id) {
                // console.log(val.favourite);
                val.favourite = !val.favourite;
                if (val.favourite) {
                    ele.classList.replace('fa-heart-o', 'fa-heart');
                    favArray.push(val);
                    localStorage.setItem("favMovie",JSON.stringify(favArray));
                } else {
                    ele.classList.replace('fa-heart', 'fa-heart-o');
                    for(let i=0;i<favArray.length;i++){
                        if(favArray[i].id == id){
                            favArray.splice(i,1);
                            localStorage.setItem("favMovie",JSON.stringify(favArray));
                            break;
                        }
                    }
                }
                // localStorage.setItem("movieDetails", JSON.stringify(moviesDetails));
                return true;
            };
        })
       

    }
})



// function favouriteMain() {
//     moviesDetails = JSON.parse(localStorage.getItem("movieDetails")) || [];
//      for(var i=0;i<moviesDetails.length;i++)
//        {
//          if(moviesDetails[i].favourite==true)
//            {
//               favArray.push(moviesDetails[i]);
//             //   localStorage.setItem("favMovie",JSON.stringify(favArray));
//            }
//         //   localStorage.setItem("favIteam",json.stringify(favArray))
//        }
       
       
  
     

   
     
    
//}
// function favpageadd(favdata) {
    

//     // console.log(favdata.name)
//     var imagePath1 = favdata.thumbnail["path"];
//             var poster_path1 = favdata.thumbnail["extension"];
//             // console.log(imagePath)
//             // console.log(poster_path)

//             const moiveBox1 = document.querySelector("#favourite_page");
           
           
//             const box = document.createElement("div");
//             box.classList.add("box");
//             box.innerHTML=`
//             <img src=${imagePath1 + "." + poster_path1} alt="">
//             <div class="overlay">
//             <div>
//             <i  class="fa ${favdata.favourite ? 'fa-heart-o' : 'fa-heart'} favourite-button" aria-hidden="true" data-id="${favdata.id}"></i>
//           </div>
//             <div class="title">
//               <h2>${favdata.name}</h2>
//               <h2>Series:<span>${favdata.series.available}</span></h2>
//               <h2>Stories:<span>${favdata.stories.available}</span></h2>
//             </div>
//             <div class="button">
//             <button type="button" class="btn btn-outline-primary">
//             <a href=${favdata.urls[2] ? favdata.urls[2].url : "..."}  target="_blank" > <span >Comicsection: <span >${favdata.comics.available
//            }</span></a>

            
            
            
//             </button>
//             <button type="button" class="btn btn-outline-primary"> <a href=${favdata.urls[0].url}  target="_blank">More Detail</a></button>
             
//           </div>

//             `
//             moiveBox1.append(box)

// }