action('innerPage', function () {
	
var user = new User(req.body);
console.log("This is from inner controller");
console.log(req.body.username);
console.log(req.body.password);

render('inner.ejs', {user: req.user, title: 'Yep Yep'}  );


});

action('loginPage', function () {
	

		render('inner.ejs', {user: req.user, title: 'Yep Yep'}  );


});