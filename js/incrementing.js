


$(function() {
  
    $(".button").on("click", function() {
  
      var $button = $(this);
      var oldValue = $button.parents().find("input").val();
  
      if (($button.text() == "+") || ($button.text() == "$3.25 each")){
        var newVal = parseFloat(oldValue) + 1;
      }
          else{
            if ($button.text() == "Half Dozen ($18.50)"){
              newVal = parseFloat(oldValue) + 6;
            }
          else{
            if($button.text() == "Dozen ($35)"){
              newVal = parseFloat(oldValue) + 12;
            }
          // Don't allow decrementing below zero
         else{
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
          } else {
          newVal = 0;
        }
        }
      }
      $button.parent().find("input").val(newVal);
    }
    })});


    $(function() {

  
      $(".button").on("click", function() {
    
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
    
        if (($button.text() == "+") || ($button.text() == "$3.25 each")){
            var newVal = parseFloat(oldValue) + 1;
          } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue);
            } else {
            newVal = 0;
          }
          }
    
        $button.parent().find("input").val(newVal);
    
      });
    
    });