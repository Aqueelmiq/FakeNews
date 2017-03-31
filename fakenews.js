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
			$(this).find("._5va3").append(progress);

			//Textual Links
			$(this).find("p a").each(function() {
				console.log($(this)[0].innerHTML);
			});
			
			//Content Links
			$(this).find("._52c6").each(function() {
				console.log($(this)[0]);
			});
			
			feeds.add(this);
		}
	});

	}, 1000);
	
})(document);