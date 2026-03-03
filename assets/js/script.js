 const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        const body = document.body;

        document.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            dot.style.transform = `translate(${posX - 4}px, ${posY - 4}px)`;
            ring.style.transform = `translate(${posX - 17.5}px, ${posY - 17.5}px)`;
        });

        const interactives = document.querySelectorAll('a, button, .castle-card, .fab-item, .fab-main');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => body.classList.add('cursor-active'));
            el.addEventListener('mouseleave', () => body.classList.remove('cursor-active'));
        });


$(document).ready(function(){
  $(".service-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive:{
        0:{ items:1 },
        768:{ items:3 },
        1000:{ items:5 }
    }
  });
});

function alignFacebookHeight() {
    const mainContent = document.querySelector('.col-lg-9');
    const fbWidget = document.getElementById('dynamic-fb-page');
    const sidebarTitle = document.querySelector('.sidebar-title');

    if (mainContent && fbWidget) {
        // 1. Calculate the exact height of the side column
        // Subtract the title height and some padding (approx 40px)
        const targetHeight = mainContent.offsetHeight - sidebarTitle.offsetHeight - 40;
        
        // 2. Set the new height attribute (FB min is 70, max is 2500)
        const finalHeight = Math.floor(Math.max(500, targetHeight));
        
        fbWidget.setAttribute('data-height', finalHeight);

        // 3. Force Facebook to re-process the widget with the new height
        if (window.FB) {
            FB.XFBML.parse(fbWidget.parentElement);
        }
    }
}

// Run on load and after a short delay to ensure images in col-lg-9 are loaded
window.addEventListener('load', () => {
    setTimeout(alignFacebookHeight, 1000); 
});

// Re-run if the window is resized
window.addEventListener('resize', alignFacebookHeight);


$(document).ready(function(){
  $(".featured-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1
        },
        768:{
            items: 2
        },
        1200:{
            items: 3
        }
    }
  });
});