$(document).ready(function() {
  var total = 0;
  $("#one, #two, #three, #four").click(function(event) {
    console.log("in click function");
    if ($(event.target).attr('id') == 'one') {
      alert(total + 1);
    } else if ($(event.target).attr('id') == 'two') {
      alert(total + 2);
    } else if ($(event.target).attr('id') == 'three') {
      alert(total + 3);
    }  else if ($(event.target).attr('id') == 'four') {
      alert(total + 4);
    }
  });
});
