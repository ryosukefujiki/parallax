$('.contact').on({
    'mouseenter': function(){
        var twitterBtn =  TweenMax.to('.twitter', 0.4, { right: 110, ease: Elastic.easeOut.config(0.5, 0.3), });
        twitterBtn.delay(0);
        var facebookBtn =  TweenMax.to('.facebook', 0.4, { right: 90, bottom:90, ease: Elastic.easeOut.config(0.5, 0.3), });
        facebookBtn.delay(0.1);
        var mailBtn = TweenMax.to('.mail', 0.4, { bottom: 110, ease: Elastic.easeOut.config(0.5, 0.3), });
        mailBtn.delay(0.2);
    }
});

$('.contact_btn').on({
    'mouseleave': function(){
        var twitterBtn =  TweenMax.to('.twitter', 0.25, { right: 32,ease: Expo.easeOut });
        twitterBtn.delay(0);
        var facebookBtn =  TweenMax.to('.facebook', 0.25, { right: 32, bottom:32,ease: Expo.easeOut });
        facebookBtn.delay(0.1);
        var mailBtn = TweenMax.to('.mail', 0.25, { bottom: 32,ease: Expo.easeOut });
        mailBtn.delay(0.2);
    }
});


$('.twitter').on({
    'mouseenter': function(){
        TweenMax.to('.twitter', 0.25, { right: 120, ease: Expo.easeOut });
    },
    'mouseleave': function(){
        TweenMax.to('.twitter', 0.25, { right: 110, ease: Expo.easeOut });
    }
});


$('.facebook').on({
    'mouseenter': function(){
        TweenMax.to('.facebook', 0.25, { right: 96, bottom: 96,ease: Expo.easeOut });
    },
    'mouseleave': function(){
        TweenMax.to('.facebook', 0.25, { right: 90,bottom:90, ease: Expo.easeOut });
    }
});


$('.mail').on({
    'mouseenter': function(){
        TweenMax.to('.mail', 0.25, { bottom: 120,ease: Expo.easeOut });
    },
    'mouseleave': function(){
        TweenMax.to('.mail', 0.25, { bottom: 110, ease: Expo.easeOut });
    }
});






