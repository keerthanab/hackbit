action('landingPage', function () {
	
	if(req.session.username) {
		console.log("Session already established with this user");
		redirect('/overview');
	} else {
		render('my-trial.ejs', {user: req.session.username, title: 'HackFest'}  );
	}

});

action('signupFailure', function () {
	
	render('signup_failure.ejs', {user: req.session.username, title: 'HackFest'}  ); 

});

