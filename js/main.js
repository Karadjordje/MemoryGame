$(document).ready(function(){

	var easy = "easy";
	var medium = "medium";
	var hard = "hard";

	var type = "";

	// We put our functions in JS object
	var app = {
		cards: [
			
		],
		startTime:0,
		attempts: 0,
		init: function(data){ 
			easyArray=[
				'http://pngimg.com/upload/small/lion_PNG573.png',
				'http://pngimg.com/upload/small/lion_PNG573.png',
				'http://pngimg.com/upload/small/camel_PNG2920.png',
				'http://pngimg.com/upload/small/camel_PNG2920.png',
				'http://pngimg.com/upload/small/eagle_PNG1202.png',
				'http://pngimg.com/upload/small/eagle_PNG1202.png',
				'http://pngimg.com/upload/arctic_fox_PNG18479.png',
				'http://pngimg.com/upload/arctic_fox_PNG18479.png',
				'http://pngimg.com/upload/bear_PNG1183.png',
				'http://pngimg.com/upload/bear_PNG1183.png',
				'http://pngimg.com/upload/cheetah_PNG14860.png',
				'http://pngimg.com/upload/cheetah_PNG14860.png',
				'http://pngimg.com/upload/chicken_PNG2171.png',
				'http://pngimg.com/upload/chicken_PNG2171.png',
				'http://pngimg.com/upload/cow_PNG2134.png',
				'http://pngimg.com/upload/cow_PNG2134.png'
			];
			mediumArray=[
				'http://pngimg.com/upload/small/lion_PNG573.png',
				'http://pngimg.com/upload/small/lion_PNG573.png',
				'http://pngimg.com/upload/small/camel_PNG2920.png',
				'http://pngimg.com/upload/small/camel_PNG2920.png',
				'http://pngimg.com/upload/small/eagle_PNG1202.png',
				'http://pngimg.com/upload/small/eagle_PNG1202.png',
				'http://pngimg.com/upload/arctic_fox_PNG18479.png',
				'http://pngimg.com/upload/arctic_fox_PNG18479.png',
				'http://pngimg.com/upload/bear_PNG1183.png',
				'http://pngimg.com/upload/bear_PNG1183.png',
				'http://pngimg.com/upload/cheetah_PNG14860.png',
				'http://pngimg.com/upload/cheetah_PNG14860.png',
				'http://pngimg.com/upload/chicken_PNG2171.png',
				'http://pngimg.com/upload/chicken_PNG2171.png',
				'http://pngimg.com/upload/cow_PNG2134.png',
				'http://pngimg.com/upload/cow_PNG2134.png',	
				'http://pngimg.com/upload/crocodile_PNG13175.png',
				'http://pngimg.com/upload/crocodile_PNG13175.png',
				'http://pngimg.com/upload/crow_PNG3107.png',
				'http://pngimg.com/upload/crow_PNG3107.png',
				'http://pngimg.com/upload/deer_PNG10183.png',
				'http://pngimg.com/upload/deer_PNG10183.png',
				'http://pngimg.com/upload/dog_PNG2453.png',
				'http://pngimg.com/upload/dog_PNG2453.png',
				'http://pngimg.com/upload/dolphin_PNG9130.png',
				'http://pngimg.com/upload/dolphin_PNG9130.png',
				'http://pngimg.com/upload/duck_PNG5030.png',
				'http://pngimg.com/upload/duck_PNG5030.png',
				'http://pngimg.com/upload/elephants_PNG18801.png',
				'http://pngimg.com/upload/elephants_PNG18801.png',
				'http://pngimg.com/upload/ferret_PNG17119.png',
				'http://pngimg.com/upload/ferret_PNG17119.png',
				'http://pngimg.com/upload/fish_PNG1159.png',
				'http://pngimg.com/upload/fish_PNG1159.png',
				'http://pngimg.com/upload/flamingo_PNG15114.png',
				'http://pngimg.com/upload/flamingo_PNG15114.png' //18
			];
			hardArray=[
				'http://pngimg.com/upload/small/lion_PNG573.png',
				'http://pngimg.com/upload/small/lion_PNG573.png',
				'http://pngimg.com/upload/small/camel_PNG2920.png',
				'http://pngimg.com/upload/small/camel_PNG2920.png',
				'http://pngimg.com/upload/small/eagle_PNG1202.png',
				'http://pngimg.com/upload/small/eagle_PNG1202.png',
				'http://pngimg.com/upload/arctic_fox_PNG18479.png',
				'http://pngimg.com/upload/arctic_fox_PNG18479.png',
				'http://pngimg.com/upload/bear_PNG1183.png',
				'http://pngimg.com/upload/bear_PNG1183.png',
				'http://pngimg.com/upload/cheetah_PNG14860.png',
				'http://pngimg.com/upload/cheetah_PNG14860.png',
				'http://pngimg.com/upload/chicken_PNG2171.png',
				'http://pngimg.com/upload/chicken_PNG2171.png',
				'http://pngimg.com/upload/cow_PNG2134.png',
				'http://pngimg.com/upload/cow_PNG2134.png',	
				'http://pngimg.com/upload/crocodile_PNG13175.png',
				'http://pngimg.com/upload/crocodile_PNG13175.png',
				'http://pngimg.com/upload/crow_PNG3107.png',
				'http://pngimg.com/upload/crow_PNG3107.png',
				'http://pngimg.com/upload/deer_PNG10183.png',
				'http://pngimg.com/upload/deer_PNG10183.png',
				'http://pngimg.com/upload/dog_PNG2453.png',
				'http://pngimg.com/upload/dog_PNG2453.png',
				'http://pngimg.com/upload/dolphin_PNG9130.png',
				'http://pngimg.com/upload/dolphin_PNG9130.png',
				'http://pngimg.com/upload/duck_PNG5030.png',
				'http://pngimg.com/upload/duck_PNG5030.png',
				'http://pngimg.com/upload/elephants_PNG18801.png',
				'http://pngimg.com/upload/elephants_PNG18801.png',
				'http://pngimg.com/upload/ferret_PNG17119.png',
				'http://pngimg.com/upload/ferret_PNG17119.png',
				'http://pngimg.com/upload/fish_PNG1159.png',
				'http://pngimg.com/upload/fish_PNG1159.png',
				'http://pngimg.com/upload/flamingo_PNG15114.png',
				'http://pngimg.com/upload/flamingo_PNG15114.png', //18
				'http://pngimg.com/upload/fox_PNG371.png',
				'http://pngimg.com/upload/fox_PNG371.png',
				'http://pngimg.com/upload/giraffe_PNG13522.png',
				'http://pngimg.com/upload/giraffe_PNG13522.png',
				'http://pngimg.com/upload/goat_PNG13150.png',
				'http://pngimg.com/upload/goat_PNG13150.png',
				'http://pngimg.com/upload/gorilla_PNG18713.png',
				'http://pngimg.com/upload/gorilla_PNG18713.png',
				'http://pngimg.com/upload/horse_PNG2535.png',
				'http://pngimg.com/upload/horse_PNG2535.png',
				'http://pngimg.com/upload/leopard_PNG14832.png',
				'http://pngimg.com/upload/leopard_PNG14832.png',
				'http://pngimg.com/upload/lobster_PNG14255.png',
				'http://pngimg.com/upload/lobster_PNG14255.png',
				'http://pngimg.com/upload/monkey_PNG18737.png',
				'http://pngimg.com/upload/monkey_PNG18737.png', //26
				'http://pngimg.com/upload/parrot_PNG713.png',
				'http://pngimg.com/upload/parrot_PNG713.png',
				'http://pngimg.com/upload/pinguin_PNG2.png',
				'http://pngimg.com/upload/pinguin_PNG2.png',
				'http://pngimg.com/upload/pigeon_PNG3423.png',
				'http://pngimg.com/upload/pigeon_PNG3423.png',
				'http://pngimg.com/upload/rabbit_PNG3790.png',
				'http://pngimg.com/upload/rabbit_PNG3790.png',
				'http://pngimg.com/upload/shark_PNG18836.png',
				'http://pngimg.com/upload/shark_PNG18836.png',
				'http://pngimg.com/upload/wolf_PNG347.png',
				'http://pngimg.com/upload/wolf_PNG347.png'
			];
			switch (data.type) {
	            case easy:
	                this.cards = easyArray.slice(0);
	                break;
	            case medium:
	                this.cards = mediumArray.slice(0);
	                break;
	            case hard:
	                this.cards = hardArray.slice(0);
	                break;
	        }
	        this.type = data.type; // We use this to call our difficulty levels

			// Below I created my HTML
			var $cards = $("#cards");
			$cards.empty();
			$cards.append("<section id=\"mySection\" class=\"containerWin\"></section>");
			
			for (var j=0; j<Math.sqrt(app.cards.length); j++) {
				for (var i=0; i<Math.sqrt(app.cards.length); i++) {
					$('#mySection').append("<div class='flip-container'>");
				}	
				$('.containerWin').append('<div>');
			}
			$('.flip-container').append("<div class='card unmatched'>");
			$('.card').append("<div class='front'>");
			$('.card').append("<div class='back'>");

			this.startTime = new Date();
			this.setAttempts(0);
			this.startTimer();

			app.shuffle();
		},
		startTimer: function() {
			var self = this; // We created self to call this from out object if we used "this" in this.interval it wouldn't work
			var $timer = $('#timer'); // We created variable to not call it each time, so this is more efficient
			clearInterval(this.interval); // We are using this to reset this.interval, to not create many timers
			this.interval = setInterval(function(){
				var timePassed = ((new Date() - self.startTime) / 1000).toFixed(2);
				$timer.text(timePassed);
			}, 100);
		},
		setAttempts: function(attempts) {
			this.attempts = attempts; // We just call our variable attempts
			$('#attempts').text(attempts);
		},
		shuffle: function(){
			// We are making random cards come up with this function
			var random=0;
			var temp=0;
			for (var i = 0; i<app.cards.length; i++) {
				random=Math.round(Math.random()*i);
				temp=app.cards[i];
				app.cards[i]=app.cards[random];
				app.cards[random]=temp;
			}
			app.assignCards(); // We are putting it here because we want it to shuffle cards first then assign them
			console.log("Shuffled cards array: " + app.cards);
		},
		assignCards: function() {
			$('.card').each(function(index){
				$(this).attr('data-card-value', app.cards[index]);
			});
			app.clickHandlers(); // We wonna do this function after they are shuffled and assigned so we put it here
		},
		clickHandlers: function() {
			$('.card').on('click', function(){
				// $(this).data('cardValue') > gives us number from data attribute
				// We call data attributes using camelCase in our case cardValue
				$(this).toggleClass('flipped');
				$(this).addClass('selected');
				$('.back', this).html('<img src=' + $(this).data('cardValue') +  '>');
				app.checkMatch();
			});
		},
		checkMatch: function() {
			// I added variable limit to limit number of items that can be selected at once
			var limit = 2;
			if ($('.selected').length >= limit) {
				if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
					$('.selected').delay(700).each(function() {
            			$(this).animate(
            				{opacity: 0}
            			).removeClass('unmatched');
          			});

					// remove selected cards
					$('.selected').each(function() {
            			$(this).removeClass('selected');
          			});
          			app.checkWin();
				}
				else {
					// flip cards back over
					setTimeout(function(){
						$('.selected').each(function(){
							$(this).toggleClass('flipped').removeClass('selected');
						});
					}, 735);
					this.setAttempts(this.attempts + 1); // We use this to get to our variable
				}
			}
		},
		checkWin: function() {
			if ($('.unmatched').length === 0) {
				clearInterval(this.interval);

				// These are variables that go into leaderboard
				var difficulty = this.type;
				var name = $("#newName").val();
				var time = $("#timer").text();
				var attempts = $("#attempts").text();

				// I created myCurrentList for modal result
				var myCurrentList = {
					difficulty: difficulty,
					name: name,
					time: time,
					attempts: attempts
				};
				var leaderboard = localStorage.getItem("leaderboard");
				if (leaderboard) {
					leaderboard = JSON.parse(leaderboard);
				} else  {
					leaderboard = [];
				}

				// I push myCurrentList to leaderboard to create it
				leaderboard.push(myCurrentList);

				localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

				$("#done").modal(); // When game is finished we activate our modal

				// We add player data here to modal
				var $modalLi = $('<ul id="modalLi">');
				$('#divForLi').append($modalLi);
				$modalLi.append('<li>' + "Name:" + myCurrentList.name + "&nbsp;&nbsp;&nbsp;" + '</li>');
				$modalLi.append('<li>' + "&nbsp;&nbsp;&nbsp;" + "Difficulty:" + myCurrentList.difficulty + '</li>');
				$modalLi.append('<li>' + "&nbsp;&nbsp;&nbsp;" + "Time:" + myCurrentList.time + '</li>');
				$modalLi.append('<li>' + "&nbsp;&nbsp;&nbsp;" + "Attempts:" + myCurrentList.attempts + '</li>');
				$modalLi.append('<div>');
			}
		}
	};

	$('#start-easy').click({type:easy}, function(event){
  		app.init(event.data);
	});
	$('#start-medium').click({type:medium}, function(event){
  		app.init(event.data);
	});
	$('#start-hard').click({type:hard}, function(event){
  		app.init(event.data);
	});
	
	$('#leaderboard').on('click', function(){
		var leaderboard = localStorage.getItem("leaderboard");
		if (leaderboard) {
			leaderboard = JSON.parse(leaderboard);
		} else  {
			leaderboard = [];
		}
		var $container=$('<div class="container text-center">');
		var $ul = $('<ul class="leaderLi">');
		$container.append($ul);

		// We created forEach function to use elements from our leaderboard object
		leaderboard.forEach(function(entry) {
			$ul.append('<li>' + "Name:" + entry.name + "&nbsp;&nbsp;&nbsp;" + '</li>');
			$ul.append('<li>' + "&nbsp;&nbsp;&nbsp;" + "Difficulty:" + entry.difficulty + '</li>');
			$ul.append('<li>' + "&nbsp;&nbsp;&nbsp;" + "Time:" + entry.time + '</li>');
			$ul.append('<li>' + "&nbsp;&nbsp;&nbsp;" + "Attempts:" + entry.attempts + '</li>');
			$ul.append('<div>');
		});
		$("#cards").html($ul);
	});


});
