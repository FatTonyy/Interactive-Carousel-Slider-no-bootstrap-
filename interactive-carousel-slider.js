function slideNext(whichGroup,whichDirection) {
  for (var i = 0 ; i < whichGroup.length ; i++) {
      if ($(whichGroup[i]).is(":visible") && whichDirection == "next") {
        thisDiv = $(whichGroup[i]);
        if (i != whichGroup.length-1) {
          nextDiv = thisDiv.next();
        } else {
          return(false);
        }
        showDirection = "right";
        hideDirection = "left";
      } 
    if ($(whichGroup[i]).is(":visible") && whichDirection == "prev") {
        thisDiv = $(whichGroup[i]);
        if (i != 0) {
            nextDiv = thisDiv.prev()
          } else {
            return(false);
          }
        showDirection = "left";
        hideDirection = "right";
        
      }    
  } 
  
  thisDiv.hide("slide", {direction: hideDirection}, 600);
  nextDiv.delay(1000).show("slide", {direction: showDirection}, 600);
}  

/* trigger for first slider */
$(document).ready(function() {
    $('.slider1next').click(function() {
    slideNext($('#slide1 div.slider'),'next');
    });
    $('.slider1prev').click(function() {
    slideNext($('#slide1 div.slider'),'prev');
    }); 

    /* trigger for second slider */
    $('.slider2next').click(function() {
    slideNext($('#slide2 div.slider'),'next');
    });
    $('.slider2prev').click(function() {
    slideNext($('#slide2 div.slider'),'prev');
    }); 
});