widget = {
    onData: function (el, data) {
        $('.content', el).empty();

        if (data.title) {
            $('h2', el).text(data.title);
        }

        if (!data.events || !data.events.length) {
            $('.content', el).append($("<div>").html("No events found."));
        } else {
            
            this.log (data.events.length + ' calendar events found!'); 

            data.events.forEach(function (event) {
                var eventDiv = $("<div/>").addClass('event');
				var dateInfo = $("<div/>").addClass('date').append('<div class="day-of-week">' + event.dayOfWeek + '</div>' + event.date);
                var eventInfo = $("<div/>").addClass('event-info')
					.append('<div class="event-time">' + event.time + '</div>' + '<div class="event-summary">' + event.summary + '</div>');
				var eventImages = $("<div/>").addClass('event-images');



                $(eventDiv).append(dateInfo);
				$(eventDiv).append(eventInfo);
				$(eventDiv).append(eventImages);
				

                $('.content', el).append(eventDiv);
            });
        }
    }
};