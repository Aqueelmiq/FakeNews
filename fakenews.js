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
	const userfeedback = "https://newscheckbackend.herokuapp.com/user/feedback";
	
	$("._1dwg").each(function(){
		if(!feeds.has(this)) {
			var progress = document.createElement("progress"); 
			progress.value = 4;
			progress.max = 100;
			progress.style.order = 1;

			var text = document.createElement("p");
			text.textContent = "Recommendation: Uncertain";
			text.style.order = 2;

			var data = document.createElement("div");
			data.style.display = "flex";
			data.style.alignItems = "center";
			data.style.justifyContent = "space-between";
			
			var feedbackdiv = document.createElement("div");
			feedbackdiv.style.order = 3;
		
			var button = document.createElement("button");
			var b_text = document.createTextNode("Agree");
			button.appendChild(b_text);
			button.className="agreebtn";
			feedbackdiv.append(button);
			data.append(feedbackdiv)
	

			var style = document.createElement("style");
			style.innerHTML = ".redprgrs::-webkit-progress-value {background: red;}";
			style.innerHTML += ".orgprgrs::-webkit-progress-value {background: orange;}";
			style.innerHTML += ".grnprgrs::-webkit-progress-value {background: green;}";


			var baseStyle = document.createElement("style")
			data.append(baseStyle); 

			var cssStuff = "progress {appearance: none; -moz-appearance: none; -webkit-appearance: none; height: 10px;}\n";
			cssStuff += ".agreebtn { -webkit-border-radius: 20;-moz-border-radius: 20;border-width: 0px;border-radius: 20px;font-family: Arial;color: #ffffff;font-size: 9px;background: #3498db;padding: 5px 10px 5px 10px;text-decoration: none;}"
			cssStuff += ".agreebtn:hover {background: #3cb0fd;text-decoration: none;}"
			baseStyle.innerHTML = cssStuff;
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

				button.addEventListener ("click", function() {
					button.style.display = 'none';
					//button.style.visibility = "hidden";
					var thanks = document.createElement("p")
					thanks.textContent = "Thanks!"
					feedbackdiv.append(thanks);
					$.ajax({
                		type: "POST",
                		data :JSON.stringify({ url: uri, feedback: Math.floor(progress.value)/10 }),
                		url: userfeedback,
                		contentType: "application/json"
            		});
				});

				$.ajax({
                	type: "POST",
                	data :JSON.stringify({ url: uri, done: false }),
                	url: backend,
                	contentType: "application/json",
                	success: function(data) {               	
						progress.value = Math.round(data["data"]["score"]);
						if(progress.value < 35) {
							progress.className = "redprgrs";
						}
						else if (progress.value < 65) {
							progress.className = "orgprgrs";		
						}
						else {
							progress.className = "grnprgrs";	
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
