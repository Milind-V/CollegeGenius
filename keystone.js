var keystone = require('keystone');

keystone.init({

	'name': 'Keystone Demo',
	'brand': 'Demo',

	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': 'public',

	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI ||'mongodb://siddharth:siddharth3030@ds151431.mlab.com:51431/collegegenius',
	// 'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/keystone-demo',
	'cloudinary config': 'cloudinary://985282186514726:KijYScOjxOUhzXU9MTDz-kzuCg0@siddharth-shah',
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'demo',

	'ga property': process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN,

	'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});


keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga_property: keystone.get('ga property'),
	ga_domain: keystone.get('ga domain'),
	chartbeat_property: keystone.get('chartbeat property'),
	chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'Doubts': ['posts', 'post-comments', 'post-categories'],
	'Quiz': ['quizzes', 'questions'],
	'Notes': 'galleries',
	'enquiries': 'enquiries',
	'Previous Year Question Papers': 'Previous',
	'users': 'users',
	// 'field-tests': 'things',

});

keystone.start();
