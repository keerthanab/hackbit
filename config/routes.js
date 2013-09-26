var passport = require('passport');
var express = require('express');
exports.routes = function (map) {

    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    //map.all(':controller/:action');
    //map.all(':controller/:action/:id');

    map.root('home#landingPage');

    map.post('/signup', 'signup#signupSuccess');

    map.get('/already-signed-up', 'home#signupFailure');

    map.get('/login', 'login#loginPage');

    map.get('/overview', 'sidebar#overviewPage');

    map.get('/submission', 'sidebar#submissionPage');
    
    map.get('/forum', 'sidebar#forumPage');
    
    map.get('/teams', 'sidebar#teamsPage');

    map.get('/announcements', 'sidebar#announcementsPage');

    map.get('/rules', 'sidebar#rulesPage'); 

    map.get('/brewery', 'sidebar#breweryPage');

    map.get('/logout', 'logout#logoutPage');

};
