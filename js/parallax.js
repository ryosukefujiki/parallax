$(function () {
  $(".parallax").paroller({
    factor: 0.5,
    factorXs: 0.5,
    type: 'background',
    direction: 'vertical'
  });

  // var target1 = $("#parallax-01");
  // var targetPosOT1 = target1.offset().top;
  // var target2 = $("#parallax-02");
  // var targetPosOT2 = target2.offset().top;
  // var target3 = $("#parallax-03");
  // var targetPosOT3 = target3.offset().top;
  // var targetFactor = 0.5;
  // var windowH = $(window).height();
  // var scrollYStart1 = targetPosOT1 - windowH;
  // var scrollYStart2 = targetPosOT2 - windowH;
  // var scrollYStart3 = targetPosOT3 - windowH;
  // $(window).on('scroll',function(){
  //   var scrollY = $(this).scrollTop();
  //   if(scrollY > scrollYStart1){
  //     target1.addClass('bg-gray');
  //   }
  //   if(scrollY > scrollYStart2){
  //     target2.addClass('bg-gray');
  //   }
  //   if(scrollY > scrollYStart3){
  //     target3.addClass('bg-gray');
  //   }
  //   if(scrollY == targetPosOT1){
  //     target1.removeClass('bg-gray');
  //   }
  //   if(scrollY < targetPosOT2 + 100 && scrollY > targetPosOT2 - 100){
  //     target2.removeClass('bg-gray');
  //   }
  //   if(scrollY < targetPosOT3 + 100 && scrollY > targetPosOT3 - 100){
  //     target3.removeClass('bg-gray');
  //   }
  // });
});
