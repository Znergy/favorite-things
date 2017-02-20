$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
      var color = $("#favColor").val();
      var number = parseInt($("#favNumber").val());
      var os = $("#favOS").val();

      var array = [color, number, os];
      var newArray = [];

      newArray.push(array[1], array[0], array[2]);
      console.log(newArray);

      $("#results").append("<li>Your favorite color is " + array[0] + ".</li>");
      $("#results").append("<li>Your favorite number is " + array[1] + ".</li>");
      $("#results").append("<li>Your favorite OS is " + array[2] + ".</li>");
  });
});
