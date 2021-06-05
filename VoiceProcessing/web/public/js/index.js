$(document).ready(function () {
  $('.preloader-wrapper').hide();
  $('#song_name').hide();
});

navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
    handlerFunction(stream)
});

function handlerFunction(stream) {
  rec = new MediaRecorder(stream);
  rec.ondataavailable = e => {
    audioChunks.push(e.data);
    if (rec.state == "inactive"){
      let blob = new Blob(audioChunks,{type:'audio/mp3'});
      sendData(blob)
    }
  }
}
function sendData(data) {
  let fd = new FormData();
  fd.append('data', data);
  $.ajax({
    type: 'POST',
    url: '/upload',
    data: fd,
    processData: false,
    contentType: false,
    cache: false,
    beforeSend: function(){
      $('.preloader-wrapper').show();
    },
    complete: function(){
      $('.preloader-wrapper').hide();
    },
    success: function (response) {
      if(response.success == false)
      {
        alert(response.error);
      }
      else
      {
        console.log(response.song_name);
        let song_name = response.song_name;
        let item = '<h1 class="font-weight-bold text-center h1 my-5" id="song_name">' + song_name + '</h1>';
        $('#container-body').append(item);
        $('#song_name').show();
      }
    }
  }).done(function(data) {
    console.log(data);
  });
}

$('#record').on('click', function () {
  $('#song_name').remove();
  $('#record').disabled = true;
  $('#record')[0].classList.replace("btn-red", "btn-blue");
  $('#stop').disabled = false;
  audioChunks = [];
  rec.start();
});

$('#stop').on('click', function () {
  $('#record').disabled = false;
  $('#record')[0].classList.replace("btn-blue", "btn-red");
  $('#stop').disabled = true;
  rec.stop();
});