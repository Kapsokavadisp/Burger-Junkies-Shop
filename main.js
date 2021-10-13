

//function to keep all my eventListeners

eventListeners();
function eventListeners(){

  const ui = new UI()//Creating new object(type(UI))

  // pre-loader 

  window.addEventListener('load',function(){
    ui.hidePreloader();
  })
  
  //nav btn 
  
  document.querySelector('.navBtn').addEventListener('click', function(){
    ui.showNav();
  })

  //control video 
  document.querySelector('.video_switch').addEventListener('click',function(){
    ui.videoControl()
  })

  //display modal
  const links = document.querySelectorAll('.work-item-icon');

  links.forEach(function(item){
    item.addEventListener('click',function(event){
      ui.showModal(event)
    })
  })

  //hide modal

  document.querySelector('.work-modal-close').addEventListener('click',function(){
    ui.closeModal()
  })
}

//constructor

function UI(){
  
}

//Hides pre-loader

UI.prototype.hidePreloader = function(){
  document.querySelector('.preloader').style.display = "none";
}

//Show nav

UI.prototype.showNav = function(){
  document.querySelector('.nav').classList.toggle('nav-show')
}




// video-switch

UI.prototype.videoControl = function(){
  let btn = document.querySelector('.video_switch-btn');
  if(!btn.classList.contains('btn-slide')){
    btn.classList.add('btn-slide')
    document.querySelector('.video_item').pause()
  }
  else {
    btn.classList.remove('btn-slide')
    document.querySelector('.video_item').play()
  }
}

// show modal 

UI.prototype.showModal = function(event){
  event.preventDefault();
  //console.log(event.target.parentElement);
  if(event.target.parentElement.classList.contains('work-item-icon'));
  //alert('hello')
  let id = event.target.parentElement.dataset.id
  //console.log(id);

  const modal = document.querySelector('.work-modal')
  const modalItem = document.querySelector('.work-modal-item');

  modal.classList.add('work-modal-show');
  modalItem.style.backgroundImage = `url(img/work${id}.jpg)`
}

// close modal

UI.prototype.closeModal = function(){
  document.querySelector('.work-modal').classList.remove('work-modal-show')
}

// to top button

var toTopButton = document.getElementById("toTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}