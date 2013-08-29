module.exports = function (compound, User) {

     User.prototype.saveUser = function saveUser(req,res,next) {
    	console.log("Hey yo from model saveUser method");
        var user = this;
    	//TODO check if you need return statement or callback in this case
    	User.find({username: this.username}, function(err,result) {		
    		 console.log("Checking if the user already signed up");	
    		 if(!err && result.length > 0){
    		 	console.log("User already signed up, preventing from another addition"); //FIXME have codes for error messages
    		 	err = new Error("Already signed-up user");
    		 	next(err,null); //Now get out of this saveUser function totally. this function maps to next Callback on the top    		 	
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

    User.prototype.retrieveUser = function retrieveUser(req,res,next) {
    	console.log("Hey yo from model retrieveUser method");
        var user = this;
   		User.find({username: user.username}, function(err,result) {	
   			if(!err && result.length==1) {
               user.comparePassword(result[0].password, function resultCallback(err, compareResult) {
                    if (err) {
                        console.log("There's an error, and it reads: " + err);     
                         err = new Error("Some error while retrieving password");
                         res.json(err);
                         next(err,null);                                     
                    }
                    else {
                        console.log("Checking password is going good so far");
                        next(null,compareResult);                  
               
                    }
               });

   		    } else {
                console.log("Something is terribly wrong, coz there is more than one user with this name may be");
                res.json(err);
                next(err,null);
            }               				
   	    });
    };



};