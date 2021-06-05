const formidable = require('formidable');
const ffmepg = require('ffmpeg');
const music_matching = require('../model/musicMatching');

let analysis = (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req);
  form.on('fileBegin', function (name, file) {
    file.path = __dirname + '/music_matching/uploads/' + file.name;
  })
  try {
    let process = new ffmepg('D:/Downloads/music_matching-master/music_matching-master/VoiceProcessing/web/controller/music_matching/uploads/blob');
    process.then(function (audio) {
      audio.fnExtractSoundToMP3('D:/Downloads/music_matching-master/music_matching-master/VoiceProcessing/web/controller/music_matching/uploads/audio.mp3', function (err, file) {
        if(err)
        {
          res.json({
            success: false,
            error: "Something wrong in here."
          })
        }
        else
        {
          music_matching.getSongName().then(result => {
            res.json({
              success: true,
              song_name: result
            })
          }).catch(err => {
            res.json({
              success: false,
              error: err
            })
          })
        }
      })
    })
  }
  catch(e)
  {
    res.json({
      success: false,
      err_code: e.code,
      err_msg: e.msg
    })
  }
};

exports.analysis = analysis;