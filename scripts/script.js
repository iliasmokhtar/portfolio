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
     setInterval(repeatCycle, randomNumber(3000, 5000))

     function repeatCycle() {
         $(".intro").effect("shake", {
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

     function lift() {
         $(".head-text").addClass("lift-text");
     }

 });