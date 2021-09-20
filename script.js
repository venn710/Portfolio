$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
});
$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
function download()
{
    var link = document.createElement("a");
    link.href = "VENKATESHAMBODDULARESUME.pdf";
    link.download="VENKATESHAMBODDULARESUME.pdf";
    link.click();
    // link.id='downloadAnchor';
    // document.body.appendChild(link);
}
function topscroll()
{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
document.querySelector('#web').style.setProperty('--w','80%');
document.querySelector('#pp').style.setProperty('--w','80%');
document.querySelector('#flutter').style.setProperty('--w','70%');
document.querySelector('#cp').style.setProperty('--w','70%');
document.querySelector('#ds').style.setProperty('--w','70%');
document.querySelector('#node').style.setProperty('--w','60%');