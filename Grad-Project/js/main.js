// Start Navbar Active Code
// $('.navbar-nav a').on('click', function () {
//   $(' .navbar-nav ').find('li.active').removeClass('active');
//   $(this).parent('li').addClass('active');
// });

// End Navbar Active Code

// Start Navbar Scroll Background Color
let sliderSecScroll = $("#sliderSec").offset().top;
$(window).scroll(function() {
        let wScroll = $(window).scrollTop();
        if (wScroll > sliderSecScroll) {
            $(".navbar").css("backgroundColor", "rgb(0,0,0,.6)");

        } else {
            $(".navbar").css("backgroundColor", "transparent");

        }

    }

);

// End Navbar Scroll Background Color
// Start Logo Display Code
/* $(".navbar-toggler").click(function () {
  $(".logo ").css("display", "none")
}) */

// End Logo Display Code

// start color box
$("#icon-box").click(function() {
    $("#color-box").fadeIn(2000);
    let colorBoxWidth = $("#color-box").innerWidth();
    if ($("#all-box").css("left") == "0px")

    {
        $("#all-box").animate({ left: `-${colorBoxWidth}` }, 1000);

    } else {
        $("#all-box").animate({ left: `0px` }, 1000);

    }
})

for (let i = 0; i < $(".color-item").length; i++) {

    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    $(".color-item").eq(i).css("backgroundColor", `rgb(${red},${green},${blue})`);
}

$(".color-item").click(function() {
    let colorItem = $(this).css("backgroundColor");
    $(".colored").css("color", colorItem);
    $(".changed").css("backgroundColor", colorItem);
    $(".gradiant").css("background", colorItem);


})




//end color box
// start button different
$(window).scroll(function() {

    let wScroll = $(window).scrollTop();
    if (wScroll > 700) {
        $(".different").fadeIn(1000);
    } else {
        $(".different").fadeOut(1000);

    }

})

$(".different").click(function() {
            $("html,body").animate({ scrollTop: 0 }, 3000);
        }



    )
    // end button different





// start slider
$(document).ready(function() {

    // start nav bar
    var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: ['كلية الحاسبات والمعلومات جامعة الزقازيق', 'الشئون الطلابية'],
        loop: true
    });

    var typed = new Typed('.anthorElement', {
        // Waits 1000ms after typing "First"
        strings: ['كلية الحاسبات والمعلومات جامعة الزقازيق', 'الشئون الطلابية'],
        loop: true
    });

})


// end slider

//featured work shuffle
$(".featured-work ul li").on('click', function() {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
        $(".shuffle-imgs .col-md-3").css("opacity", 1);
    } else {
        $(".shuffle-imgs .col-md-3").css("opacity", "0.08");
        $($(this).data("class")).parent().css("opacity", 1);
    }
});


// ----------------------------------Start  Suffle Slider---------------------------

var imgs = Array.from(document.querySelectorAll(".featured-work img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var closeButton = document.getElementById("close");
var currentIndex = 0;



for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function(eventInfo) {

        currentIndex = imgs.indexOf(eventInfo.target);

        var imgSrc = eventInfo.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
        lightBoxContainer.style.display = "flex";
    })
}

function nextSlide() //function to change index of img and get the next image
{
    currentIndex++;
    if (currentIndex == imgs.length) // if the cuurent index go to the end img go to the start again to exeption the error
    {
        currentIndex = 0;
    }

    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";

}
nextButton.addEventListener("click", nextSlide); //To Call Function When user click in next icon


function prevSlide() //function to change index of img and get the next image
{
    currentIndex--;
    if (currentIndex < 0) // if the cuurent index go to the end img go to the start again to exeption the error
    {
        currentIndex = imgs.length - 1;
    }

    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";

}
prevButton.addEventListener("click", prevSlide);

function closeSlide() {
    lightBoxContainer.style.display = "none";
}
closeButton.addEventListener("click", closeSlide);




// ----------------------------------End Suffle Slider---------------------------