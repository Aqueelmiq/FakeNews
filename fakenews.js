(function(document) {
	
'use strict';
var feeds = new Set();
var uris = new Set(); 

setInterval(function() {

	const postheader = "._5va3" // root
	const postlinkparent = "._6ks"; // -> a
	const usertextparentdiv = "._5pbx"; // -> p
	const mainpost = "._1dwg _1w_m _2ph_";
	const backend = "https://newscheckbackend.herokuapp.com/check";
	
	$("._1dwg").each(function(){
		if(!feeds.has(this)) {
			var progress = document.createElement("progress"); 
			progress.value = 4;
			progress.max = 100;

			var text = document.createElement("p");
			text.textContent = "Recommendation: Uncertain";
			text.style.cssFloat = "right";

			var data = document.createElement("div");
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

			var style = document.createElement("style");
			var baseStyle = document.createElement("style")
			data.append(baseStyle); 

			baseStyle.innerHTML = "progress {appearance: none; -moz-appearance: none; -webkit-appearance: none; height: 10px;}"

			//Textual Links
			$(this).find("p a").each(function() {
				//console.log($(this)[0].href);
			});
			var xyz = ""
			//Content Links
			$(this).find("._52c6").each(function() {
				
				var uri = $(this)[0].href;
				uri = uri
						.replace("https://l.facebook.com/l.php?u=", "")
						.replace("http://l.facebook.com/l.php?u=", "")
						.replace(/%3A/gi, ":")
						.replace(/%F/gi, "/")
						.replace(/%2F/gi, "/");

				uri = uri.substr(0, uri.indexOf("&h="));
				xyz = uri;
				$.ajax({
                	type: "POST",
                	data :JSON.stringify({ url: uri, done: false }),
                	url: backend,
                	contentType: "application/json",
                	success: function(data) {               	
						progress.value = Math.round(data["data"]["score"]);
						if(progress.value < 35) {

							style.innerHTML = "progress::-webkit-progress-value {background: red;}";

						}
						else if (progress.value < 60) {

							style.innerHTML = "progress::-webkit-progress-value {background: orange;}";

						}
						else {

							style.innerHTML = "progress::-webkit-progress-value {background: green;}";

						}
						text.textContent = data["data"]["suggestion"];
                	}
            	});
				data.append(style);
				data.append(progress); 
				data.append(text);
			});
			
			if(!uris.has(xyz))
				$(this).find("._5va3").append(data);
			uris.add(xyz);
			feeds.add(this);
		}
	});

	}, 2000);
	
})(document);
