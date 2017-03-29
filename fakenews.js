$('*').each(function(){
		console.log('Hi');
    if ($(this).is('img')) {
			$(this).css({
        	"-webkit-transform": "rotate(90deg)",
        	"-moz-transform": "rotate(90deg)",
        	"transform": "rotate(90deg)"
    	});
    }
});
