$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        loop:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2,
                margin:32,
                loop:true,
                dots: false,
            },
            // breakpoint from 480 up
            601 : {
                items:3,
                margin:32,
                loop:true,
                dots: false,

            },
            // breakpoint from 768 up
            1001 : {
                items:3,
                margin:48,
                dots: false,

            },
        }
    });
  });

//   video

const videobtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video')
const video = document.querySelector('#video__file')

videoWrapper.addEventListener('click', function() {
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay')
        videobtn.classList.add('none')
        video.play();
    }else {
        videoWrapper.classList.add('video-overlay')
        videobtn.classList.remove('none')
        video.pause();
    }
    
})

// mobile nav 

const openNavbtn = document.querySelector('#openMobiel');
const mobileNav =  document.querySelector('#mobileNav');
const closeNav = document.querySelector('#closeMobielNav');

openNavbtn.onclick = function () {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scrool');
}

closeNav.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scrool');

}

