function onclickAccordion(evt) {
  $header = $(evt.currentTarget);
  $header.toggleClass("accordion-active");

  $content = $header.closest('div[class=accordion]').find(".accordion-content");
  $content.toggleClass("accordion-content-active");

  // if($content.css("max-height") == "0px"){
  //   $content.css("max-height", "100px")
  // } else {
  //   $content.css("max-height", "0px")
  // }
}

window.onclickAccordion = onclickAccordion;
