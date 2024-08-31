const roadContent = document.querySelector('.answer');
roadContent.hidden = true;
const buttonElem = document.querySelector('.js-button');
const arrow = document.querySelector('.arrow');
//const hideButton = document.querySelector('.js-hide-button')
//hideButton.hidden = true;


buttonElem.addEventListener('click',() => {
  if(roadContent.hidden){
    roadContent.hidden = false;
    arrow.hidden = true;
    buttonElem.innerHTML="HIDE COMPLETE ROAP MAP"
    buttonElem.hidden = false;
    $('.answer').slideDown(2000);

    arrow.hidden = true;
    console.log(roadContent)

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