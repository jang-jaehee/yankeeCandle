$(document).ready(function(){
    activate('.btn_gnb', 'header nav');
    optionActivate();
    eyeicon();
    accordion();
});

function activate(clicker,target){
    $(clicker).click(function(){
        $(target).toggleClass('active');
    });
}

function optionActivate(){
    $('.thumbPager li.large').click(function(){
        $('.medium').removeClass('active');
        $('.small').removeClass('active');
        $('.large').addClass('active');
        $('.thumbPager li').removeClass('active');
        $(this).addClass('active');
    });
    $('.thumbPager li.medium').click(function(){
        $('.small').removeClass('active');
        $('.large').removeClass('active');
        $('.medium').addClass('active');
        $('.thumbPager li').removeClass('active');
        $(this).addClass('active');
    });
    $('.thumbPager li.small').click(function(){
        $('.medium').removeClass('active');
        $('.large').removeClass('active');
        $('.small').addClass('active');
        $('.thumbPager li').removeClass('active');
        $(this).addClass('active');
    });
}
function eyeicon(){
    $(".toggle-password").click(function(){
        $(this).toggleClass("eyeicon");
        var input = $($(this).attr("toggle"));
        if(input.attr("type") == "password"){
            input.attr("type", "text");
        }else{
            input.attr("type", "password");
        }
    });
}
function accordion(){
    $("p.title").on('click',function(){
        $(this).toggleClass('active');
        $(this).next(".panel").toggleClass('active');
    });
}