


google.maps.event.addDomListener(window,'load',function(){


    var styles = [
      {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [
          { color: "#e67e22" }
        ]
      },{
        featureType: "landscape.natural.landcover",
        elementType: "geometry",
        stylers: [
          { color: "#ff0000" }
        ]
      },{
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [
          { color: "#66CBFF" }
        ]
      },{
        featureType: "poi.attraction",
        elementType: "geometry",
        stylers: [
          { color: "#fff55b" }
        ]
      },{
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          { color: "#1abc9c" }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { color: "#7f8c8d" }
        ]
      },{
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#ffffff" }
        ]
      },{
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          { color: "7f8c8d" }
        ]
      }

    ];
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

    var mapOptions = {
      zoom: 18,
      center: new google.maps.LatLng(-6.707681,-79.903999),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };
    var map = new google.maps.Map(document.getElementById('map-unprg'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var infoWindow = new google.maps.InfoWindow({
      content:"<a href='https://foursquare.com/YetsuPe'><span class='icon-home icon-2x'></span></a><p>YetsuPe</p>"
    });

    // var image = 'images/icons/yetsu-mark-map.png';
     var myLatLng = new google.maps.LatLng(-6.707681,-79.903999);
      var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map
      });

    google.maps.event.addListener( beachMarker,'click',function(){
      infoWindow.open(map,beachMarker);
    });
  });


var h=window.screen.availHeight;
var w=window.screen.availWidth;

alert(w+"x"+h)















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
    $(".cronograma").css({"margin-top":"1rem" } );
  });
  iconDate.on("click",function(){
    $(".navbar").css({"height":contentDate.height()+'px'});
    $(".cronograma").addClass("margin-top-3");
  });
  iconGallery.on("click",function(){
    $(".navbar").css({"height":contentGallery.height()+'px'});
    $(".cronograma").css({"margin-top":"1rem" } );
  });

























});













