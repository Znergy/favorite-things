$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
      // var color = $("#favColor").val();
      // var number = parseInt($("#favNumber").val());
      // var os = $("#favOS").val();
      //
      // var array = [color, number, os];
      // var newArray = [];
      //
      // for(i=0; i<newArray.length; i++) {
      //   $("#results").append("<li>" + multiArray[i]
      // };
      //
      // newArray.push(array[1], array[0], array[2]);
      // console.log(newArray);



      // var colorArray = ["#favColor", $("#favColor").val()];
      // var numberArray = ["#favNumber", $("#favNumber").val()];
      //
      // var multiArray = [colorArray, numberArray];

      var multiArray = [["Favorite Color: ", $("#favColor").val(), ".favColor"], ["Favorite Number", $("#favNumber").val(), ".favNumber"], ["Favorite OS: ", $("#favOS").val(), ".favOS"]];

      multiArray.forEach(function(array) {
        $(array[2]).css({
          "color": "red",
          "font-family": "cursive",
          "font-size": "50px"
          });
        $("#results").append("<li>" + array[0] + ": " + array[1] + "</li>");
      });

  });
});
