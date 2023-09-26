$(function(){
    function slideMenu() {
    const activeState = $(".menu-list").hasClass("active"); 
    $(".menu-list").animate({
        left: activeState ? "0%" : "-100%"}, 400);
    }
    
    $("#menu-wrapper").on("click",function(){
        $("#hamburger-menu").toggleClass("open");
        $(" .menu-list").toggleClass("active");
        slideMenu();   
    });
    
    $(".menu-list >li").click(function(){
        if($(this).next().is(":visible"))
        {
                $(this).next().stop().slideUp(500);
                $(this).removeClass("active-tab");
                $(this).find("a").removeClass("active");
                
        }else{
            $(".menu-submenu").stop().slideUp(500);
            $(this).next().stop().slideDown(500);
            $(".menu-list >li").removeClass("active-tab");
            $(this).addClass("active-tab");
            $(".menu-list >li>a").removeClass("active");
            $(this).find("a").addClass("active"); 
        }
      });    
    });