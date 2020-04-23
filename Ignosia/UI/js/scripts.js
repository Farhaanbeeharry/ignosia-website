//function to display the preloader
(function ($) {

    "use strict"; //function needs to be run at no condition

    //while the window is still loading
    $(window).on('load', function () {

        //set the preloader to fade out in 500 ms
        var preloaderFadeOutTime = 500;

        //get the preloader
        function hidePreloader() {

            //declaring a variable with the preloader name
            var preloader = $('.spinner-wrapper');

            //function to display the preloader
            setTimeout(function () {

                //set the preloader fade out time to 500ms
                preloader.fadeOut(preloaderFadeOutTime);

            }, 500); //timeout of the preloader is set to 500 ms

        }

        //run the preloader function
        hidePreloader();

    });

    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function () {

        //if the scroll is more than 20px from the top
        if ($(".navbar").offset().top > 20) {

            //add the class collapse to the navbar (jQuery)
            $(".fixed-top").addClass("top-nav-collapse");

        } else { //if the scroll is less than 20px from the top

            //remove the class collapse from the navbar (jQuery)
            $(".fixed-top").removeClass("top-nav-collapse");

        }

    });

    // jQuery for page scrolling feature on navbar click - requires jQuery Easing plugin
    $(function () {

        //on clicking on an option in the navbar
        $(document).on('click', 'a.page-scroll', function (event) {

            //variable anchor is declared and set to the name of the option clicked
            var $anchor = $(this);

            $('html, body').stop().animate({ //animate the scroll

                //scroll to the option the user clicked on
                scrollTop: $($anchor.attr('href')).offset().top

            }, 1000, 'easeInOutExpo'); //set the scroll animation to 1000ms and with easeInOutExpo animation

            event.preventDefault(); //if the event is not handles, default action should not be taken

        });

    });

    //closes the responsive menu on menu item click (for smaller screen)
    $(".navbar-nav li a").on("click", function (event) { //when an option is clicked on the navbar

        if (!$(this).parent().hasClass('dropdown')) //if the website has a dropdown displayed
            $(".navbar-collapse").collapse('hide'); //hide the dropdown

    });

    //Rotating Text - Morphtext
    $("#js-rotating").Morphext({

        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",

        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",

        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,

        complete: function () {
            // Called after the entrance animation is executed.
        }

    });

    //Card Slider - Swiper
    var cardSlider = new Swiper('.card-slider', {

        //the card will auto slide
        autoplay: {

            delay: 5000, //delay of each slide is 5000ms
            disableOnInteraction: false //set the disable interaction to false - means can be interacted with (click and swipe)

        },
        loop: true, //set the loop to true (the slides will never end)
        navigation: { //buttons functions

            nextEl: '.swiper-button-next', //next button will display the next card
            prevEl: '.swiper-button-prev' //previous button will display the previous card

        },
        slidesPerView: 3, //amount of cards per view
        spaceBetween: 20, //space between each card
        breakpoints: {

            992: { // when window is <= 992px

                slidesPerView: 2 //when display is less than 992px, set the amount of cards per view to 2

            },

            768: { // when window is <= 768px

                slidesPerView: 1 //when display is less than 768px, set the amount of cards per view to 1

            }

        }

    });

    //Image Slider - Swiper
    var imageSlider = new Swiper('.image-slider', {

        autoplay: { //the gallery will auto slide

            delay: 2000, //delay between each slide is 2000ms
            disableOnInteraction: false //set the disable interaction to false - means can be interacted with (click and swipe)

        },
        loop: true, //set the loop to true (the slides will never end)
        navigation: { //buttons functions

            nextEl: '.swiper-button-next', //next button will display the next card
            prevEl: '.swiper-button-prev' //previous button will display the previous card

        },
        spaceBetween: 30, //space between each image is 30px
        slidesPerView: 5, //number of images per view is 5
        breakpoints: {


            380: { // when window is <= 380px

                slidesPerView: 1, //images per view becomes 1
                spaceBetween: 10 //space between each image becomes 10

            },

            516: { // when window is <= 516px

                slidesPerView: 2, //images per view becomes 2
                spaceBetween: 10 //space between each image becomes 10

            },

            768: { // when window is <= 768px

                slidesPerView: 3, //images per view becomes 3
                spaceBetween: 20 //space between each image becomes 20

            },

            992: { // when window is <= 992px

                slidesPerView: 4, //images per view becomes 4
                spaceBetween: 30 //space between each image becomes 30

            },

            1200: { // when window is <= 1200px

                slidesPerView: 5, //images per view becomes 5
                spaceBetween: 30 //space between each image becomes 30

            },
        }
    });

    //Image Slider - Magnific Popup
    $('.popup-link').magnificPopup({

        removalDelay: 300,  //set the delay to 300ms
        type: 'image', //the type of the display pop up is set to image
        callbacks: {

            beforeOpen: function () { //when opening the image

                //the order will be remembered and appeared on close
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure ' + this.st.el.attr('data-effect'));

            },
            beforeClose: function () { //when closing the image

                //when closing, add the class fadeOut for animation
                $('.mfp-figure').addClass('fadeOut');

            }
        },
        gallery: { //images like a gallery (on click on the image)

            enabled: true //enable gallery mode

        }

    });

    //Video Lightbox - Magnific Popup
    $('.popup-youtube, .popup-vimeo').magnificPopup({ //set the popup to youtube type video

        disableOn: 700, //set the disable timeout to 700ms
        type: 'iframe', //type of the popup is iFrame
        mainClass: 'mfp-fade', //add animation
        removalDelay: 160, //delay for the popup removal
        preloader: false, //disable the preloader
        fixedContentPos: false, //set the fixed content position to false
        iframe: {

            patterns: {

                youtube: { //if the link is a youtube one

                    index: 'youtube.com/', //set the index to youtube
                    id: function (url) {

                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if (!m || !m[1]) return null;
                        return m[1];

                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' //opens the youtube player
                },
                vimeo: { //if the link is a vimeo one

                    index: 'vimeo.com/', //set the index to vimeo
                    id: function (url) {

                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if (!m || !m[5]) return null;
                        return m[5];

                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1' //opens the vimeo player
                }

            }

        }

    });

    //Lightbox - Magnific Popup
    $('.popup-with-move-anim').magnificPopup({

        type: 'inline', //type of the popup is inline
        fixedContentPos: false, //keep it false to avoid html tag shift with margin-right: 17px
        fixedBgPos: true, //fix the background position on scroll
        overflowY: 'auto', //set the height to auto
        closeBtnInside: true, //add a close button inside the lightbox
        preloader: true, //enable the preloader
        midClick: true, //allow midClick
        removalDelay: 300, //time delay for the light box to close
        mainClass: 'my-mfp-slide-bottom' //add class to the lightbox

    });

    //function to get the counters value
    function getNumbers() {

        getCount("happiness", "userreview", "happy");
        getCount("satisfaction", "userreview", "excellent");
        getCount("subscription", "usermessage", "subscribed");
        getCountDownload();

    }

    //Counter - CountTo
    $(window).scroll(function () {

        if ($('#counter').length) { //checking if CountTo section exists in the page, if not it will not run the script and avoid errors	

            var oTop = $('#counter').offset().top - window.innerHeight; //get the top position
            var oBottom = $('#counter').offset().top; //get the bottom position
            if ($(window).scrollTop() < oTop || $(window).scrollTop() > oBottom) { //if the counter goes above the top or below the bottom, restart the counter

                getNumbers(); //get the numbers from the database to display on the counter

                $('.counter-value').each(function () { //start the counter

                    var $this = $(this), //start from initial value (set to 0)
                        countTo = $this.attr('data-count'); //end on the value from the database
                    $this.text("0"); //initial value set to 0

                    $({

                        countNum: $this.text() //count from 0 to the final value

                    }).animate({ //animate the counter

                        countNum: countTo //from 0 to the final value

                    },
                        {

                            duration: 2000, //duration of the animation
                            easing: 'swing', //type of easing
                            step: function () { //how to animate

                                $this.text(Math.floor(this.countNum)); //increase the count by 1

                            },
                            complete: function () { //on count animation completed

                                $this.text(this.countNum); //display the value from the database

                            }

                        });

                });

            }

        }

    });

    //move Form Fields Label When User Types
    //for input and textarea fields
    $("input, textarea").keyup(function () {

        if ($(this).val() != '') { //if the textfield is not empty

            //add the class not empty - class contains position of where title should be when not empty
            $(this).addClass('notEmpty');

        } else { //if the textfield is empty

            //remove the class notEmpty for title to take middle position
            $(this).removeClass('notEmpty');

        }

    });

    //contact Form 
    $("#contactForm").validator().on("submit", function (event) { //on submitting the contact form

        //removes the default message which appears on empty textfields
        event.preventDefault();

    });


    //back To Top Button
    //create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>'); //add this html link in the body of the webpage

    //if page is scrolled for more than 700px from the top
    var amountScrolled = 700;

    $(window).scroll(function () { //on scrolling

        if ($(window).scrollTop() > amountScrolled) { //if page is scrolled more than the amount defined

            //if scrolled more than defined amount, add the back to top button with fade in animation and duration 500ms
            $('a.back-to-top').fadeIn('500');

        } else { //if page is not scrolled more than the defined amount

            //if scrolled less than defined amount, remove the back to top button with fade out animation and duration 500ms
            $('a.back-to-top').fadeOut('500');

        }

    });

    //removes Long Focus On Buttons 
    $(".button, a, button").mouseup(function () {

        $(this).blur(); //add the blur to the particular button clicked

    });

})(jQuery); //this whole script uses jQuery