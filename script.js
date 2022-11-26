$(document).on("click", ".ball", function () {
  $(this).css({
    top: $(this).position().top + "px",
    left: $(this).position().left + "px",
  });

  $(this).addClass("onclick");

  setTimeout(function () {
    $("button.ball").each(function () {
      if (!$(this).hasClass("onclick")) $(this).fadeOut(100);
    }, 50);
  });
});



