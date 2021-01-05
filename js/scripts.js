$(document).ready(function(){
    $(".infoAccordion a").click(function(){
        $(".infoAccordion a").find(".fa-minus").addClass("fa-plus");
        $(".infoAccordion a").find(".fa-minus").removeClass("fa-minus");
        if (!($(this).find("div").hasClass("show"))){
            $(this).find(".fa-plus").addClass("fa-minus");
            $(this).find(".fa-plus").removeClass("fa-plus");
        }
    });
    $("#newsletterModal").on("shown.bs.modal", function(){
        $(this).find("#newsletterEmail").focus();
    });
    $("#promoCodeModal").on("shown.bs.modal", function(){
        $(this).find("#promoCode").focus();
    });
});