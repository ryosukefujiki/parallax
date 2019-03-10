$(function(){
    var target1 = $("#parallax-01");
    var targetPosOT1 = target1.offset().top;
    var target2 = $("#parallax-02");
    var targetPosOT2 = target2.offset().top;
    var target3 = $("#parallax-03");
    var targetPosOT3 = target3.offset().top;
    var targetFactor = 0.5;
    var windowH = $(window).height();
    var scrollYStart1 = targetPosOT1 - windowH;
    var scrollYStart2 = targetPosOT2 - windowH;
    var scrollYStart3 = targetPosOT3 - windowH;

    $(window).on('scroll',function(){
      var scrollY = $(this).scrollTop();

      if(scrollY > scrollYStart1){
        target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        target1.addClass('bg-gray');
      }else{
        target1.css('background-position','center top');
      }
      if(scrollY > scrollYStart2){
        target2.css('background-position-y', (scrollY - targetPosOT2) * targetFactor + 'px');
        target2.addClass('bg-gray');
      }else{
        target2.css('background-position','center top');
      }
      if(scrollY > scrollYStart3){
        target3.css('background-position-y', (scrollY - targetPosOT3) * targetFactor + 'px');
        target3.addClass('bg-gray');
      }else{
        target3.css('background-position','center top');
      }

      if(scrollY == targetPosOT1){
        target1.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT2 + 100 && scrollY > targetPosOT2 - 100){
        target2.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT3 + 100 && scrollY > targetPosOT3 - 100){
        target3.removeClass('bg-gray');
      }
    });
  });