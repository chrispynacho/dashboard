var instagram = require('instagram-node-lib');
var dash = require('lodash');

instagram.set('client_id', process.env.IG_CLIENT_ID);
instagram.set('client_secret', process.env.IG_CLIENT_SECRET);

module.exports = function(config, dependencies, job_callback) {
	
	instagram.tags.recent({ 
		name: config.tag, complete: tagCallback
	});
	
	function tagCallback(data) {
		var url = data[0].images.standard_resolution.url;
		console.log('image url', url);
		job_callback(null, {title: 'Instagram #' + config.tag, imageSrc: url});
	};
};