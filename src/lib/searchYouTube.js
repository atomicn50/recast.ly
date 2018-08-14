var searchYouTube = (options, callback) => { 
  let requestData = {
    part: 'snippet',
    type: 'video',
    key: options.key,
    q: options.query,  
    maxResults: options.max
  };


  $.get('https://www.googleapis.com/youtube/v3/search', requestData, function(data) {
    callback(data.items);
  });

};

window.searchYouTube = searchYouTube;




/*


options = {
  query:
  max:
  key:
}


  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: requestData,
  //   dataType: 'json',
  //   success: function(data) {
  //     callback(data.items);
  //   },
  //   error: function() {
  //     console.log('failed');
  //   }
  // });

*/