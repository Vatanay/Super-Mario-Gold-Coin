$('div.mario').click(function(){
	var mario = $(this);
	mario.find('div.box').css('margin-top','-25px');
	if (mario.find('span.coin').hasClass( "play" ) ) {
		mario.find('div.box').addClass('empty');
		$("<audio class='block'></audio>").attr({ 
			'src':'http://adobewordpress.com/tasarim/include/block-sound.mp3',
			'autoplay':'autoplay'
		}).appendTo("body");
		setTimeout(function(){
			$('audio.block').remove();
		}, 800);
	}else{
		$("<audio></audio>").attr({ 
			'src':'http://adobewordpress.com/tasarim/include/gold-sound.mp3', 
			'autoplay':'autoplay'
		}).appendTo("body");
		mario.find('span.coin').addClass('play');
		setTimeout(function(){
			mario.find('div.box').addClass('empty');
		}, 150);
	}

	setTimeout(function(){
		mario.find('div.box').css('margin-top','0');
	}, 200);
});

/* OFF-TOPIC */
$('a.replay').click(function(){
	$('div.mario span.coin.play').removeClass('play');
	$('div.mario div.box').removeClass('empty');
});