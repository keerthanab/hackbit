action('overviewPage', function () {
		
		if(req.session.username) {
			render('overview.ejs', {user: req.username, title: 'Hack Pub'}  );
		} else {
			redirect('/');
		}

});


action('teamsPage', function () {
		if(req.session.username) {
			render('teams.ejs', {user: req.username, title: 'Hack Pub'}  );
		}

});

action('forumPage', function () {
		if(req.session.username) {
			render('forum.ejs', {user: req.username, title: 'Hack Pub'}  );
		}

});


action('announcementsPage', function () {
	    if(req.session.username) {
			render('announcements.ejs', {user: req.username, title: 'Hack Pub'}  );
		}

});

action('rulesPage', function () {
		if(req.session.username) {
			render('rules.ejs', {user: req.username, title: 'Hack Pub'}  );
		}

});

action('submissionPage', function () {
		if(req.session.username) {
			render('submission.ejs', {user: req.username, title: 'Hack Pub'}  );
		}

});

action('breweryPage', function () {
		if(req.session.username) {
			render('brewery.ejs', {user: req.username, title: 'Hack Pub'}  );
		}

});