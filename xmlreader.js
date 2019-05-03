$.ajax({
    url: 'xmlFiles/news.xml',
    dataType: 'xml',
    success: function(data){
        $(data).find('NewsFeeds NewsFeed').each(function () {
          var title = $(this).find('Title').text();
          var image = $(this).find('Image').text();
          var date = $(this).find('Date').text();
            var id = $(this).attr('id');
          var newsfeed = '';
          newsfeed = '<li><a href="#newsdetailinfo" id="aNewsFeed"              data-key="'+ id + '">' ;
        newsfeed += '<img height="70" width="85" src="' + image + '" />';
            newsfeed += '<h3>' + title + '</h3>';
            newsfeed += '<p>' + date + '</p>';
            newsfeed += '</a></li>';
            
            $('#listoffeeds ul').append(newsfeed);
            $('#listoffeeds ul:visible').listview('refresh');
        });
    },
    
    error: function(){
        $('#status').text('Failed to get a feed...');
    }
    
    
});