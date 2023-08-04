$(document).ready(function() {
  
  // for temperature - kelvin
  function convertKelvin(input) {
    var kelvin = input;
    var celcius = Math.round((input - 273.15)*100)/100;
    var farenheit = Math.round(((9/5)*(input-273) +32)*100)/100;
    $('#kelvin').text(kelvin);
    $('#celcius').text(celcius);
    $('#farenheit').text(farenheit);
  }
  
  
  //for temperature - celcius
  function convertCelcius(input) {
    var kelvin = input + 273.15;
    var celcius = input;
    var farenheit = Math.round(((9/5)*input + 32)*100)/100;
    $('#kelvin').text(kelvin);
    $('#celcius').text(celcius);
    $('#farenheit').text(farenheit);
  }
  
  
  //for temperature - farenheit
  function convertFarenheit(input) {
    var kelvin = Math.round(((5/9)*(input-32)+273.15)*100)/100;
    var celcius = Math.round((5/9)*(input-32)*100)/100;
    var farenheit = input
    $('#kelvin').text(kelvin);
    $('#celcius').text(celcius);
    $('#farenheit').text(farenheit);
  }
  
  
  // for length - meter
  function convertMeter(input) {
    var meter = input;
    var inch = Math.round(input*39.3701*100)/100;
    var foot = Math.round(input*3.2808*100)/100;
    $('#meter').text(meter);
    $('#inch').text(inch);
    $('#foot').text(foot);
    console.log(meter);
  }
  
  
  
  //for length - inch
  function convertInch(input) {
    var meter = Math.round(input*0.0254*100)/100;
    var inch = input;
    var foot = Math.round(input*0.0833*100)/100;
    $('#meter').text(meter);
    $('#inch').text(inch);
    $('#foot').text(foot);
    console.log(meter);
  }
  
  
  //for length - foot
  function convertFoot(input) {
    var meter = Math.round(input*0.3048*100)/100;
    var inch = Math.round(input*12*100)/100;
    var foot = input;
    $('#meter').text(meter);
    $('#inch').text(inch);
    $('#foot').text(foot);
    console.log(meter);
  }
  
  
  
  //for area - meter square
  function convertMsquare(input) {
    var metersquare = input;
    var inchsquare = Math.round(input*1550*100)/100;
    var footsquare = Math.round(input*10.7639*100)/100;
    $('#meters').text(metersquare);
    $('#inchs').text(inchsquare);
    $('#foots').text(footsquare);
  }
  
  
  //for area - inch square
  function convertMinch(input) {
    var metersquare = Math.round(input*0.00064516*100)/100;
    var inchsquare = input;
    var footsquare = Math.round(input*0.00694444*100)/100;
    $('#meters').text(metersquare);
    $('#inchs').text(inchsquare);
    $('#foots').text(footsquare);
  }
  
  
  //for area - foot square
  function convertMfoot(input) {
    var metersquare = Math.round(input*0.092903*100)/100;
    var inchsquare = Math.round(input*144*100)/100;
    var footsquare = input;
    $('#meters').text(metersquare);
    $('#inchs').text(inchsquare);
    $('#foots').text(footsquare);
  }
  
  
  //for volume - meter cube
  function ConvertVmeter(input) {
    var metercube = input;
    var inchcube = Math.round(input*61023.7*100)/100;
    var footcube = Math.round(input*35.3147*100)/100;
    $('#meterc').text(metercube);
    $('#inchc').text(inchcube);
    $('#footc').text(footcube);
  }
  
  
  //for volume - inch cube
  function ConvertVinch(input) {
    var metercube = Math.round(input*0.0000163871*100)/100;
    var inchcube = input;
    var footcube = Math.round(input*0.000578704*100)/100;
    $('#meterc').text(metercube);
    $('#inchc').text(inchcube);
    $('#footc').text(footcube);
  }
  
  
  //for volume - foot cube
  function ConvertVfoot(input) {
    var metercube = Math.round(input*0.0283168*100)/100;
    var inchcube = Math.round(input*1728*100)/100;
    var footcube = input;
    $('#meterc').text(metercube);
    $('#inchc').text(inchcube);
    $('#footc').text(footcube);
  }
  
  
  // for temperature
  $('#convert_temp').click(function(e){
    var tempUnit = $('#Temp').find(":selected").text();   // use this to get value of selected dropdown
    var tempInput = parseInt($('#inputTemp').val());
    $('#inputTemp').val(' ');
    
    if (tempUnit === 'Kelvin') {
      convertKelvin(tempInput);
    }
    
    if (tempUnit === 'Celcius') {
      convertCelcius(tempInput);
    }
    
    if (tempUnit === 'Farenheit') {
      convertFarenheit(tempInput);
    }
    //this piece of code prevents the webpage to scroll up when clicked.
     e.preventDefault();
  });
  
  
  // convert length
  $('#convert_length').click(function(e){ 
    
    var lengthUnit = $('#Length').find(":selected").text();
    var lengthInput = parseInt($('#inputLength').val());
   
    $('#inputLength').val(' ');
    
    if (lengthUnit === 'Meter') {
      convertMeter(lengthInput);
    }
    if (lengthUnit === 'Inch') {
      convertInch(lengthInput);
    }
    if (lengthUnit === 'Foot') {
      convertFoot(lengthInput);
    }
    //this piece of code prevents the webpage to scroll up when clicked.
    e.preventDefault();
  });
  
  
  // convert area
  $('#convert_area').click(function(e){ 
  
    var areaUnit = $('#Area').find(":selected").text();
    var areaInput = parseInt($('#inputArea').val());

    $('#inputArea').val(' ');
    
    if (areaUnit === 'Meter square') {
      convertMsquare(areaInput);
    }
    
    if (areaUnit === 'Inch square') {
      convertMinch(areaInput);
    }
    
    if (areaUnit === 'Foot square') {
      convertMfoot(areaInput);
    }
    //this piece of code prevents the webpage to scroll up when clicked.
    e.preventDefault();
  });
  
  
  // convert volume
  $('#convert_volume').click(function(e){ 
  
    var volumeUnit = $('#Volume').find(":selected").text();
    var volumeInput = parseInt($('#inputVolume').val());
    $('#inputVolume').val(' ');
    
    if (volumeUnit === 'Meter cube') {
      ConvertVmeter(volumeInput);
    }
    
    if (volumeUnit === 'Inch cube') {
      ConvertVinch(volumeInput);
    }
    
    if (volumeUnit === 'Foot cube') {
      ConvertVfoot(volumeInput);
    }
    //this piece of code prevents the webpage to scroll up when clicked.
    e.preventDefault();
  });
  
  
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
                                 
    //default behaviour is  scrolling
                                 
   //when done scrolling, hash is added to url - has a value and therefore overrides default behaviour.
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      //scrolltop returns the vertical scrollbar position
      // sets the offset coordinates of the target to the top.
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  
});
