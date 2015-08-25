$(document).ready(function() {


$("#langTranslator").click(function() {
	var input1 = $("#textbox1").val()
	$("#result1").append(Holiday.getLangGer(input1));
	
	})

});