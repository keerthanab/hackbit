action('overviewPage', function () {
	
		render('overview.ejs', {user: req.username, title: 'Hack Pub'}  );


});


action('teamsPage', function () {
	
		render('teams.ejs', {user: req.username, title: 'Hack Pub'}  );


});

action('forumPage', function () {
	
		render('forum.ejs', {user: req.username, title: 'Hack Pub'}  );


});


action('announcementsPage', function () {
	
		render('announcements.ejs', {user: req.username, title: 'Hack Pub'}  );


});

action('rulesPage', function () {
	
		render('rules.ejs', {user: req.username, title: 'Hack Pub'}  );


});

action('submissionPage', function () {
	
		render('submission.ejs', {user: req.username, title: 'Hack Pub'}  );


});

action('breweryPage', function () {
	
		render('brewery.ejs', {user: req.username, title: 'Hack Pub'}  );


});