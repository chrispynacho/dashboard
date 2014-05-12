var ical = require('ical'),
    _ = require('underscore'),
	moment = require('moment');

module.exports = function(config, dependencies, job_callback) {
    var maxEntries = config.maxEntries;
    var logger = dependencies.logger;
    var formatDate = function(date) {
		
        var d = date.getDate();
        var m = date.getMonth()+1;
		
        return '' + (m<=9?'0'+m:m) + '/' + (d<=9?'0'+d:d);
    };

    ical.fromURL(config.calendarUrl, {}, function(err, data){
		//console.log('ical data', data);

        if (err){
            logger.error(err);
            job_callback("error loading callendar");
            return;
        }

        var events = _.sortBy(data, function(event) { return event.start; });
        events = _.filter(events, function(event) { return event.end >= new Date(); });

        var result = [];
        var counter = 0;
        events.forEach(function(event) {
            if (counter < maxEntries) {
                counter++;
				var evt = {
					month: moment(event.start).format('MMMM'),
					date: moment(event.start).format('DD'),
					dayOfWeek: moment(event.start).format('ddd'),
					time: moment(event.start).format('h:mm a'),
					summary: event.summary,
					'location': event.location
				};
                result.push(evt);
            }
        });
		
		//console.log('result', result);
		
        job_callback(null, {events: result, title: config.widgetTitle});
    });
};