// Github verson (1 file .html): https://github.com/Soooda/progress_bar_lite/blob/master/index.html



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();



 

    // Smooth scrolling on the navbar links

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            
            smartBackspace: false,
            loop: true
        });
    }




    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    function increaseProgressBar(skillNumber, newValue) {
        const progressBar = document.querySelectorAll('.chart')[skillNumber - 1];
        progressBar.setAttribute('data-percent', newValue);
        const valueElement = document.getElementById(`value${skillNumber}`);
        valueElement.innerText = `0%`;
    
        // Clear previous animation
        const previousBar = progressBar.querySelector('.bar');
        previousBar.style.width = 0;
    
        const speed = 2000 / newValue; // Adjust the speed based on the new value
    
        // Set the animation
        const bar = progressBar.querySelector('.bar');
        bar.style.animation = `load ${speed}s forwards`;
    }
    
    increaseProgressBar(1, 95);
    increaseProgressBar(2, 25);
    increaseProgressBar(3, 75);
    
    
    
    
    

    // See more
    document.getElementById('see-more-1').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
    
        const fullContent = document.querySelector('.full-content');
        fullContent.classList.toggle('hidden');
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

