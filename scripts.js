$(document).ready(function() {
  $("form#leapYear").submit(function(event) {
    const inputYear = parseInt($("input#inputYear").val())
    


    if inputYear/100 === 0

    else if (numberYear % 4 === 0) {
      return true
    }

    else if (numberYear % 400 === 0) {
      return true
    }

    else {
      return false;
    }

    event.preventDefault();
  });
});