
$(function(){
    $('#deleteuserbtn').on('click', function(e){
         $target = $(e.target);
         const id = $target.attr('data-id');

         $.ajax({
             type: 'DELETE', 
             url: '/user/'+id, 
             success: function(response){
                 alert('Deleting User'); 
                 window.location.href="/users"
             }, 
             error: function(err){
                 console.log(err);
             }
         });
    });
});