$(document).ready(function(){

		//highlight and scroll to active sidenav link
		var clicked = $("div#sideNav nav ul li a, ul.mainLinks li ul.sublinks li a");
		clicked.click(function(event){

			clicked.removeClass("active"); //remove active class from all
			$(this).addClass("active"); //add active class to select
			event.preventDefault();
    		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});

		//fixed side nav bar after 300 pixels scrolling
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