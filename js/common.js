    $(document).ready(function(){
    //   $(".down-chevoron").click(function(){
    //     $(".card1-content").animate({ scrollTop: 100 }, "slow");
    //   });

      $(".down-chevoron").click(function(){
        var container = $(".card1-content");
        var currentScroll = container.scrollTop();
        var maxScroll = container.prop('scrollHeight') - container.height();
        
        if (currentScroll + 50 < maxScroll) {
          container.animate({ scrollTop: currentScroll + 50 }, "slow");
        } else {
          container.animate({ scrollTop: maxScroll }, "slow");
        }
      });
    });
