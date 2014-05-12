
module.exports = function(config, dependencies, job_callback) {
	//TODO: get real data from T2 API
    job_callback(null, {title: config.widgetTitle, utilization: 60});
};
