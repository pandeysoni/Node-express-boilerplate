var routes = require(__BASE__ + '/server/routes/index');

module.exports = function(app, passport){
	// API Server Endpoints
	app.post('/send', routes.sendMail);
}

