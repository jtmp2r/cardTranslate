$(document).ready(function() {


$("#langTranslator").click(function() {
	var input1 = $("#textbox1").val();
	  if($("input:radio[name=Lang_Options]:checked").val() === "German") {
	    $("#result1").append(Holiday.getLangGer(input1));
      } else {
        $("#result2").append(Holiday.getLangDutch(input1))
        }
	
	})

});