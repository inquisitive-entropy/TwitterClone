// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require ./fakerApi.js


$('input#search-field').on('keyup', function(){
  var searchText = $(this).val();
  $.ajax({
    url: '/api/haikus?search=' + searchText,
    success: function(data){
      var haikus = data.haikus;
      var $list = $('#haiku-list');
      renderHaikuList(haikus, $list)
    }
  })
})

function expandTweet(){
  $('body').on('click', 'textarea.tweet', function(e){
    e.preventDefault();
    $('.form-area').css('height', 'auto');
    $('textarea.tweet').show();
    $('input#submit').show();
    $(this).animate({
      height: "80px"
    }, 300);
  });
  // if( $('body').on('click', function(){
  //   $('input.input-tweet').show();
  //   $('.form-area').css('height', '40px');
  //   $('textarea.tweet').hide();
  // }));
}

function timeAgo(){
  var date = $('p#time').val();
  moment(date).format('YYYY-MM-DD hh:mm:ss');
  var newDate = new Date(moment(date).format('YYYY-MM-DD hh:mm:ss'));
  console.log(newDate);
  var fromNow = moment(newDate).fromNow();
  console.log(fromNow);
  $('p#time').empty();
  $('p#time').html(fromNow);
}

$(function(){
  expandTweet();

  timeAgo();
});
