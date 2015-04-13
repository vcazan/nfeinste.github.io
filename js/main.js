<script type="text/javascript">
    
    var $ = jQuery.noConflict();
    $(document).ready(function() {
                      $('#myCarousel').carousel({ interval: 3000, cycle: true });
                      });
                      


    $(document).ready(function() {
                      // navigation click actions
                      $('.scroll-link').on('click', function(event){
                                           event.preventDefault();
                                           var sectionID = $(this).attr("data-id");
                                           scrollToID('#' + sectionID, 750);
                                           });
                      // scroll to top action
                      $('.scroll-top').on('click', function(event) {
                                          event.preventDefault();
                                          $('html, body').animate({scrollTop:0}, 'slow');
                                          });
                      // mobile nav toggle
                      $('#nav-toggle').on('click', function (event) {
                                          event.preventDefault();
                                          $('#nav-items').toggleClass("open");
                                          });
                      });
                      // scroll function
                      function scrollToID(id, speed){
                          var offSet = 50;
                          var targetOffset = $(id).offset().top - offSet;
                          var mainNav = $('#main-nav');
                          $('html,body').animate({scrollTop:targetOffset}, speed);
                          if (mainNav.hasClass("open")) {
                              mainNav.css("height", "1px").removeClass("in").addClass("collapse");
                              mainNav.removeClass("open");
                          }
                      }
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}



</script>
