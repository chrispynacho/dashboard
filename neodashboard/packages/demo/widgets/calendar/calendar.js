widget = {
    onData: function (el, data) {
        $('.content', el).empty();

        if (data.title) {
            $('h2', el).text(data.title);
        }

        if (!data.events || !data.events.length) {
            $('.content', el).append($("<div>").html("No events found."));
        } else {
			
			var prevDate = "";
            data.events.forEach(function (event, i) {
                var eventDiv = $("<div/>").addClass('event');
				var dateInfo = $("<div/>").addClass('date');
				if (event.date != prevDate) {
					dateInfo.append('<div class="day-of-week">' + event.dayOfWeek + '</div>' + event.date);
				}
				prevDate = event.date;
                var eventInfo = $("<div/>").addClass('event-info')
					.append('<div class="event-time">' + event.time + '</div>' + '<div class="event-summary">' + event.summary + '</div>');
				if (event.location.match(/Neo/)) {
					eventInfo.addClass('at-neo');
				}
				var eventImages = $("<div/>").addClass('event-images');


                if (i == 0) {
                    insertMug(eventImages, 'alexa')
                    // heather doesn't have a photo from sf
                } else if (i == 2) {
                    insertMug(eventImages, 'shanley')
                    insertMug(eventImages, 'alexa')
                } else if (i == 3) {
                    insertMug(eventImages, 'shanley')
                    insertMug(eventImages, 'alexa')
                    insertMug(eventImages, 'dtrejo')
                    insertMug(eventImages, 'long')
                }

                $(eventDiv).append(dateInfo);
				$(eventDiv).append(eventInfo);
				$(eventInfo).append(eventImages);
				
                $('.content', el).append(eventDiv);
            });
        }
    }
};

function insertMug(div, name) {
    var img = $('<img>').attr('src', '/images/' + name + '.jpg').attr('alt', name)
    div.append(img)
};
