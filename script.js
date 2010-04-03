var setFrameUrl = function(url) {
  if (!url || url == 'undefined') return;
  if (!url.match('^https?://')) {
    url = 'http://' + url;
  }
  $('#url').val(url);
  $('iframe').attr('src',url);
};

var rotate = function() {
  $('#ipad').toggleClass('landscape').toggleClass('portrait');
}

$(function(){

setFrameUrl($.url.param('url'));
if ($.url.param('portrait')) rotate();

$('#rotate').click(rotate);

$('#reload').click(function(){
  $('iframe').attr('src',$('iframe').attr('src'));
});

$('#url').focus(function(){
  $('#kbd').show();
});

$('#url').blur(function(){
  $('#kbd').hide();
});

$('#url').keyup(function(evt){
  if (evt.keyCode != 13) return;
  $('#url').blur();
  setFrameUrl($(this).val());
});

$('#show_about').click(function(){
  $('#about').slideToggle();
  return false;
});

});
