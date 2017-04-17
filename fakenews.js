(function(document) {
	
'use strict';
var feeds = new Set();

setInterval(function() {

	const postheader = "._5va3" // root
	const postlinkparent = "._6ks"; // -> a
	const usertextparentdiv = "._5pbx"; // -> p
	const mainpost = "._1dwg _1w_m _2ph_";
	
	$("._1dwg").each(function(){
		if(!feeds.has(this)) {
			var progress = document.createElement("progress"); 
			progress.value = 22;
			progress.max = 100;

			var text = document.createElement("p");
			text.textContent = "Recommendation: Uncertain";
			text.style.cssFloat = "right";

			var data = document.createElement("div");
			data.append(progress); 
			data.append(text);
			data.style.display = "flex";
			data.style.alignItems = "center";
			data.style.justifyContent = "space-between";
			
			var button = document.createElement("button");
			var b_text = document.createTextNode("Agree");
			button.appendChild(b_text);
			data.append(button);

			button.addEventListener ("click", function() {
				button.style.visibility = "hidden";
				var thanks = document.createElement("p")
				thanks.textContent = "Thanks!"
				data.append(thanks)
			});	
				

			$(this).find("._5va3").append(data);

			//Textual Links
			$(this).find("p a").each(function() {
				//console.log($(this)[0].href);
			});

			//Content Links
			$(this).find("._52c6").each(function() {
				console.log($(this)[0].href);
                                text.textContent = "Recommendation: Uncertain";

			});
			
			feeds.add(this);
		}
	});

	}, 1000);
	
})(document);
