window.addEventListener('load', function () {
	const eac = new EaCaptcha();
	function sendMsg (uTxt, clr) {
		$('#hdr').text('Captcha Verified. Sending '+uTxt+' !').css('color', clr);
		$('button').remove();
	}

	function uRegister () {
		$('#hdr').text('Captcha Verified. You are registered !').css('color', '#df00a9');
		$('button').remove();
	}

	$('#btn1').on('click', function () {
		eac.init(function () {
			sendMsg('Mail', '#6c00df');
		});
	});

	$('#btn2').on('click', function () {
		eac.init(function () {
			sendMsg('SMS', '#df5400');
		});
	});

	$('#btn3').on('click', function () {
		eac.init(uRegister);
	});

});