console.log(
	'"Only two things are infinite,\n' 
	+'the universe and human stupidity,\n'
	+'and I\'m not sure about the former."\n\n'
	+'Albert Einstein\n'
	+'US (German-born) physicist (1879 - 1955)'
);

$(document).ready(function(e){
	// lets clean tumbler's payload
	['body'].map(function(root){
		['iframe','script','noscript'].map(function(tag){$(root).children(tag).remove()});
		$(root).html($(root).html().replace(/<!--[^>]*>/g,''))
	});
});
	
