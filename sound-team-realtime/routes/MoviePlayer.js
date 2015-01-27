var model = require('./../model/player');
var fs    = require('fs');



var movie = function (app){

  app.get('/player/movie', function(req, resp){
    var media = model.running()
      , file = app.get('media_path') + media.path
      , stat = fs.statSync(file)
      , total = stat.size
    ;

    if(req.headers['range']){
      var range = req.headers.range.replace(/bytes=/, "").split(/-/)
        , start = parseInt(range[0], 10)
        , end   = end ? parseInt(end, 10) : total-1
        , chunksize = (end - start) + 1;
      ;

      file = fs.createReadStream(file, {start: start, end: end});
      resp.writeHead(
        206,
        {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
        }
      );
      
      file.pipe(resp);

      model.updateMediaRange([start, end]);
    }else{
      resp.writeHead(file, {
        'Content-Length': total,
        'Content-Type': 'video/mp4'
      });
      fs.createReadStream(file).pipe(resp);
    }

  });


  app.get('/play', function(req, resp){
    resp.send('<video src="/player/movie" controls></video>');
  })
};

module.exports = movie;
