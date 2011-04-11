console.log(
	'"Only two things are infinite,\n' 
	+'the universe and human stupidity,\n'
	+'and I\'m not sure about the former."\n\n'
	+'Albert Einstein\n'
	+'US (German-born) physicist (1879 - 1955)'
);

// lets clean this mess
$(document).ready(function(){
	['iframe','script','noscript'].map(function(tag){$('body').children(tag).remove()});
});

