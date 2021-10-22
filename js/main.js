


let myObj;
async function getFile(file) {
   try {
      let myFile = await fetch(file);
      // console.log(myFile);
      myObj = await myFile.json();
      myObj = myObj.card;
      console.log(myObj.length);
   } catch (err) {
      console.log(err);

   }
   let popularContainer = document.querySelector('.popular-container');
   let latestContainer = document.querySelector(".latest-container");
   let tvContainer = document.querySelector(".tv-container");
   let movieContainer = document.querySelector(".movie-container");
   let createCard = (i) => {
      let container = document.createElement('div');
      let imgContainer = document.createElement('img');
      let cardContent = document.createElement('div');
      let cardTitle = document.createElement('div');
     // let cardDes = document.createElement('div');
     // let playIcon = document.createElement('div');
     // let addIcon = document.createElement('div');

      imgContainer.appendChild(document.createTextNode(''));
      cardTitle.appendChild(document.createTextNode(myObj[i].name));
     // cardDes.appendChild(document.createTextNode(myObj[i].des));

      cardContent.appendChild(cardTitle);
      //cardContent.appendChild(cardDes);
     // cardContent.appendChild(playIcon);
     // cardContent.appendChild(addIcon);
      container.setAttribute("data-url", myObj[i].url);
      container.addEventListener('click', function () {
          let videoContainer = document.getElementById('video')          
          videoContainer.src = this.getAttribute('data-url')
      })
      container.appendChild(imgContainer);
      container.appendChild(cardContent);
      if (store === "new") {
        latestContainer.appendChild(container);
     }
     else if (store > 3) {
      popularContainer.appendChild(container);
     }
      else if(store === "tv") {
          tvContainer.appendChild(container);
      }
      else if(store === "movie") {
          movieContainer.appendChild(container);
      }
      imgContainer.src = myObj[i].image;
      imgContainer.alt = myObj[i].name;

      container.className = "container";
      // container.classList = "swiper-slide";
      container.classList.add("slider");
      imgContainer.className = "img-container";
      cardContent.className = "card-content";
      cardTitle.className = "card-title";
     // cardDes.className = "card-des";
     // playIcon.className = "play-icon";
     // addIcon.className = "add-icon";
   }

   let store;
   document.querySelector('.popular-container').innerHTML = " ";
      for (let j = 0; j < myObj.length; j++) {
            if (myObj[j].rating > 3) {
               if (myObj[j].category === "movie" || myObj[j].category === "tv") {
                  store = myObj[j].rating;
                  console.log(store);
                  createCard(j);
               }
            }
         }
      
   
  
      //latest movies and shows
      
      document.querySelector('.latest-container').innerHTML = " ";
      for (let i = 0; i < myObj.length; i++) {
            if (myObj[i].period === "new") {
               if (myObj[i].category === "movie" || myObj[i].category === "tv") {
                  store = myObj[i].period;
                  createCard(i);
               }
            }
         }

    //Tv shows

      document.querySelector('.tv-container').innerHTML = " ";
      
      for (let k = 0; k < myObj.length; k++) {
            if (myObj[k].period === "new") {
               if (myObj[k].category === "tv") {
                  store = myObj[k].category;
                  createCard(k);
               }
            }
         }

    //Movie

    document.querySelector('.movie-container').innerHTML = " ";
      
      for (let l = 0; l < myObj.length; l++) {
            if (myObj[l].period === "new") {
               if (myObj[l].category === "movie") {
                  store = myObj[l].category;
                  createCard(l);
               }
            }
         }
    
     

   

}


getFile("data.json");

/*Slide show*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
 /*end of slideshow*/

