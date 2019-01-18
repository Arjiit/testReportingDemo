function gulpConfig() {
	var src 		= './src/'
	var server 		= src + '/server/';
	var client 		= src + '/client/';
	var	nodeApp 	= server + 'app.js';

	var config = {
		server: server,
		client: client,
		nodeApp: nodeApp,
		browserSyncFiles: [
			client + '**/*', 
			nodeApp, 
			server + 'routes/**/*.js',
			server + 'views/**/*'
		],
		browserSyncPort: 4000,
		nodePort: 3000,
		clientJS: client + '**/*.js',
		buildFolder: './build/',
		buildFiles: src + '/**/'
	};

	return config;
};


module.exports = gulpConfig;