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
});