export const data = {
    sizes:{xs:"Mini, 6sm", sm:"Kiçik, 23sm", md:"Orta, 30sm", lg: "Boyuk, 35sm"},
    pizzas:[
      {id: 1, name: "Spaysi Italyan", desc: "Pizza sousu, İtalyan sosisi, Pepperoni, Pul bibər, Mozarella", img:"spasiItalyan.jpg", filter: ['spicy', 'meat'], prices:{sm:13, md:21, lg:27} },
      {id: 2, name: "Papa Miks", desc: "Çiken Barbekyu, Hot N Spaysi, Marqarita, Klassik Pepperoni", img:"papaMiks.jpg", filter: ['meat', 'chick', 'spicy'],  prices:{lg:20} },
      {id: 3, name: "Qarışıq Ət BBQ", desc: "BBQ Sousu, Mal əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella", img:"QarışıqBBQ.jpg", filter: ['meat'],  prices:{sm:15, md:23, lg:29} },
      {id: 4, name: "Bonanza", desc: "BBQ Sousu, Mal əti, Vetçina, Pomidor, Mozzarella, Halapeno bibəri", img:"Bonanza.jpg", filter: ['meat', 'spicy'],  prices:{sm:13, md:21, lg:27} },
      {id: 5, name: "Qarışıqət", desc: "Pizza sousu, Mal Əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella", img:"Qarışıqət.jpg", filter: ['meat'],  prices:{sm:13, md:20, lg:25} },
      {id: 6, name: "Cheddar Dabl Burger", desc: "1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar", img:"CheddarDablBurger.jpg", filter: ['meat'],  prices:{sm:14, md:22, lg:28} },
      {id: 7, name: "Super Papa", desc: "Pizza sousu, Pepperoni, İtalyan Sosisi, Vetçina, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella", img:"superPapa.jpg", filter: ['meat'],  prices:{sm:12, md:18, lg:23} },
      {id: 8, name: "Cheddar Çiken Club", desc: "Pizza sousu, Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu", img:"CheddarÇikenClub.jpg" , filter: ['chick'],  prices:{sm:12, md:20, lg:25} },
      {id: 9, name: "Çiken Çizburger", desc: "1000 ada sousu, Qril Toyuğu, Turşu Xiyar, Pomidor, Mozzarell", img:"ÇikenÇizburger.jpg", filter: ['chick'],  prices:{sm:11, md:18, lg:22} },
      {id: 10, name: "Dabl Çizburger", desc: "1000 ada sousu, Mal Əti, Turşu Xiyar, Pomidor, Mozzarella", img:"DablÇizburger.jpg", filter: ['meat'],  prices:{sm:12, md:19, lg:23} },
      {id: 11, name: "Çiken Göbələk", desc: "Göbələk sousu, Qril toyuğu, Turşu xiyar, Göbələk, Mozzarella", img:"ÇikenGöbələk.jpg",  filter: ['chick'], prices:{sm:12, md:19, lg:23} },
      {id: 12, name: "Havay", desc: "Pizza sousu, Qril Toyuğu, Ananas, Ekstra Mozzarella", img:"Havay.jpg", filter: ['chick'],  prices:{xs:5.50 , sm:10, md:18, lg:23} },
      {id: 13, name: "Marinera", desc: "Pizza sousu, Ton Balığı, Yaşıl Bibər, Qara Zeytun, Mozzarella", img:"Marinera.jpg", filter: [],  prices:{xs:5.50 , sm:10, md:18, lg:22} },
      {id: 14, name: "Qril Çiken Parmezan", desc: "Pizza sousu, Sarımsaqlı Parmezan sousu, Qril Toyuğu, Vetçina, Pomidor, Mozzarella, Halapeno Bibəri", img:"QrilÇikenParmezan.jpg", filter: [],  prices:{xs:5.50 , sm:11, md:17, lg:21} },
      {id: 15, name: "Çiken Parmezan", desc: "Pizza sousu, Sarımsaqlı parmezan sousu, Çiken Poppers, Göbələk, Mozzarella, İtalyan Ədviyyatları", img:"ÇikenParmezan.jpg", filter: ['chick','meat'],  prices:{sm:11, md:17, lg:21} },
      {id: 16, name: "Çiken Ranç", desc: "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella", img:"ÇikenRanç.jpg", filter: ['chick'],  prices:{xs:5.50 , sm:11, md:16, lg:22} },
      {id: 17, name: "Acılı Çiken Ranç", desc: "Ranç Sousu, Qril Toyuğu, Göbələk, Halapeno Bibəri, Pomidor, Mozzarella", img:"AcılıÇikenRanç.jpg", filter: ['chick'],  prices:{xs:5.5 , sm:11, md:16, lg:22}    },
      {id: 18, name: "Yunan", desc: "Pizza sousu, Pomidor, Pepperonçini, Feta Pendiri, Mozzarella, Qara Zeytun, Oreqano", img:"Yunan.jpg", filter: ['vegan'],  prices:{sm:8, md:13, lg:16} },
      {id: 19, name: "Marqarita", desc: "Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano", img:"Marqarita.jpg", filter: ['vegan'],  prices:{xs:5.50 , sm:8, md:13, lg:16} },
      {id: 20, name: "Acılı Vegetarian", desc: "Pizza Sous, Halapeno Bibəri, Pomidor, Göbələk, Qara Zeytun, Yaşıl Bibər, Mozzarella", img:"AcılıVegetarian.jpg", filter: ['vegat'],  prices:{xs:5.50 , sm:9, md:13, lg:18} },
      {id: 21, name: "Vegetarian", desc: "Pizza sous, Pomidor, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella", img:"Vegetarian.jpg", filter: ['vegan'],  prices:{xs:5.50 , sm:9, md:13, lg:18} },
      {id: 22, name: "Karnaval", desc: "Pizza Sous, Göbələk, Qara Zeytun, Pepperoni, Mozzarella", img:"Karnaval.jpg", filter: ['meat'],  prices:{sm:9, md:14, lg:19} },
      {id: 23, name: "Klassik Pepperoni", desc: "Pizza sous, Pepperoni, Ekstra Mozzarella", img:"KlassikPepperoni.jpg", filter: ['meat'],  prices:{xs:5.50 , sm:9, md:14, lg:19} },
      {id: 24, name: "Çiken Barbekyu", desc: "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri", img:"ÇikenBarbekyu.jpg", filter: ['chick'],  prices:{sm:10, md:16, lg:22} },
      {id: 25, name: "Hot N Spaysi", desc: "Pizza sousu, Mal Əti, Pomidor, Yaşıl Bibər, Halapeno Bibəri, Mozzarella", img:"HotNSpaysi.jpg", filter: ['meat', 'spicy'], prices:{sm:10, md:16, lg:21} }
    ]
  }
  