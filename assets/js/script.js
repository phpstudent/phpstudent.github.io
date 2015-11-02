$(document).ready(function(){
	//FitText responsively in a.cta
	$(window).resize(function(){
		if ($(window).width() <= 500) {
				$("a.cta").fitText(1.5, { minFontSize: '15px', maxFontSize: '50px' });			
				$("a#profileCta").fitText(1.5, { minFontSize: '12px', maxFontSize: '50px' });
			}
			else{ 

					$("a.cta").fitText(1.5, { minFontSize: '20px', maxFontSize: '50px' });			
					$("a#profileCta").fitText(1.5, { minFontSize: '20px', maxFontSize: '50px' });
			}
	});
		
	//camera.js carousel properties
		$(".carousel").camera({pagination: false, thumbnail: false});
});