var instagram = require('instagram-node-lib');

instagram.set('client_id', process.env.IG_CLIENT_ID);
instagram.set('client_secret', process.env.IG_CLIENT_SECRET);

module.exports = function(config, dependencies, job_callback) {
	
	instagram.tags.recent({ 
		name: config.tag, complete: tagCallback
	});
	
	function tagCallback(data) {
		var url = data[0].images.standard_resolution.url;
		var caption = data[0].caption;
		
		job_callback(null, {title: 'Instagram #' + config.tag, imageSrc: url, caption: caption});
	};
};