 $(document).ready(function () {

     $('#fullpage').fullpage({
         sectionsColor: ['#232323', '#232323', '#232323']
         , responsiveHeight: 600
         , slidesNavigation: true
         , anchors: ['firstPage', 'secondPage', '3rdPage']
         , afterResponsive: function (isResponsive) {}
         , menu: '#menu'
     , });

     $("#logo").fadeIn("slow", function () {

     });
     setInterval(repeatCycle, randomNumber(3000, 5000));
     setInterval(testIfOnScreen, 1000);
     function repeatCycle() {
         $(".logocontainer").effect("shake", {
             direction: "left"
             , times: 4
             , distance: 5
         }, 30);
     }

     function randomNumber(min, max) {
         var number = min + Math.floor(Math.random() * max);
         return number;
     }

     function newTyped() { /* A new typed object */ }

     function foo() {
         console.log("Callback");
     }


     var resetElement = document.querySelector('.reset');
     if (resetElement) {
         resetElement.addEventListener('click', function () {
             document.getElementById('typed')._typed.reset();
         });
     }
     $("#typed").typed({
         strings: ["a motion designer.", "Ilias."]
         , typeSpeed: 30
         , backDelay: 2000
         , loop: true
         , contentType: 'html', // or text
         // defaults to null for infinite loop
         loopCount: null
         , callback: function () {
             lift();
         }
     });
     $("#typed2").typed({
         strings: ["if interested!", "Ilias."]
         , typeSpeed: 30
         , backDelay: 2000
         , loop: true
         , contentType: 'html', // or text
         // defaults to null for infinite loop
         loopCount: null
         , callback: function () {
             lift();
         }
     });
     var execOnce = false;
     function testIfOnScreen() {
         if ($("#slide7").isOnScreen() && execOnce == false) {
             execOnce = true;
             console.log("on screen");
             $("#typed3").typed({
                 strings: ["More work is currently being made!", "...", "...", "...", "...", "Still here?", "Why?", "There's nothing to see here!", "Trust me :)", "More content is on it's way!", "Interested? :D", "Don't hesitate to contact me!"]
                 , typeSpeed: 30
                 , backDelay: 2000
                 , loop: true
                 , contentType: 'html', // or text
                 // defaults to null for infinite loop
                 loopCount: null
                 , callback: function () {
                     lift();
                 }
             });
         }
     }

     function lift() {
         $(".head-text").addClass("lift-text");
     }
     $.fn.isOnScreen = function () {

         var win = $(window);

         var viewport = {
             top: win.scrollTop()
             , left: win.scrollLeft()
         };
         viewport.right = viewport.left + win.width();
         viewport.bottom = viewport.top + win.height();

         var bounds = this.offset();
         bounds.right = bounds.left + this.outerWidth();
         bounds.bottom = bounds.top + this.outerHeight();

         return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

     };
 });