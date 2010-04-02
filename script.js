var setFrameUrl = function(url) {
  if (!url) return;
  if (!url.match('^https?://')) {
    url = 'http://' + url;
  }
  $('#url').val(url);
  $('iframe').attr('src',url);
};

$(function(){

setFrameUrl($.url.param('url'));

$('#rotate').click(function(){
  $('#ipad').toggleClass('landscape').toggleClass('portrait');
});

$('#url').focus(function(){
  $('#kbd').show();
});

$('#url').blur(function(){
  $('#kbd').hide();
});

$('#url').keyup(function(event){
  if (event.keyCode != 13) return;
  $('#url').blur();
  setFrameUrl($(this).val());
});

});
