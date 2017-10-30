// Backend Logic
function Destination(location, landmark, date) {
  this.destLocation = location;
  this.destLandmark = landmark;
  this.visitDate = date;
}

// Frontend Logic
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var locationInput = $("input#location").val();
    var landmarkInput = $("input#landmark").val();
    var dateInput = $("input#time-of-year").val();

    var newLocation = new Destination(locationInput, landmarkInput, dateInput);

    $("#output").append(
      "<div class='col-md-4 pointer'><h3>Location</h3> " + newLocation.destLocation + " </div>",
      "<div class='col-md-4'><h3>Landmark</h3> " + newLocation.destLandmark + " </div>",
      "<div class='col-md-4'><h3>Date</h3> " + newLocation.visitDate + " </div>"
    );

    $(".col-md-4").first().click(function() {
      $("#show-location").show(800);
      $(".location").text(newLocation.destLocation);
      $(".landmark").text(newLocation.destLandmark);
      $(".date").text(newLocation.visitDate);
    });// Click end

    $("#location").val("");
    $("#landmark").val("");
    $("#time-of-year").val("");
  });// Submit end
});// Ready end
