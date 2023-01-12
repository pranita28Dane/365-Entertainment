// slideshow 
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

if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}

slides[slideIndex-1].style.display = "block";  

}

// search box filter
const search = () => {
    let filter = document.getElementById('input').value.toLowerCase();

    let block = document.getElementById('block');

    let box = block.getElementsByClassName('box');
    
    let text = block.getElementsByTagName('h3');

    for(var i=0;i < text.length; i++){
        let h3=text[i];
        
        if(h3){
            let textValue = h3.textContent || h3.innerHTML;
            if(textValue.toLowerCase().indexOf(filter) > -1){
                box[i].style.display = "";
            }
            else{
                box[i].style.display ='none';
            }
        }
    }
}

// filter according to genre
const genre=document.getElementsByClassName('genre');
const movieList = document.getElementsByClassName('box');
const dropdownBtn= document.getElementById('genre-name');

for(var i=0;i<genre.length;i++){
    genre[i].addEventListener('click',(e)=>{
        e.preventDefault();
        
        const filter= e.target.dataset.filter;
        console.log(filter);

        for(var movie=0;movie<movieList.length;movie++){
            if(filter == 'all'){
                movieList[movie].style.display="block"
            }else{
                if(movieList[movie].classList.contains(filter)){
                    movieList[movie].style.display="block";
                    dropdownBtn.textContent= filter;
                }
                else{
                    movieList[movie].style.display="none";
                }
            }
        }
    })
}


// hamburger menubar
const hamburger= document.getElementById('hamburger');
const navLinks= document.getElementById('navlinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})