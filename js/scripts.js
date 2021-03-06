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
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});