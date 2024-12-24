      /*----------Advertisement Section----------*/

const  images = ['images/VINI.JPG', 'images/LEWA.JPG', 'images/MESSI.JPG', 'images/feed-image-1.png', 'images/feed-image-5.png', 'images/feed-image-3.png', 'images/feed-image-2.png'];

function changeBackgroundImage() {
    const advertImage = document.querySelector('.advert-image');
    const randomNumber = Math.floor(Math.random() * images.length)
    advertImage.src = images[randomNumber];
}

setInterval(changeBackgroundImage, 2000);

     /*---------------Toggle Left Section(nav bar)------------------*/

     const toggleBtn = document.querySelector('.notification-btn');
     const toggleSection = document.querySelector('.left-section');
     const MiddleSection = document.querySelector('.middle-section'); 
     


     if(window.innerWidth < 768) {
        toggleBtn.addEventListener('click', () => {
            toggleSection.classList.toggle('show');
       });

       MiddleSection.onclick= function() {
        toggleSection.classList.remove('show');
       }
  

     }

    


  



