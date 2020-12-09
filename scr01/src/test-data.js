menu = {
	main: {
			coldDishes:[
						{id:1,
						"name":"Селёдочка на троих",
						"price":"300",
						"weight":"300",
						"img":"img.png"
						},
				
						{id:2,
						"name":"Цезарь",
						"price":"300",
						"weight":"200",
						"img":"img.png"
						},

						{id:3,
						"name":"Селёдочка на троих",
						"price":"300",
						"weight":"200",
						"img":"img.png"
						},
				
						{id:4,
						"name":"Цезарь",
						"price":"300",
						"weight":"200",
						"img":"img.png"
						},

						{id:5,
						"name":"Селёдочка на троих",
						"price":"300",
						"weight":"200",
						"img":"img.png"
						},
				
						{id:6,
						"name":"Цезарь",
						"price":"300",
						"weight":"200",
						"img":"img.png"
						},

						{id:7,
						"name":"Столичный",
						"price":"300",
						"weight":"200",
						"img":"img.png"
						},
				
						{id:8,
						"name":"Оливье",
						"price":"300",
						"weight":"200",
						"img":"img.png"
						},

						{id:9,
						"name":"Жульен",
						"price":"500",
						"weight":"150",
						"img":"img.png"
						},

						{id:10,
						"name":"Жульен",
						"price":"500",
						"weight":"150",
						"img":"img.png"
						},

						{id:11,
						"name":"Жульен",
						"price":"500",
						"weight":"150",
						"img":"img.png"
						}
					],
				salad:[
						
					],
				hotDishes:[
					
					],	
		},
	

	getById(id){
		let item = false;
		for(let i=0; i< menu.main.coldDishes.length; i++){
			if(menu.main.coldDishes[i].id == id){
				item = menu.main.coldDishes[i];
			}
		}
		for(let i=0; i< menu.main.salad.length; i++){
			if(menu.main.salad[i].id == id){
				item = menu.main.salad[i];
			}
		}
		for(let i=0; i< menu.main.hotDishes.length; i++){
			if(menu.main.hotDishes[i].id == id){
				item = menu.main.hotDishes[i];
			}
		}
		return item;
	}
};