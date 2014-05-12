widget = {
    onData: function(el, data) {
		console.log('data', data);
        if (data.title) {
            $('h2', el).text(data.title);
        }
		
		var imgTag = "<img class='featured-image' src='" + data.imageSrc + "'/>";
		//var captionText = data.caption.replace('#NEOINNOVATE', '') || caption.text;
		var caption = '<div class="caption">' + data.caption.text + '</div> <div class="user">- @' + data.caption.from.username + '</div>';
		
        $('.content', el).html(imgTag + caption);
    }
};