$(document).ready(function() {
    /*плагин fullpage для постраничной прокрутки*/
   /*$('#fullpage').fullpage({
   	autoScrolling:true,
   	scrollBar:true,
   	scrollingSpeed:200,
   	easingcss3: "ease-in-out",
   });*/

   	/*Swiper для карусели баннеров*/
	/*var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'vertical',
	loop: false,
	height:1,
	slidesPerView: 3,
	spaceBetween:20,

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
		},
	});*/

	/*переключение классов для анимации меню в мобильной версии*/
	$(".navbar-toggler").click(function(){
		$(this).toggleClass("active");
		if(!$(this).hasClass("active") && !$(".collapse").hasClass("show")){
			$(".collapse").toggleClass("show");
		}
	});

	/*скрытие меню в мобильной версии после выбора пункта*/
	$(".collapse").click(function(){
			$(".navbar-toggler").addClass("collapsed");
			if($(".navbar-toggler").hasClass("active")){
				$(".collapse").toggleClass("show");
			}
			$(".navbar-toggler").removeClass("active");
	});

	$(".slide-one img").click(function(){
		if($(window).width()>992){
			$(".popup-one").fadeIn(1000);
			$(".popup-one").css("display","flex");
		}
	});
	$(".popup-one").click(function(){
		$(".popup-one").fadeOut(200);
	})

	$(".slide-two img").click(function(){
		if($(window).width()>992){
			$(".popup-two").fadeIn(1000);
			$(".popup-two").css("display","flex");
		}
	});
	$(".popup-two").click(function(){
		$(".popup-two").fadeOut(200);
	})

	$(".slide-three img").click(function(){
		if($(window).width()>992){
			$(".popup-three").fadeIn(1000);
			$(".popup-three").css("display","flex");
		}
	});
	$(".popup-three").click(function(){
		$(".popup-three").fadeOut(200);
	})

	let menuCardVisible = {
		count: 10,
		counter: 10,
		activeMenuSecondarySection: "coldDishes",
		handlerIsMenu: true
	};

	let reserveInfo = {
		date: "",
		time: "",
		quanlity: "",
		name: "",
		tel: "",
		cart: "",
		total: ""
	}

	/*управление разделами меню*/
	$(".list-group-item").click(function(e){
		let menuPartClicked;
		menuCardVisible.count = 10;
		$(".menu-button-left").css({"visibility" : "hidden"});

		if(e.target.className.indexOf("main-menu")!=-1){
			menuPartClicked = "main-menu";
		}
		else if (e.target.className.indexOf("bar-menu")!=-1){
			menuPartClicked = "bar-menu";
		}
		else if (e.target.className.indexOf("hookah-menu")!=-1){
			menuPartClicked = "hookah-menu";
		}
		else if (e.target.className.indexOf("banquet-menu")!=-1){
			menuPartClicked = "banquet-menu";
		}
		else if (e.target.className.indexOf("special-menu")!=-1){
			menuPartClicked = "special-menu";
		}


		switch(menuPartClicked){
			case "main-menu":
				if ($(".main-submenu").is(":visible")){
					$(".main-submenu").fadeOut(100);
					$(".main-menu").removeClass("act");
				}else {
					$(".main-submenu").fadeIn(500);
					$(".bar-submenu").fadeOut(100);
					$(".bar-menu").removeClass("act");
					$(".hookah-submenu").fadeOut(100);
					$(".hookah-menu").removeClass("act");
					$(".banquet-submenu").fadeOut(100);
					$(".banquet-menu").removeClass("act");
					$(".special-submenu").fadeOut(100);
					$(".special-menu").removeClass("act");
					$(".main-menu").addClass("act");	
				}
				break;
			case "bar-menu":
				if ($(".bar-submenu").is(":visible")){
					$(".bar-submenu").fadeOut(100);
					$(".bar-menu").removeClass("act");
				}else {
					$(".bar-submenu").fadeIn(500);
					$(".main-submenu").fadeOut(100);
					$(".main-menu").removeClass("act");
					$(".hookah-submenu").fadeOut(100);
					$(".hookah-menu").removeClass("act");
					$(".banquet-submenu").fadeOut(100);
					$(".banquet-menu").removeClass("act");
					$(".special-submenu").fadeOut(100);
					$(".special-menu").removeClass("act");
					$(".bar-menu").addClass("act");
				}
				break;
			case "hookah-menu":
				if ($(".hookah-submenu").is(":visible")){
					$(".hookah-submenu").fadeOut(100);
					$(".hookah-menu").removeClass("act");
				}else {
					$(".hookah-submenu").fadeIn(500);
					$(".main-submenu").fadeOut(100);
					$(".main-menu").removeClass("act");
					$(".bar-submenu").fadeOut(100);
					$(".bar-menu").removeClass("act");
					$(".banquet-submenu").fadeOut(100);
					$(".banquet-menu").removeClass("act");
					$(".special-submenu").fadeOut(100);
					$(".special-menu").removeClass("act");
					$(".hookah-menu").addClass("act");
				}
				break;
			case "banquet-menu":
				if ($(".banquet-submenu").is(":visible")){
					$(".banquet-submenu").fadeOut(100);
					$(".banquet-menu").removeClass("act");
				}else {
					$(".banquet-submenu").fadeIn(500);
					$(".main-submenu").fadeOut(100);
					$(".main-menu").removeClass("act");
					$(".hookah-submenu").fadeOut(100);
					$(".hookah-menu").removeClass("act");
					$(".bar-submenu").fadeOut(100);
					$(".bar-menu").removeClass("act");
					$(".special-submenu").fadeOut(100);
					$(".special-menu").removeClass("act");
					$(".banquet-menu").addClass("act");
				}
				break;
			case "special-menu":
				if ($(".special-submenu").is(":visible")){
					$(".special-submenu").fadeOut(100);
					$(".special-menu").removeClass("act");
				}else {
					$(".special-submenu").fadeIn(500);
					$(".main-submenu").fadeOut(100);
					$(".main-menu").removeClass("act");
					$(".hookah-submenu").fadeOut(100);
					$(".hookah-menu").removeClass("act");
					$(".bar-submenu").fadeOut(100);
					$(".bar-menu").removeClass("act");
					$(".banquet-submenu").fadeOut(100);
					$(".banquet-menu").removeClass("act");
					$(".special-menu").addClass("act");
				}
				break;
			}
	});

	$(".secondary").click(function(){
		menuCardVisible.count = 10;
		/*console.log($(this).first().data().target);*/
		$(".secondaryMenuSectionIsActive").removeClass("secondaryMenuSectionIsActive");
		$(this).addClass("secondaryMenuSectionIsActive");
		renderMenuCards($(this).first().data().target);
		getMenuCards($(this).first().data().target);
	});

	let cart = [];
	function editCart(item){
		if(cart.length<1){
			cart.push(item);
		}else{
			let i = cart.findIndex((elem,index)=>elem.id==item.id);
			i!=-1 ? cart.splice(i,1,item) : cart.push(item);	
		}
		for(item of cart){
			let i = cart.findIndex((elem,index)=>elem.count==0);
			if(i!=-1) {
				cart.splice(i,1);
				renderCart();
			}
		}
		if(cart.length==0){
			menuCardVisible.count = 10;
			renderMenuCards("coldDishes");
		}
		showCartButton();
		setTotalPrice();
		console.log(cart)
	};

	function showCartButton(){
		let count = 0;
		for(let i=0; i<cart.length; i++){
			 count = count + cart[i].count; 
			}
		if(count == 0){
			$(".cart-button").hide();
		}else{
			$(".cart-button").show();
		}
	}

	//загрузка первого раздела меню
	renderMenuCards("coldDishes");
	$(".main-submenu").first().addClass("secondaryMenuSectionIsActive");

	$("body").on("click",".card-button-left",(function (e) {
		if(!($(this).parent().find(".card-counter").html()<1)){
			$(this).parent().find(".card-counter").html(+$(this).parent().find(".card-counter").html()-1);
			let newItem = {
						"id": $(this).parent().parent().parent().data().id, 
						"count":$(this).parent().find(".card-counter").html()
			};
			editCart(newItem);	
		}
	}));

	$("body").on("click",".card-button-right",(function (e) {
		$(this).parent().find(".card-counter").html(+$(this).parent().find(".card-counter").html()+1);
			let newItem = {
						"id": $(this).parent().parent().parent().data().id, 
						"count":$(this).parent().find(".card-counter").html()
			};
			editCart(newItem);
	}));

$(".btn").click(function () {
	
});

function renderMenuCards(menuSecondarySection){
	$(".table").hide();
	$(".menu-card").empty();
	$(".menu-card").removeClass("menu-card-cart col-6");
	$(".menu-card").addClass("col-9");

	menuCardVisible.handlerIsMenu = true;

	if(menu.main[menuSecondarySection].length>10) $(".menu-button-right").css({"visibility": "visible"});

	if(menuCardVisible.count>menu.main[menuSecondarySection].length) $(".menu-button-right").css({"visibility": "hidden"});
	menuCardVisible.activeMenuSecondarySection = menuSecondarySection;
		let counter = menu.main[menuSecondarySection].length<menuCardVisible.count ? 
		menu.main[menuSecondarySection].length : menuCardVisible.count;
		for(let i= menuCardVisible.count-10; i<counter;i++){
			let count = 0;
			if(cart.length>0){
				for(let items of cart){
					if(items.id == menu.main[menuSecondarySection][i].id){
						count = items.count;
					}
				}
			}

			$(".menu-card").append(`<div class="card col" data-id=`+menu.main[menuSecondarySection][i].id+`>
					  <img src="img/menu-cards/`+menu.main[menuSecondarySection][i].img+`" class="card-img-top">
					  <div class="card-body">
					    <h5 class="card-title">`+menu.main[menuSecondarySection][i].name+`</h5>
					    <p class="card-text">
					    `+menu.main[menuSecondarySection][i].weight+`/<span>`+menu.main[menuSecondarySection][i].price+`
					    &#8381;</span></p>
					    <div class="card-button badge badge-pill">
						    <button class="card-button-left"><span>-</span></button>
						    <span class="card-counter">`+count+`</span>
						    <button class="card-button-right"><span>+</span></button>
						</div>
					  </div>
					</div>`);
					}
				}

function renderCart(){
	$(".menu-card").empty();//очищаем 
	$(".menu-card").removeClass("col-9")
	$(".menu-card").addClass("menu-card-cart col");//добавляем класс для отображения корзины с заказами

	menuCardVisible.handlerIsMenu = false;

	cart.length>6 ? $(".menu-button-right").css({"visibility": "visible"}) : $(".menu-button-right").css({"visibility": "hidden"});
	let counter = cart.length<menuCardVisible.count ? cart.length : menuCardVisible.count;
		for(let i = menuCardVisible.count-6;
		 i<counter;
		 i++){
			if(cart[i].count!=0){
				$(".menu-card").append(`<div class="card col-4 card-cart" data-id=`+cart[i].id+`>
						  <img src="img/menu-cards/`+menu.getById(cart[i].id).img+`" class="card-img-top">
						  <div class="card-body">
						    <h5 class="card-title">`+menu.getById(cart[i].id).name+`</h5>
						    <p class="card-text">
						    `+menu.getById(cart[i].id).weight+`/<span>`+menu.getById(cart[i].id).price+`&#8381;<span></p>
						    <div class="card-button badge badge-pill">
							    <button class="card-button-left"><span>-</span></button>
							    <span class="card-counter">`+cart[i].count+`</span>
							    <button class="card-button-right"><span>+</span></button>
							</div>
						  </div>
						</div>`);
			}
		}
		$(".table").show(); //добавляем стол  
	}

	function setTotalPrice(){
		let totalPrice = 0;
		for(item of cart){
			totalPrice = totalPrice + (menu.getById(item.id).price * item.count);
		}
		$(".table").find("span").html(totalPrice);
	}

	function sendReserveInf(){
		let new_cart = []
		for(let i=0; i<reserveInfo.cart.length;i++){
			let item = {
				name: menu.getById(cart[i].id).name,
				count: cart[i].count
			}
			new_cart.push(item);
		}

		$.ajax({
			method: "POST",
			url: "http://127.0.0.1:5000/data",
			crossDomain:true,
			headers: {
	                        'Access-Control-Allow-Origin': '*' 
	                    },
	        crossDomain : true,
			contentType: 'json',
			data: {date : reserveInfo.date,
				time: reserveInfo.time,
				quanlity: reserveInfo.quanlity,
				name: reserveInfo.name,
				tel: reserveInfo.tel,
				total: reserveInfo.total,
				cart: new_cart
					},
			success: [function (){console.log("send")}],
		});
		console.log(new_cart);
	}

	$(".cart-button").click(function(){
		menuCardVisible.count = 6;
		renderCart();
	});	

	$(".reserve-button").click(function(){
		if($(".table").find("input").val()!="" 
			&& $('input[type="time"]').val()!="" 
			&& $('input[type="time"]').val()){
			$(".reserve-window").modal("show");
			reserveInfo.date = $(".table").find("input").val();
			reserveInfo.time = $('input[type="time"]').val();
			reserveInfo.quanlity = $('select').val();
		}else{
			$(".warning").modal("show");
		}
	});

	$(".warning-ok").click(function(){
		$(".warning").modal("hide");
	});

	$(".close-reserve-window").click(function(){
		$(".reserve-window").modal("hide");
	});

	$(".button-reserve-confirm").click(function(){
		if($(".custom-control-label").attr("value")=="true" 
			&& $(".reserve-window-content").find("input")[0].value != ""
			&& $(".reserve-window-content").find("input")[1].value != "" && $(".reserve-window-content").find("input")[1].value){
				$(".reserve-window").modal("hide");
				$(".reserve-window-alert").modal("show");
				reserveInfo.name = $(".reserve-window-content").find("input")[0].value;
				reserveInfo.tel =  $(".reserve-window-content").find("input")[1].value;
				reserveInfo.cart = cart;
				reserveInfo.total = reserveInfo.total = $(".table").find("span").html();
				sendReserveInf();
				console.log(reserveInfo);
				$(".reserve-window-content").find("input")[0].value = "";
				$(".reserve-window-content").find("input")[1].value = "";
		}else{
			$(".warning").modal("show");
		}
	});

	/*показать если отправка прошла успешно*/
	$(".button-reserve-confirm-ok").click(function(){
		$(".reserve-window-alert").modal("hide");
	});

	$(".custom-control-label").click(function(){
		$(".custom-control-label").attr("value")=="true" ? $(".custom-control-label").attr("value", "false")
		 : $(".custom-control-label").attr("value","true");
	})


	$(".menu-button-left").click(function(){
		menuCardVisible.handlerIsMenu ? menuCardVisible.counter = 10 : menuCardVisible.counter = 6;
		if(menuCardVisible.count > menuCardVisible.counter) menuCardVisible.count = menuCardVisible.count - menuCardVisible.counter;
		if(menuCardVisible.count = menuCardVisible.counter) $(".menu-button-left").css({"visibility" : "hidden"});
		if(menuCardVisible.handlerIsMenu){
			renderMenuCards(menuCardVisible.activeMenuSecondarySection);
			} else {
				renderCart();
			}
 	});
	$(".menu-button-right").click(function(){
		menuCardVisible.handlerIsMenu ? menuCardVisible.counter = 10 : menuCardVisible.counter = 6;
		menuCardVisible.count = menuCardVisible.count + menuCardVisible.counter;
		$(".menu-button-left").css({"visibility" : "visible"});
		if(menuCardVisible.handlerIsMenu) {
			renderMenuCards(menuCardVisible.activeMenuSecondarySection);
			} else {
				renderCart();
			}
	});

	let lunchMenuPosition = 0;
	let lunchMenuItemPosition = 0;
	function renderLunchMenu(lunchMenuSection){
		$(".lunch-right-col").find("h2").remove();
		$(".lunch-dishes").find("p").remove();
		$(".lunch-dishes-span").remove();
		switch(lunchMenuSection){
			case "salad":
				$(".lunch-right-col").prepend("<h2>Салаты</h2>");
				$(".lunch-button-left").after(`<span class="lunch-dishes-span">Салаты</span>`);
				appendLunchDishes("salad");
				break;
			case "main":
				$(".lunch-right-col").prepend("<h2>Горячее</h2>");
				$(".lunch-button-left").after(`<span class="lunch-dishes-span">Горячее</span>`);
				appendLunchDishes("main");
				break;
			case "dish":
				$(".lunch-right-col").prepend("<h2>Гарниры</h2>");
				$(".lunch-button-left").after(`<span class="lunch-dishes-span">Гарниры</span>`);
				appendLunchDishes("dish");
				break;
			case "drink":
				$(".lunch-right-col").prepend("<h2>Напитки</h2>");
				$(".lunch-button-left").after(`<span class="lunch-dishes-span">Напитки</span>`);
				appendLunchDishes("drink");
				break;
			case "pizza":
				$(".lunch-right-col").prepend("<h2>Пицца</h2>");
				$(".lunch-button-left").after(`<span class="lunch-dishes-span">Пицца</span>`);
				appendLunchDishes("pizza");
				break;
			case "sauce":
				$(".lunch-right-col").prepend("<h2>Соусы</h2>");
				$(".lunch-button-left").after(`<span class="lunch-dishes-span">Соусы</span>`);
				appendLunchDishes("sauce");
				break;
			default:
				$(".lunch-right-col").prepend("<h2>Супы</h2>");
				$(".lunch-button-left").after(`<span class="lunch-dishes-span">Супы</span>`);
				appendLunchDishes("soup");
				break;

			function appendLunchDishes(lunchSection){
				for(let i=0; i<dataLunch[lunchSection].length;i++){
					if(i == 0) {
						$(".lunch-dishes").append(`<p class="activeDish">`+ dataLunch[lunchSection][i]+`</p>`);
					} else {
						$(".lunch-dishes").append(`<p>`+ dataLunch[lunchSection][i]+`</p>`);
					}
				}
			}
		}
	}

	$(".lunch-button-left").click(function(){
		lunchMenuPosition--;
		if(lunchMenuPosition<0) lunchMenuPosition = 6;
		renderLunchMenu(dataLunch.menuSection[lunchMenuPosition]);
	});
	$(".lunch-button-right").click(function(){
		lunchMenuPosition++;
		if(lunchMenuPosition>6) lunchMenuPosition = 0;
		renderLunchMenu(dataLunch.menuSection[lunchMenuPosition]);
	});

	renderLunchMenu();

	$(".lunch-dishes").click(function(e){
		$(".activeDish").removeClass("activeDish");
		$(e.target).addClass("activeDish");
		console.log($(".activeDish").html());
	})

	/*mobile vers*/
	let mobVerMenuCardCounter = 0;
	$(".primary").eq(mobVerMenuCardCounter).css("display","block")
	$(".menu-items-button-left").click(function () {
		mobVerMenuCardCounter--;
		if(mobVerMenuCardCounter < 0) mobVerMenuCardCounter = 4;
		$(".primary").css("display","none");
		/*$(".secondary").fadeOut(1);*/
		$(".primary").eq(mobVerMenuCardCounter).css("display","block")
	});
	$(".menu-items-button-right").click(function () {
		mobVerMenuCardCounter++;
		if(mobVerMenuCardCounter > 4) mobVerMenuCardCounter = 0;
		$(".primary").css("display","none");
		/*$(".secondary").fadeOut(1);*/
		$(".primary").eq(mobVerMenuCardCounter).css("display","block")
	});	

	let menuSecondarySectionItems = [];
	let menuMobCardCounter = 0;

	//initail first mobCard
	getMenuCards("coldDishes");
	renderMobMenuCard(menuSecondarySectionItems,menuMobCardCounter);

	function getMenuCards(menuSecondarySection){
		menuSecondarySectionItems = [];
		for (let i = 0; i < menu.main[menuSecondarySection].length; i++) {
			let item = menu.main[menuSecondarySection][i];
			menuSecondarySectionItems.push(item);
		}
		console.log(menuSecondarySectionItems,menuMobCardCounter);
		renderMobMenuCard(menuSecondarySectionItems,0); 
	};


	function renderMobMenuCard(arrayOfItems,countOfItems){
		$(".mob-menu-card").remove();
					$(".menu-items-button-right").after(`
						<div class="row mob-menu-card mx-auto">
						<span class="mob-button-menu-left my-auto">&nbsp</span>
						<div class="mob-card" data-id=`+arrayOfItems[countOfItems].id+`>
					  <img src="img/menu-cards/`+arrayOfItems[countOfItems].img+`" class="card-img-top">
					  <div class="card-body">
					    <h5 class="card-title">`+arrayOfItems[countOfItems].name+`</h5>
					    <p class="card-text">
					    `+arrayOfItems[countOfItems].weight+`/<span>`+arrayOfItems[countOfItems].price+`&#8381
					    </span></p>
					  </div>
					  </div>
					  <span class="mob-button-menu-right my-auto">&nbsp</span>
					</div>`);
					console.log("cardrendered");
	};

	$("body").on("click",".mob-button-menu-left",function(){
		menuMobCardCounter--;
		if(menuMobCardCounter == 0 ) menuMobCardCounter = menuSecondarySectionItems.length;
		renderMobMenuCard(menuSecondarySectionItems,menuMobCardCounter);
		console.log(menuMobCardCounter);
	});

	$("body").on("click",".mob-button-menu-right",function(){
		menuMobCardCounter++;
		if(menuMobCardCounter > menuSecondarySectionItems.length-1) menuMobCardCounter = 0;
		renderMobMenuCard(menuSecondarySectionItems,menuMobCardCounter);
		console.log(menuMobCardCounter , menuSecondarySectionItems.length);
	});

   console.log("ok");
});