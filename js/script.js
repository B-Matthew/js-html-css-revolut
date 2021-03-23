function hoverProva() {
  var ulHeader = $(".ul-header > li");
  ulHeader.hover(function(){

    if ($(".drop").hasClass("block")) {
      $(".drop").removeClass("block");
    }

    $(this).find(".drop").addClass("block");
  });
}

function clickRemove() {
  $("body").click(function(){

    $(this).find(".drop").removeClass("block");
  });
}



function init() {
  clickRemove();
  hoverProva();
}


$(document).ready(init);
