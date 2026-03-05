 $(document).ready(function() {
    // 1. Target the SUBMENU toggles specifically
    $('.dropdown-submenu > .dropdown-toggle').on("click", function(e) {
        if (window.innerWidth < 992) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get the specific menu linked to THIS button
            const $targetMenu = $(this).next('.dropdown-menu');
            
            // Toggle only this one
            $targetMenu.toggleClass('show');
            $(this).toggleClass('show');
            
            // Close other open sub-menus in the same parent list
            $(this).parent().siblings().find('.dropdown-menu').removeClass('show');
            $(this).parent().siblings().find('.dropdown-toggle').removeClass('show');
        }
    });

    // 2. Fix: Prevent the parent 'Event Hire' menu from closing when clicking sub-items
    $('.dropdown-submenu').on("click", function(e) {
        if (window.innerWidth < 992) {
            e.stopPropagation();
        }
    });
});
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
    autoplayTimeout: 5000,
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

$(document).ready(function() {
    // Thumbnail Click Functionality
    $('.thumbnail-slider img').on('click', function() {
        const newSrc = $(this).attr('src');
        
        // Update yellow border
        $('.thumbnail-slider img').removeClass('active-thumb');
        $(this).addClass('active-thumb');

        // Swap main image
        $('.main-img img').fadeOut(200, function() {
            $(this).attr('src', newSrc).fadeIn(200);
        });
    });

    // Arrow Navigation logic (updates border as you cycle)
    $('.fa-chevron-right, .fa-chevron-left').on('click', function() {
        const images = $('.thumbnail-slider img');
        const currentMain = $('.main-img img').attr('src');
        let index = images.map((i, img) => $(img).attr('src')).get().indexOf(currentMain);
        
        if($(this).hasClass('fa-chevron-right')) {
            index = (index + 1) % images.length;
        } else {
            index = (index - 1 + images.length) % images.length;
        }
        
        const nextImg = $(images[index]);
        $('.main-img img').attr('src', nextImg.attr('src'));
        
        // Update yellow border for arrows
        $('.thumbnail-slider img').removeClass('active-thumb');
        nextImg.addClass('active-thumb');
    });
});

$(document).ready(function(){
    // Popular Add-Ons Slider
   $(".addon-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ]
});

    // Image Swapper
    $('.thumb-item').on('click', function(){
        const newSrc = $(this).attr('src');
        $('#mainProductImage').attr('src', newSrc);
        $('.thumb-item').removeClass('active-thumb');
        $(this).addClass('active-thumb');
    });
});


const thumbs = document.querySelectorAll(".thumb-item");
const mainImage = document.getElementById("mainProductImage");

let currentIndex = 0;

function updateImage(index){
    mainImage.src = thumbs[index].src;

    thumbs.forEach(t => t.classList.remove("active-thumb"));
    thumbs[index].classList.add("active-thumb");

    currentIndex = index;
}

thumbs.forEach((thumb, i)=>{
    thumb.addEventListener("click", ()=>{
        updateImage(i);
    });
});

document.querySelector(".main-next").addEventListener("click", ()=>{
    let next = currentIndex + 1;
    if(next >= thumbs.length) next = 0;
    updateImage(next);
});

document.querySelector(".main-prev").addEventListener("click", ()=>{
    let prev = currentIndex - 1;
    if(prev < 0) prev = thumbs.length - 1;
    updateImage(prev);
});


