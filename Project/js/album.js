/***************************************************************************************
	* Run when page load
	***************************************************************************************/
	$(document).ready(function()
	{
		initSlideShow();
		
	});
	/***************************************************************************************
	****************************************************************************************/
	function initSlideShow()
	{
		if($(".slideshow div").length > 1) //Only run slideshow if have the slideshow element and have more than one image.
		{
			var transationTime = 5000;//5000 mili seconds i.e 5 second
			$(".slideshow div:first").addClass('active'); //Make the first image become active i.e on the top of other images
			setInterval(slideChangeImage1, transationTime); //set timer to run the slide show.
		}


		if($(".slideshow1 div").length > 1) //Only run slideshow if have the slideshow element and have more than one image.
		{
			var transationTime = 5000;//5000 mili seconds i.e 5 second
			$(".slideshow1 div:first").addClass('active'); //Make the first image become active i.e on the top of other images
			setInterval(slideChangeImage2, transationTime); //set timer to run the slide show.
		}

		if($(".slideshow2 div").length > 1) //Only run slideshow if have the slideshow element and have more than one image.
		{
			var transationTime = 5000;//5000 mili seconds i.e 5 second
			$(".slideshow2 div:first").addClass('active'); //Make the first image become active i.e on the top of other images
			setInterval(slideChangeImage3, transationTime); //set timer to run the slide show.
		}

		if($(".slideshow3 div").length > 1) //Only run slideshow if have the slideshow element and have more than one image.
		{
			var transationTime = 5000;//5000 mili seconds i.e 5 second
			$(".slideshow3 div:first").addClass('active'); //Make the first image become active i.e on the top of other images
			setInterval(slideChangeImage4, transationTime); //set timer to run the slide show.
		}

		if($(".slideshow4 div").length > 1) //Only run slideshow if have the slideshow element and have more than one image.
		{
			var transationTime = 5000;//5000 mili seconds i.e 5 second
			$(".slideshow4 div:first").addClass('active'); //Make the first image become active i.e on the top of other images
			setInterval(slideChangeImage5, transationTime); //set timer to run the slide show.
		}
	}
	/***************************************************************************************
	****************************************************************************************/
	
	function slideChangeImage1()
	{
		var active = $(".slideshow div.active"); //Get the current active element.
		if(active.length == 0)
		{
			active = $(".slideshow div:last"); //If do not see the active element is the last image.
		}
		
		var next = active.next().length ? active.next() : $(".slideshow div:first"); //get the next element to do the transition
		active.addClass('lastactive');
		next.css({opacity:0.0}) //do the fade in fade out transition
				.addClass('active')
				.animate({opacity:1.0}, 1500, function()
				{
					active.removeClass("active lastactive");	
				});



		 
	}


	function slideChangeImage2()
	{
		var active = $(".slideshow1 div.active"); //Get the current active element.
		if(active.length == 0)
		{
			active = $(".slideshow1 div:last"); //If do not see the active element is the last image.
		}
		
		var next = active.next().length ? active.next() : $(".slideshow1 div:first"); //get the next element to do the transition
		active.addClass('lastactive');
		next.css({opacity:0.0}) //do the fade in fade out transition
				.addClass('active')
				.animate({opacity:1.0}, 1500, function()
				{
					active.removeClass("active lastactive");	
				});


		
		 
	}


	function slideChangeImage3()
	{
		var active = $(".slideshow2 div.active"); //Get the current active element.
		if(active.length == 0)
		{
			active = $(".slideshow2 div:last"); //If do not see the active element is the last image.
		}
		
		var next = active.next().length ? active.next() : $(".slideshow2 div:first"); //get the next element to do the transition
		active.addClass('lastactive');
		next.css({opacity:0.0}) //do the fade in fade out transition
				.addClass('active')
				.animate({opacity:1.0}, 1500, function()
				{
					active.removeClass("active lastactive");	
				});


		
		 
	}


	function slideChangeImage4()
	{
		var active = $(".slideshow3 div.active"); //Get the current active element.
		if(active.length == 0)
		{
			active = $(".slideshow3 div:last"); //If do not see the active element is the last image.
		}
		
		var next = active.next().length ? active.next() : $(".slideshow3 div:first"); //get the next element to do the transition
		active.addClass('lastactive');
		next.css({opacity:0.0}) //do the fade in fade out transition
				.addClass('active')
				.animate({opacity:1.0}, 1500, function()
				{
					active.removeClass("active lastactive");	
				});


		
		 
	}


	function slideChangeImage5()
	{
		var active = $(".slideshow4 div.active"); //Get the current active element.
		if(active.length == 0)
		{
			active = $(".slideshow4 div:last"); //If do not see the active element is the last image.
		}
		
		var next = active.next().length ? active.next() : $(".slideshow4 div:first"); //get the next element to do the transition
		active.addClass('lastactive');
		next.css({opacity:0.0}) //do the fade in fade out transition
				.addClass('active')
				.animate({opacity:1.0}, 1500, function()
				{
					active.removeClass("active lastactive");	
				});


		
		 
	}


	


	
