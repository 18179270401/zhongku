$(function () {
	!function () {
        

        $('.pic2').each(function(){
            var swiper1 = new Swiper($(this).find('.swiper-container'), {
                pagination: $(this).find('.swiper-pagination'),
                slidesPerView: 1,
                paginationClickable: true,
                speed:1000,
                loop: true,
                autoplay: 3000,
                autoplayDisableOnInteraction : false,
            });
        });

    }()

    !function () {
      $(".head .nav ul li").hover(function () {
          if($(this).find(".nav-son p").length == 0){
              $(this).find(".nav-son").hide();
          }else{
              $(this).find(".nav-son").stop().slideToggle();
          }

      })
    }()

    !function () {
      var ww = $(window).width();
      $(".head .nav-phone").click(function () {
          $(".head .nav-main").slideToggle();
          $(".mask").toggle();
      });

      $(".mask").click(function () {
         $(this).toggle();
         $(".head .nav-main").slideToggle();
      });

      $(".head .nav-main ul li").click(function () {
          $(this).find(".nav-son").slideToggle();
      });

      var currenturl = window.location.href;
      var curren = currenturl.substring(currenturl.lastIndexOf('/') + 1);
          
      $(".head .nav ul li>a").each(function(){
          var linkurl = $(this).attr("href");
          var link = linkurl.substring(linkurl.lastIndexOf('/') + 1);
          if(curren == link){
              $(this).parent().addClass('active');
          }
      });

      $(".head .nav ul li .nav-son a").each(function(){
          var linkurl = $(this).attr("href");
          var link = linkurl.substring(linkurl.lastIndexOf('/') + 1);
          if(curren == link){
              $(this).parents('li').addClass('active');
              $(this).parent().addClass('active');
          }
      });

      if(ww <= 1100){
        $(".head .nav-main ul li").each(function(){
          if($(this).find('.nav-son p').length >= 1){
            $(this).find('a').first().attr('href','javascript:;');
          };
        });
      };
      
    }()

    !function () {
      var i = $(".search-list > div").length;
      if( i == 0){
          $(".search-list").html("<span>对不起，搜索的内容不存在，请重新搜索</span>")
      }
    }()
})