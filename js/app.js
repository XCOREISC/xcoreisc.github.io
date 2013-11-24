

//     social
$("#showSocial").on('click',function(){
  $("#showSocial").toggleClass('bck-dark');
  $("#showSocial > span").toggleClass('rotate-arrow-open');
  $("#social").toggleClass('open-social');
});

/************* ¨Links *************************/
  var iconInfo= $("#icon-info"),
  iconPlace= $("#icon-place"),
  iconVideos= $("#icon-videos"),
  iconSocial= $("#icon-social"),
  iconGallery= $("#icon-gallery");

  /*********** Tab content ******************/
  var contentInfo=$(".info"),
  contentPlace=$(".place"),
  contentVideos=$(".videos"),
  contentSocial=$(".social"),
  contentGallery=$(".gallery");


  iconInfo.on("click",function(){
    $(".navbar").css({"height":contentInfo.height()+'px'});
    $(".cronograma").css({"margin-top":"2.2rem" } );
  });
  iconPlace.on("click",function(){
    $(".navbar").css({"height":contentPlace.height()+'px'});
    $(".cronograma").css({"margin-top":"2.2rem" } );
  });
  iconVideos.on("click",function(){
    $(".navbar").css({"height":contentVideos.height()+'px'});
    $(".cronograma").css({"margin-top":"2.2rem" } );
  });
  iconGallery.on("click",function(){
    $(".navbar").css({"height":contentGallery.height()+'px'});
    $(".cronograma").css({"margin-top":"2.2rem" } );
  });
  iconSocial.on("click",function(){
    $(".navbar").css({"height":contentSocial.height()+'px'});
    $(".cronograma").css({"margin-top":"2.2rem" } );
  });


  /************** navigation ************/

  var elem = document.getElementById('gallery-pics');
  window.mySwipe = Swipe(elem, {
    // startSlide: 4,
     auto: 4000,
     continuous: true
    // disableScroll: true,
    // stopPropagation: true,
    // callback: function(index, element) {},
    // transitionEnd: function(index, element) {}
  });

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
      //center: new google.maps.LatLng(-6.707681,-79.903999),
      center: new google.maps.LatLng(-6.706584,-79.904665),
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
     //var myLatLng = new google.maps.LatLng(-6.707681,-79.903999);
     var myLatLng = new google.maps.LatLng(-6.706584,-79.904665);
      var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map
      });

    google.maps.event.addListener( beachMarker,'click',function(){
      infoWindow.open(map,beachMarker);
    });
  });


function getWidth()
  {
    xWidth = null;
    if(window.screen != null)
      xWidth = window.screen.availWidth;
 
    if(document.body != null)
      xWidth = document.body.clientWidth;

    if(window.innerWidth != null)
      xWidth = window.innerWidth;
 
    return xWidth;
  }
function getHeight() {
  xHeight = null;
  
  if(document.body != null)
    xHeight = document.body.clientHeight;

  if(window.screen != null)
    xHeight = window.screen.availHeight;
 
  if(window.innerHeight != null)
    xHeight =   window.innerHeight;
 
 
  return xHeight;
}




var h=getHeight();
var w=getWidth();
/*
  iconInfo.click(function(e) {e.preventDefault();});
  iconInfo.attr('disabled', true);
  iconPlace.click(function(e) {e.preventDefault();});
  iconVideos.click(function(e) {e.preventDefault();});
  iconGallery.click(function(e) {e.preventDefault();});

*/
if(w>=992 && h <=718){
  $("#header").css({"min-height":h+"px"});
}else{
  if(w>=992){
    $("#header").css({"min-height":"718px"});
  }else{
    $('#showMenu, #nav').on('click',function(){
      $("#showMenu").toggleClass('button-nav');
      $("#showMenu > span").toggleClass('rotate-arrow-open-nav');
      $('body').toggleClass('menu-push-toright');
      $('#nav').toggleClass('menu-open');
    });
  }
}

$(".modal > div ").css({'height':(h-50)+"px"});
/*

var PCompleto=Backbone.Model.extend();

var pUnprg=new PCompleto({
  costo:35,
  status:false
});


*/