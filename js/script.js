$(document).on('click', ".carousel__button-right",function(){ 
  var carusel = $(this).parents('.carousel__inner');
  right_carusel(carusel);
  return false;
});

$(document).on('click',".carousel__button-left",function(){ 
  var carusel = $(this).parents('.carousel__inner');
  left_carusel(carusel);
  return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel__block').outerWidth();
   $(carusel).find(".carousel__items .carousel__block").eq(-1).clone().prependTo($(carusel).find(".carousel__items")); 
   $(carusel).find(".carousel__items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel__items .carousel__block").eq(-1).remove();    
   $(carusel).find(".carousel__items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel__block').outerWidth();
   $(carusel).find(".carousel__items").animate({left: "-"+ block_width +"px"}, 200, function(){
    $(carusel).find(".carousel__items .carousel__block").eq(0).clone().appendTo($(carusel).find(".carousel__items")); 
      $(carusel).find(".carousel__items .carousel__block").eq(0).remove(); 
      $(carusel).find(".carousel__items").css({"left":"0px"}); 
   }); 
}
$(document).on('mouseenter', '.carousel__inner', function(){$(this).addClass('hover')})
$(document).on('mouseleave', '.carousel__inner', function(){$(this).removeClass('hover')})
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "thumbs",
    "close"
  ]
});