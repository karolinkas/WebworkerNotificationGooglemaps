// self.addEventHandler("message", funciton(event) {})
self.onmessage = function(event) {
  // "latitude+","+longitude
  // http://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672
  var map = "http://maps.googleapis.com/maps/api/staticmap?center="+event.data+"&zoom=12&size=190x190&sensor=false";
  console.log(map);
  self.postMessage(map)  
}
