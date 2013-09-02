
module.exports = function (compound, User) {


     User.prototype.insertProject = function insertProject(req,res,next) {
    	console.log("Hey yo from model insertProject method");
        var project = this;
        var user = req.session.user;

    	//TODO check if you need return statement or callback in this case
    	User.find({username: user.username}, function(err,result) {	

    	console.log(user.username);	
    	console.log(err);
    		 User.update({username: user.username},
    		 		{$set:{projDetails: project}});

    		 if(result.length > 0){
    		 	console.log("User found"); //FIXME have codes for error messages
    		 	
    		 	user.update({username: user.username},
    		 		{$set:{projDetails: project}});

    		 	next(null,user); //Now get out of this saveUser function totally. this function maps to next Callback on the top    		 	
    		 	//res.send(err,500);	
    		 } else {
    		 	console.log("Proceed to saving the user details");	   		 	
				user.save(function(error){ //here 'this' keyword refers to User object  - dont use this here becoz it got confused with 'find' query result
	   			if(error) {
					console.log("Oops some error in saving user :( ");	
	        		res.json(error); //note that this isn't propogated to next() callback yet
	   		 	}
	    		else{
	       		 	console.log("Yay saved user details successfully :) ");
                    next(null,user); //goback to controller now
	        		//mongoose.disconnect();	      
		    		} 
				});   
    		 }
    	});

    };

};