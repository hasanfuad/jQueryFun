//jQuery with CSS

//$("h1").css("color","red")


//$("button").css("color");

//jQuery for Class

//$("h1").addClass("big-title margin-50")

//jQuery for text manipulation

// $("h1").html ("<em>Don't click</em>")

//jQuery for attribute

//$("a").attr("href", "https://www.yahoo.com")

//jQuery for add event listener

$("h1").css("font-size", "50px")

$("h1").click(function(){
    $("h1").css("color", "purple")
})


// for(var i = 0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "red";
//     })
// }

// $("button").click("click", function(){
//     $("h1").css("color", "red")
// })


// $("input").keypress(function(event){
//     $("h1").text(event.key);
// });

//mouseOver in jQuery

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "green")
// })

//jQuery animation

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})