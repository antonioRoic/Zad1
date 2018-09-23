jQuery(document).ready(function($) {

	var slider_images = ['images/slide.png', 'images/slide.png', 'images/slide.png'];

	var slider = $(".slider");
	slider = new Slider(slider);
	$(".slider span").on("click", function() {
		slider.changeBackground($(this));
	});

	function Slider(slider){

		this.changeBackground = function(span){

			var active = slider.find("span.active");

			if (!span.hasClass('active')) {
				slider.fadeOut(300, function(){
					slider.css("background-image", "url(" + slider_images[span.index()] + ")")
				}).fadeIn(300);
				active.removeClass('active');
				span.addClass('active');
			}
		};
	};

});