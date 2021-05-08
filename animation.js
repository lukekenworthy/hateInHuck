$( document ).ready(function() {
    console.log("Loaded!");
    $('.hideHate').click(function() {
        $('.hate').hide(); 
    });
    $('.showHate').click(function() {
        $('.hate').show()
                  .css("background-color", ""); 
    });
    $('.highlight').click(function() {
        $('.hate').css("background-color", "#FF0000"); 
    });
    //.css('color', 'blue'); });
});