action('signupSuccess', function () {
	
	/*if(req.username) {
		redirect('/login');
	} else {
		render('signup_success.ejs', {user: req.username, title: 'Hack Pub'}  );
	}*/

	var user = new User(req.body);
	console.log("This is from signup controller");

    user.saveUser(req,res, saveUserCallback); 
 	
	function saveUserCallback(err, result) {
	if (err) {
    	console.log("There's an error, and it reads: " + err);
    	//redirect('/already-signed-up')
    	render('signup_failure.ejs', {user: req.username, title: 'Hack Pub'}  );       
    	// render error page to notify user that they already signed up
    	      
    }
    else {
    	console.log("All is fine ya");
        req.session.user=user;
    	//redirect to login in this case and say hi to the new user :)
    	redirect('/overview');
    	//render('signup_success.ejs', {user: req.username, title: 'Hack Pub'}  );       
    	}
  	};

});





