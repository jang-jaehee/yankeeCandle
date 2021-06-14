$(document).ready(function(){
    cartPopup();
});

function cartPopup(){
    $(document).ready(function(){
        $(".openPopup").click(function(){
            $(".addtocart").show();
        });
        $(".close").click(function(){
            $(".addtocart").hide();
        });
    });
}