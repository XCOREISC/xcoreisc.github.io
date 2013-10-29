$(document).on("ready",function(){
	$('#countdown').countdown( {date: '20 november 2013 12:24:00'} );
	$("#days").knob({
    min: 0,
    max: 60,
    readOnly :true,
    width:60,
    height:60,
    fgColor:"#ebedee",
    inputColor:"#ebedee",
    thickness:0.2
  });
  $("#hours").knob({
    min: 0,
    max: 24,
    readOnly :true,
    width:60,
    height:60,
    fgColor:"#ebedee",
    inputColor:"#ebedee",
    thickness:0.2
  });
  $("#mins").knob({
    min: 0,
    max: 60,
    readOnly :true,
    width:60,
    height:60,
    fgColor:"#ebedee",
    inputColor:"#ebedee",
    thickness:0.2
  });
  $("#secs").knob({
    min: 0,
    max: 60,
    readOnly :true,
    width:60,
    height:60,
    fgColor:"#ebedee",
    inputColor:"#ebedee",
    thickness:0.2
  });
  /************** navigation ************/
    var menuLeft = document.getElementById( 'nav' ),
        buttonNav=document.getElementById('showMenu'),
        body = document.body;
      
    buttonNav.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( body, 'menu-push-toright' );
      classie.toggle( menuLeft, 'menu-open' );
    };
    
  var elem = document.getElementById('cronograma');
  window.mySwipe = Swipe(elem, {
    // startSlide: 4,
    // auto: 3000,
    // continuous: true,
    // disableScroll: true,
    // stopPropagation: true,
    // callback: function(index, element) {},
    // transitionEnd: function(index, element) {}
  });
  /************* ¨Links *************************/
  var iconInfo= $("#icon-info"),
  iconPlace= $("#icon-place"),
  iconDate= $("#icon-date"),
  iconGallery= $("#icon-gallery");

  /*********** Tab content ******************/
  var contentInfo=$(".info"),
  contentDate=$(".date"),
  contentPlace=$(".place"),
  contentGallery=$(".gallery");


  iconInfo.on("click",function(){
    $(".navbar").css({"height":contentInfo.height()+'px'});
    $(".cronograma").addClass("margin-top-3");
  });
  iconPlace.on("click",function(){
    $(".navbar").css({"height":contentPlace.height()+'px'});
    $(".cronograma").addClass("margin-top-3");
  });
  iconDate.on("click",function(){
    $(".navbar").css({"height":contentDate.height()+'px'});
    $(".cronograma").addClass("margin-top-3");
  });
  iconGallery.on("click",function(){
    $(".navbar").css({"height":contentGallery.height()+'px'});
    $(".cronograma").addClass("margin-top-3");
  });





});