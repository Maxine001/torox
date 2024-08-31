const contractTitle = document.querySelectorAll('.contract-title');
//contractAddy = document.querySelectorAll('.ca');

 const contractAddy = $('.ca').hide();
 console.log(contractAddy)


contractTitle.forEach((button) => {
  button.addEventListener('mouseover',() => {
    if(contractAddy){
     $(this).show();
    }else{button.addEventListener('mouseout',() => {
      $('.ca').hide();
    })}
   
  });
});