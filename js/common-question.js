
 
var heading=document.getElementsByClassName("according");
var i=0;
for (let i = 0; i < heading.length; i++) {
heading[i].addEventListener("click",function()
{
    this.classList.toggle("activeAcording");

var description= this.nextElementSibling;
if(description.style.maxHeight)
{
    description.style.maxHeight =null;
}
else{
    description.style.maxHeight = description.scrollHeight +"px";


}

}

);   
}


$(".cardImg").click(function(){
    let imgSrc=$(this).attr("src");
    $(" #lightBoxItem").css("backgroundImage","url(" + imgSrc+")" );

    $("#lightBoxContainer").css("display","flex");
   
  }
  )



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
        $("html,body").animate({ scrollTop: 0 }, 4000);
    }



)

//end button different



$(".navbar-toggler").click(function()
{
$(".logo").addClass("logoClick");

}


)
