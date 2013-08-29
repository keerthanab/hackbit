action('landingPage', function () {
	
	if(req.username) {
		redirect('/login');
	} else {
		render('my-trial.ejs', {user: req.username, title: 'Hack Pub'}  );
	}

});

action('signupFailure', function () {
	
	render('signup_failure.ejs', {user: req.username, title: 'Hack Pub'}  ); 

});

