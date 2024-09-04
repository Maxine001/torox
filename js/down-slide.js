const buttonElem = document.querySelector('.js-button');
const roadContent = document.querySelector('.answer');


function showElemButton() {
roadContent.hidden = true;
const arrow = document.querySelector('.arrow');
//const hideButton = document.querySelector('.js-hide-button')
//hideButton.hidden = true;

buttonElem.addEventListener('click',() => {
  if(roadContent.hidden){
    roadContent.hidden = false;
    arrow.hidden = true;
    buttonElem.hidden = true;
    createButton();

   //slide contents
    $('.answer').slideDown(2000);
    arrow.hidden = true;

  }else{
    roadContent.hidden = true;
    arrow.hidden = false;
    

  }
  
  /*
  else if(hideButton.hidden =false){
    
    hideButton.addEventListener('click',() => {
      hideButton.hidden = true;
      roadContent.hidden = true;
      console.log('hi')
    })
    
  }
  */
  
})
}

showElemButton();

//Append a button
function createButton() {
  const hideElem = document.querySelector('.new-button-container');
  console.log(hideElem)

  hideButton = document.createElement('button')
  hideButton.className = "new-button";
  hideButton.textContent = "HIDE COMPLETE ROAD MAP";
  hideElem.appendChild(hideButton);

  const newButton = document.querySelector('.new-button');
  newButton.addEventListener('click',() => {
    console.log('hi')
    console.log(roadContent.hidden)
    if(roadContent.hidden === false){
    roadContent.hidden = true;
    newButton.hidden = true;
    buttonElem.hidden = false;}else{
      return
    }

  });

  
  
}



/*
const navElement = document.querySelector(".header");
  console.log(navElement);
  window.addEventListener('scroll',() =>{
    if(window.scrollY > 0){ navElement.style.display ="none"
      }else{
        navElement.style.display = "flex"
      }
  
  });
  */

const navElement = document.querySelector(".header");
var prevScrollPos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if(prevScrollPos > currentScrollPos) {
    navElement.style.display = 'none';
  }else{
    navElement.style.display = 'initial';
  }
};







