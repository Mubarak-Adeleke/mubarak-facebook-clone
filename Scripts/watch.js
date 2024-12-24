const videos = document.querySelectorAll('.video');
const fullScreenVideo = document.querySelector('.video-overlay');
const overlay = document.querySelector('.overlay');
const body = document.getElementsByTagName('body');
const closeBtn = document.querySelector('.closeBtn');

videos.forEach((video) => {
   video.addEventListener('click', () => {
       const videoId = video.id;
       const fullScreen = document.getElementById(videoId);
        let videoSrc = fullScreen.src;
        overlay.src =  videoSrc;
        fullScreenVideo.classList.add('show');
         overlay.play();
         
   });

   closeBtn.onclick = function () {
      fullScreenVideo.classList.remove('show');
      overlay.pause();
        
   };
});
