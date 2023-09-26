$(function(){
  function listMore(){
      win=$(window).width();
      if(win <= 320){
          $("#recipe_pick_box li").slice(0).show();  
          $('.more_btn').click(function(e){
              e.preventDefault();
              x= (x+0 <= size_li) ? x+0 : size_li;
              $("#recipe_pick_box li:hidden").slice(0).show();
          });
      }else{
          $("#recipe_pick_box li").slice(0,1).show(); 
          $('.more_btn').click(function(e){
              e.preventDefault();
          $("#recipe_pick_box li:hidden").slice(0,1).show();
          });
      }
  }
  listMore();
  $(window).on("resize",function(){
      listMore()
      location.reload();
  });

});




