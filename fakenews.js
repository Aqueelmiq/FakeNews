(function(document) {
	
'use strict';
var feeds = new Set();

function createBar(bar, loc) {
	var bar = document.createElement('div'),
		button = Ladda.create(bar);
	//btn.addEventListener("mouseover", hoverTooltip.bind(text), false);
	bar.innerHTML = "server down";
	bar.style = "font-weight:bold; padding: 3px; position:absolute; top: 4px; right: 30px;background: #3b5998; font-size: 15px; color: #FFFFFF;";
	loc.appendChild(bar);
}

setInterval(function() {
	
	$("._5va3").each(function(){
		if(!feeds.has(this)) {
			console.log("Its lit");
			var progress = document.createElement("progress");
			progress.value = 22;
			progress.max = 100;
			this.append(progress);
			feeds.add(this);
		}
	});

	for(var i=0; i<test.length; i++) {

		var data = test[i];

		// Check if feed needs to be modified

		if(!feeds.has(data)) {
			feeds.add(data);

			// Send server requests

			var statement = "";

			var processed = false;

			var linked = test[i].querySelector('._6ks');
			if(!processed && linked != null && linked.querySelector('a') != null) {
				processed = true;
				httpGet(linked.querySelector('a').href, "url", data);
			}

	
			var link = test[i].querySelector('._5pbx.userContent');
			if(!processed && link != null && link.querySelector('a') != null && link.querySelector('a').href != null) {
				processed = true;
				httpGet(link.href, "url", data);
			}
            

			var picComment = test[i].querySelector('.uiScaledImageContainer._4-ep');
			if(!processed && picComment != null && picComment.querySelector('img') != undefined && picComment.querySelector('img').src != null) {
				processed = true;
				httpGet(picComment.querySelector('img').src, "image", data);
			}

			var picPost = test[i].querySelector('._46-h._517g');
			if(!processed && picPost != null && picPost.querySelector('img') != undefined && picPost.querySelector('img').src != null) {
				processed = true;
				httpGet(picPost.querySelector('img').src, "image", data);
			}
			
			var picTagged = test[i].querySelector('._4-eo._2t9n');
			if(!processed && picTagged != null && picTagged.querySelector('._46-h._4-ep') != null && picTagged.querySelector('._46-h._4-ep').querySelector('img') != null) {
				processed = true;
				httpGet(picTagged.querySelector('._46-h._4-ep').querySelector('img').src, "image", data);
			}

			/*
			var picAlbum = test[i].querySelector('._2a2q');
			if(!processed && picAlbum != null && picAlbum.querySelectorAll('._5dec._xcx')!=undefined) {
				processed = true;
				var pics = picAlbum.querySelectorAll('a._5dec._xcx');
				for(var i=0; i<pics.length; i++) {}
			}
			*/

			var text = test[i].querySelector('._5pbx.userContent');
			if(!processed && text != null && text.textContent != null) {
				processed = true;
				httpGet(text.textContent, "text", data);
			}
	
		}
	}

}, 1000);
	
})(document);