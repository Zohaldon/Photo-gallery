var slideIndex = 1;
displaySlides(slideIndex);

function addSlides(number) {
  displaySlides(slideIndex += number);
}

function activeSlide(number) {
  displaySlides(slideIndex = number);
}

function displaySlides (number) {
  var counter;
  var slides = document.getElementsByClassName("slides_fade");
  var dots = document.getElementsByClassName("dot");
  if (number > slides.length)
  {
    slideIndex = 1;
  }
  if (number < 1)
  {
    slideIndex = slides.length;
  }
  for (counter = 0; counter < slides.length; counter++)
  {
    slides[counter].style.display = "none";
  }
  for (counter = 0; counter < dots.length; counter++)
  {
    dots[counter].className = dots[counter].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/*----------------------------------------------Add images to fav with javascript------------------------------*/
var iop = document.getElementById("favorite_imgs");

function addImgToDiv(img) { 
  var images = document.getElementsByClassName("small_image").length
  if(images <= 4){
    var lastImage = document.createElement("img");
    lastImage.width = "200";
    lastImage.height = "100";
    lastImage.src = modalImg.src;  
    lastImage.id = "small_image"+img.getAttribute("data-id")
    lastImage.classList.add("small_image")
    iop.appendChild(lastImage);
    $.notify("Image added to your favourite", "success");
  }else{
    $.notify("Please Remove One of your favourite Image", "warn");
  }

}
/*to remove the image from fav*/
function removeImgFromDiv(img) { 
  id = "small_image"+img.getAttribute("data-id")
  image = document.getElementById(id)
  if(image){
    image.remove();
    $.notify("Image removed from your favourite", "error");
  }
}
/*------------------------------------------------------modal--------------------------------------------*/
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('1');
var modalImg = document.getElementById("imgForModal");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
} 
var addtofav = document.getElementById("add_to_fav");
var imag = document.getElementById("favorite_imgs");

/*-------------------------modal 1-----------------------------*/
var img1 = document.getElementById('1');
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  console.log("Call");
  document.getElementById("add_to_fav").setAttribute("data-id",1)
  document.getElementById("remove_fav").setAttribute("data-id",1)
}

/*-------------------------modal 2-----------------------------*/
var img2 = document.getElementById('2');
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  console.log("Call");
  document.getElementById("add_to_fav").setAttribute("data-id",2)
  document.getElementById("remove_fav").setAttribute("data-id",2)
}
/*-------------------------modal 3-----------------------------*/
var img3 = document.getElementById('3');
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",3)
  document.getElementById("remove_fav").setAttribute("data-id",3)
}
/*-------------------------modal 4-----------------------------*/
var img4 = document.getElementById('4');
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",4)
  document.getElementById("remove_fav").setAttribute("data-id",4)
}
/*-------------------------modal 5-----------------------------*/
var img5 = document.getElementById('5');
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",5)
  document.getElementById("remove_fav").setAttribute("data-id",5)
}
/*-------------------------modal 6-----------------------------*/
var img6 = document.getElementById('6');
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",6)
  document.getElementById("remove_fav").setAttribute("data-id",6)
}
/*-------------------------modal 7-----------------------------*/
var img7 = document.getElementById('7');
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",7)
  document.getElementById("remove_fav").setAttribute("data-id",7)
}
/*-------------------------modal 8-----------------------------*/
var img8 = document.getElementById('8');
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",8)
  document.getElementById("remove_fav").setAttribute("data-id",8)
}
/*-------------------------modal 9-----------------------------*/
var img9 = document.getElementById('9');
img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",9)
  document.getElementById("remove_fav").setAttribute("data-id",9)
}
/*-------------------------modal 10-----------------------------*/
var img10 = document.getElementById('10');
img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  document.getElementById("add_to_fav").setAttribute("data-id",10)
  document.getElementById("remove_fav").setAttribute("data-id",10)
}