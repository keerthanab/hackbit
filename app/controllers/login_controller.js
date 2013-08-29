action('loginPage', function () {
	
var user = new User(req.query);
console.log("This is from login controller");

var gravatar = require('gravatar');
var gravatarURL = gravatar.url('baskaran@usc.com', {s: '200', r: 'pg', d: '404'});

console.log("GRAVATAR URL:"+gravatarURL);


user.retrieveUser(req,res,retrieveUserCallback); 	
	function retrieveUserCallback(err, result) {
		if (err) {
    		console.log("There's an error, and it reads: " + err);
    		//render('signup_failure.ejs', {user: req.username, title: 'Hack Pub'}  );       
    		// render error page to notify there was an error while trying to retrieve user - server issue may be    	      
    	}
    	else {
    		if(result) {
    			console.log("All is fine from login controller");
    			//redirect to login in this case and say hi to the new user :)
                //console.log("rightnow:" req.cookies.user);
    			redirect('/overview'); 	
    		} else {
    			//render(req.query.path.resolve(), {loginError:'Sorry, you\'re not logged in correctly.'}); 	
    			console.log("OOPS, there is password mismatch");
                //render a new page saying there is error 
    			// password mismatch, render a page accordingly
    		}
    	}
 	};





});


