$(function(){
    function canvas(x,y,size,color1,color1a,color2,color2a,color3,color3a,color4,color4a,color5,color5a) {
		let el=this,
			elWidth=$(this).attr('width');
			elWidth=parseInt(elWidth)-parseInt(10);
			context=el[0].getContext('2d');
			context.width=elWidth;
			context.font=size+" Gilroy";

		var gradient=context.createLinearGradient(0,0,context.width,0);
		gradient.addColorStop(color1,color1a);
		gradient.addColorStop(color2,color2a);
		if (color3a) gradient.addColorStop(color3,color3a);
		if (color4a) gradient.addColorStop(color4,color4a);
		if (color5a) gradient.addColorStop(color5,color5a);
		context.strokeStyle=gradient;
		context.fillText($(this).data('context'),x,y);
		context.strokeText($(this).data('context'),x,y);
	};

	    function canvas_text(x,y,size,color1,color1a,color2,color2a,color3,color3a,color4,color4a,color5,color5a) {
		let el=this,
			elWidth=$(this).attr('width');
			elWidth=parseInt(elWidth)-parseInt(10);
			context=el[0].getContext('2d');
			context.width=elWidth;
			context.font=size+" Gilroy";

		var gradient=context.createLinearGradient(0,0,context.width,0);
		gradient.addColorStop(color1,color1a);
		gradient.addColorStop(color2,color2a);
		if (color3a) gradient.addColorStop(color3,color3a);
		if (color4a) gradient.addColorStop(color4,color4a);
		if (color5a) gradient.addColorStop(color5,color5a);
		context.strokeStyle=gradient;
		context.strokeText($(this).data('context'),x,y);
	};
	 function old_city_canvas(x,y,size,color1,color1a,color2,color2a,color3,color3a,color4,color4a,color5,color5a) {
		let el=this,
			elWidth=$(this).attr('width');
			elWidth=parseInt(elWidth)-parseInt(10);
			context=el[0].getContext('2d');
			context.width=elWidth;
			context.font=size+" Gilroy";
		var gradient=context.createLinearGradient(10,100,context.width,100);
		gradient.addColorStop(color1,color1a);
		gradient.addColorStop(color2,color2a);
		if (color3a) gradient.addColorStop(color3,color3a);
		if (color4a) gradient.addColorStop(color4,color4a);
		if (color5a) gradient.addColorStop(color5,color5a);
		context.strokeStyle=gradient;
		context.fillText($(this).data('context'),x,y);
		context.strokeText($(this).data('context'),x,y);
	};
	canvas.call($('.activity'),40,30,'36px','1','#FF5F04','1','#FF1F00');
	canvas.call($('.first'),40,30,'18px','1','#FF7500','1','#FC6300','#FF2E00');
	canvas.call($('.last'),40,30,'18px','1','#FF7500','1','#FC6300','#FF2E00');

	$('.old_city_h2_back').each(function () {
		canvas_text.call($(this),10,130,'144px','.1','#FF7500','.3','#FF7500');
	});

	$('.event_item').each(function () {
		canvas.call($(this),65,30,'18px','1','#FF7C0D','1','#FF1F00','#FF1F00');
	});
	$('.about_us canvas').each(function () {
		canvas.call($(this),0,30,'18px','1','#FF7C0D','1','#FF1F00');
	});
	$('.old_city_h1').each(function () {
		old_city_canvas.call($(this),0,100,'96px','1','#FF44B1','1','#F150D2','1','#FF7500','1','#F51E10','1','#FF0035');
	});
	$('.old_city_h2').each(function () {
		old_city_canvas.call($(this),0,30,'36px','1','#FFFFFF','1','#FF00FF');
	});


	function swiperSlide() {
	$(this).on('mouseenter',function () {
		$(this).animate({
			"margin-left":"-12px"
		},200)
	})
	$(this).on('mouseleave',function () {
		$(this).animate({
			"margin-left":"12px"
		},200)
	})
}
$(".swiper-slide").each(swiperSlide);

})


