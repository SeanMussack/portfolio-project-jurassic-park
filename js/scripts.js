$(document).ready(function(){
    $(".infoAccordion a").click(function(){
        $(".infoAccordion a").find(".fa-minus").addClass("fa-plus");
        $(".infoAccordion a").find(".fa-minus").removeClass("fa-minus");
        $(".infoAccordion a").find(".fa-minus-square-o").addClass("fa-plus-square-o");
        $(".infoAccordion a").find(".fa-minus-square-o").removeClass("fa-minus-square-o");
        if (!($(this).find("div").hasClass("show"))){
            $(this).find(".fa-plus").addClass("fa-minus");
            $(this).find(".fa-plus").removeClass("fa-plus");
            $(this).find(".fa-plus-square-o").addClass("fa-minus-square-o");
            $(this).find(".fa-plus-square-o").removeClass("fa-plus-square-o");
        }
    });
    $("#newsletterModal").on("shown.bs.modal", function(){
        $(this).find("#newsletterEmail").focus();
    });
    $("#promoCodeModal").on("shown.bs.modal", function(){
        $(this).find("#promoCode").focus();
    });
});