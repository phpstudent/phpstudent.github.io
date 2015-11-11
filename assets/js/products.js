$(document).ready(function(){

		$(window).scroll(function(){
				var bodyscroll = $("body").scrollTop();
			if(bodyscroll > 300){
				console.log("fdsafds");
				$("#maincontent").addClass("fixed");
			}else{
				$("#maincontent").removeClass("fixed");
			}
		});

});