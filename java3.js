var Holiday = (function(holiday) {
 var langDutch = { 
  "happy": "blij",
  "merry": "vrolijk",
  "joy": "vreugde",
  "and": "en",
  "christmas": "kerst",
  "new": "nieuw",
  "have": "hebben",
  "a": "een"
 };


    holiday.getLangDutch = function(transLe) {
      var switch1 = transLe.split(" ");
      var finalWords2 = [];
      for (var t = 0; t < switch1.length; t++) {
        finalWords2.push(langDutch[switch1[t]])

      }

    return finalWords2.join(" ")
    } 
    return holiday;

  
}(Holiday))