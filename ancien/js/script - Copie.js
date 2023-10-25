$(function() {
   $('.line-button').click(function() {window.location ="notre-salon.php"});
   $('.price').click(function() {window.location ="notre-salon.php"});
 
  $('.onglet').hover(
    function() { 
      $(this).css('background-color', '#8b1c5a');
       $(this).css('background-image', 'url(images/triangle-over.jpg)');
       $(this).find('a').css('color', '#fff');
    }, 
    function() {
        $(this).css('background-color', '#fff');
        $(this).css('background-image', 'url(images/triangle.jpg)');
         $(this).find('a').css('color', '#8b1c5a');
   }
  );
$('.line-button').hover(
    function() { 
       $(this).css('background-image', 'none');
       $(this).css('background-position', '0px 0px');
       $(this).css('color', '#fff');
    }, 
    function() {
        $(this).css('background-position', '-770px 270px');
        $(this).css('background-image', 'url(images/bg-large.jpg)');
        $(this).css('color', '#ffe4ca');
   }
  );
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-47200037-1', 'ruanthai.fr');
ga('send', 'pageview');

