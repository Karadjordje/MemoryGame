
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
				'http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG18479.png',
				'http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG18479.png',
				'http://pngimg.com/uploads/bear/bear_PNG23454.png',
				'http://pngimg.com/uploads/bear/bear_PNG23454.png',
				'http://pngimg.com/uploads/beaver/beaver_PNG30.png',
				'http://pngimg.com/uploads/beaver/beaver_PNG30.png',
				'http://pngimg.com/uploads/birds/birds_PNG112.png',
				'http://pngimg.com/uploads/birds/birds_PNG112.png',
				'http://pngimg.com/uploads/birds/birds_PNG108.png',
				'http://pngimg.com/uploads/birds/birds_PNG108.png',
				'http://pngimg.com/uploads/camel/camel_PNG2920.png',
				'http://pngimg.com/uploads/camel/camel_PNG2920.png',
				'http://pngimg.com/uploads/cheetah/cheetah_PNG14862.png',
				'http://pngimg.com/uploads/cheetah/cheetah_PNG14862.png',
				'http://pngimg.com/uploads/crab/crab_PNG46.png',
				'http://pngimg.com/uploads/crab/crab_PNG46.png'
			];
			mediumArray=[
				'http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG18479.png',
				'http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG18479.png',
				'http://pngimg.com/uploads/bear/bear_PNG23454.png',
				'http://pngimg.com/uploads/bear/bear_PNG23454.png',
				'http://pngimg.com/uploads/beaver/beaver_PNG30.png',
				'http://pngimg.com/uploads/beaver/beaver_PNG30.png',
				'http://pngimg.com/uploads/birds/birds_PNG112.png',
				'http://pngimg.com/uploads/birds/birds_PNG112.png',
				'http://pngimg.com/uploads/birds/birds_PNG108.png',
				'http://pngimg.com/uploads/birds/birds_PNG108.png',
				'http://pngimg.com/uploads/camel/camel_PNG2920.png',
				'http://pngimg.com/uploads/camel/camel_PNG2920.png',
				'http://pngimg.com/uploads/cheetah/cheetah_PNG14862.png',
				'http://pngimg.com/uploads/cheetah/cheetah_PNG14862.png',
				'http://pngimg.com/uploads/crab/crab_PNG46.png',
				'http://pngimg.com/uploads/crab/crab_PNG46.png',
				'http://pngimg.com/uploads/crocodile/crocodile_PNG13182.png',
				'http://pngimg.com/uploads/crocodile/crocodile_PNG13182.png',
				'http://pngimg.com/uploads/crow/crow_PNG3116.png',
				'http://pngimg.com/uploads/crow/crow_PNG3116.png',
				'http://pngimg.com/uploads/deer/deer_PNG10179.png',
				'http://pngimg.com/uploads/deer/deer_PNG10179.png',
				'http://pngimg.com/uploads/dog/dog_PNG2454.png',
				'http://pngimg.com/uploads/dog/dog_PNG2454.png',
				'http://pngimg.com/uploads/dolphin/dolphin_PNG9122.png',
				'http://pngimg.com/uploads/dolphin/dolphin_PNG9122.png',
				'http://pngimg.com/uploads/donkey/donkey_PNG24.png',
				'http://pngimg.com/uploads/donkey/donkey_PNG24.png',
				'http://pngimg.com/uploads/eagle/eagle_PNG1237.png',
				'http://pngimg.com/uploads/eagle/eagle_PNG1237.png',
				'http://pngimg.com/uploads/elephants/elephants_PNG18791.png',
				'http://pngimg.com/uploads/elephants/elephants_PNG18791.png',
				'http://pngimg.com/uploads/falcon/falcon_PNG16.png',
				'http://pngimg.com/uploads/falcon/falcon_PNG16.png',
				'http://pngimg.com/uploads/ferret/ferret_PNG17119.png',
				'http://pngimg.com/uploads/ferret/ferret_PNG17119.png' //18
			];
			hardArray=[
				'http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG18479.png',
				'http://pngimg.com/uploads/arctic_fox/arctic_fox_PNG18479.png',
				'http://pngimg.com/uploads/bear/bear_PNG23454.png',
				'http://pngimg.com/uploads/bear/bear_PNG23454.png',
				'http://pngimg.com/uploads/beaver/beaver_PNG30.png',
				'http://pngimg.com/uploads/beaver/beaver_PNG30.png',
				'http://pngimg.com/uploads/birds/birds_PNG112.png',
				'http://pngimg.com/uploads/birds/birds_PNG112.png',
				'http://pngimg.com/uploads/birds/birds_PNG108.png',
				'http://pngimg.com/uploads/birds/birds_PNG108.png',
				'http://pngimg.com/uploads/camel/camel_PNG2920.png',
				'http://pngimg.com/uploads/camel/camel_PNG2920.png',
				'http://pngimg.com/uploads/cheetah/cheetah_PNG14862.png',
				'http://pngimg.com/uploads/cheetah/cheetah_PNG14862.png',
				'http://pngimg.com/uploads/crab/crab_PNG46.png',
				'http://pngimg.com/uploads/crab/crab_PNG46.png',
				'http://pngimg.com/uploads/crocodile/crocodile_PNG13182.png',
				'http://pngimg.com/uploads/crocodile/crocodile_PNG13182.png',
				'http://pngimg.com/uploads/crow/crow_PNG3116.png',
				'http://pngimg.com/uploads/crow/crow_PNG3116.png',
				'http://pngimg.com/uploads/deer/deer_PNG10179.png',
				'http://pngimg.com/uploads/deer/deer_PNG10179.png',
				'http://pngimg.com/uploads/dog/dog_PNG2454.png',
				'http://pngimg.com/uploads/dog/dog_PNG2454.png',
				'http://pngimg.com/uploads/dolphin/dolphin_PNG9122.png',
				'http://pngimg.com/uploads/dolphin/dolphin_PNG9122.png',
				'http://pngimg.com/uploads/donkey/donkey_PNG24.png',
				'http://pngimg.com/uploads/donkey/donkey_PNG24.png',
				'http://pngimg.com/uploads/eagle/eagle_PNG1237.png',
				'http://pngimg.com/uploads/eagle/eagle_PNG1237.png',
				'http://pngimg.com/uploads/elephants/elephants_PNG18791.png',
				'http://pngimg.com/uploads/elephants/elephants_PNG18791.png',
				'http://pngimg.com/uploads/falcon/falcon_PNG16.png',
				'http://pngimg.com/uploads/falcon/falcon_PNG16.png',
				'http://pngimg.com/uploads/ferret/ferret_PNG17119.png',
				'http://pngimg.com/uploads/ferret/ferret_PNG17119.png', //18
				'http://pngimg.com/uploads/flamingo/flamingo_PNG15107.png',
				'http://pngimg.com/uploads/flamingo/flamingo_PNG15107.png',
				'http://pngimg.com/uploads/fox/fox_PNG23169.png',
				'http://pngimg.com/uploads/fox/fox_PNG23169.png',
				'http://pngimg.com/uploads/giraffe/giraffe_PNG13535.png',
				'http://pngimg.com/uploads/giraffe/giraffe_PNG13535.png',
				'http://pngimg.com/uploads/goat/goat_PNG13151.png',
				'http://pngimg.com/uploads/goat/goat_PNG13151.png',
				'http://pngimg.com/uploads/goose/goose_PNG39.png',
				'http://pngimg.com/uploads/goose/goose_PNG39.png',
				'http://pngimg.com/uploads/gorilla/gorilla_PNG18713.png',
				'http://pngimg.com/uploads/gorilla/gorilla_PNG18713.png',
				'http://pngimg.com/uploads/gull/gull_PNG52.png',
				'http://pngimg.com/uploads/gull/gull_PNG52.png',
				'http://pngimg.com/uploads/harbor_seal/harbor_seal_PNG16.png',
				'http://pngimg.com/uploads/harbor_seal/harbor_seal_PNG16.png', //26
				'http://pngimg.com/uploads/hedgehog/hedgehog_PNG14.png',
				'http://pngimg.com/uploads/hedgehog/hedgehog_PNG14.png',
				'http://pngimg.com/uploads/hippo/hippo_PNG10.png',
				'http://pngimg.com/uploads/hippo/hippo_PNG10.png',
				'http://pngimg.com/uploads/horse/horse_PNG2550.png',
				'http://pngimg.com/uploads/horse/horse_PNG2550.png',
				'http://pngimg.com/uploads/jaguar/jaguar_PNG20758.png',
				'http://pngimg.com/uploads/jaguar/jaguar_PNG20758.png',
				'http://pngimg.com/uploads/kangaroo/kangaroo_PNG14.png',
				'http://pngimg.com/uploads/kangaroo/kangaroo_PNG14.png',
				'http://pngimg.com/uploads/lion/lion_PNG23293.png',
				'http://pngimg.com/uploads/lion/lion_PNG23293.png'
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
