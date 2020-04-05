$(document).ready(function(){
    function myFunction() {
          var btn = document.createElement("BUTTON");
          var addarea = document.getElementById("AddButtonArea");
          var x = document.getElementById("GetText").value;
          var attid = document.createAttribute("id");
          attid.value = "RemoveButton";
          btn.setAttributeNode(attid);
          btn.innerHTML = x;
          addarea.appendChild(btn);
    }
    $("#Add").on("click", function(){
        myFunction();
    });
    $( ".Selected" ).each(function() {
        $(this).on("click", function(){
            $(this).css("background-color","gold");
        });
    });
    $( ".Selected" ).each(function() {
        $(this).on("dblclick", function(){
            $(this).css("background-color","whitesmoke");
        });
    });
    $("#Reset").on("click", function(){
        $( ".Selected" ).each(function() {
            $(this).css("background-color","whitesmoke");
        });
        $( "#RemoveButton" ).each(function() {
            $(this).remove();
        });
    });
});