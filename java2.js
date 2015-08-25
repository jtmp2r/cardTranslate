var Holiday = (function () {
	var langGer = {
     "merry":"Frohe", 
    "christmas":"Weihnachten",
     "and":"und", 
      "happy":"ein glückliches",
     "new":"neues","year":"Jahr"     
	};

	return {
		getLangGer: function(words) {
			// console.log(langGer[words]);
			var newWords = words.split(" ")
			var finalWords = [];
			for (var i = 0; i < newWords.length; i++) {
				finalWords.push(langGer[newWords[i]])
	 			
			}

			return finalWords.join(" ");





		}	
	}


}());