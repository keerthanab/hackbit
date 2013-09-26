action('logoutPage', function () {
	console.log("Destroying sessions...");
	req.session.destroy();		
	redirect('/');

});