action('teamRegister', function () {

var projectString = "{ \"teamname\":"+  JSON.stringify(req.body.teamname) + 
", \"projectname\":"+ req.body.projectName+ 
", \"projDesc\":"+ req.body.projDesc+ 
", \"teammember\":{\"member1\":"+ req.body.teamMember1+ ",\"member2\":" + req.body.teamMember2+ "}" +
"}";


var project = new Project(req.body);

project.insertProject(req, res, insertProjectCallback);

function insertProjectCallback(err, result) {
	if (err) {
    	console.log("There's an error, and it reads: " + err);
    	//redirect('/already-signed-up')
    	//render('signup_failure.ejs', {user: req.username, title: 'Hack Pub'}  );       
    	// render error page to notify user that they already signed up
    	      
    }
    else {
    	console.log("All is fine ya");
        
    	//redirect to login in this case and say hi to the new user :)
    	redirect('/overview');
    	//render('signup_success.ejs', {user: req.username, title: 'Hack Pub'}  );       
    	}
  	};





});