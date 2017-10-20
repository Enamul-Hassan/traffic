function initMap() {
    var uluru = {lat: 23.758068, lng: 90.386602};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru,
      scrollwheel: false,
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}