$(function(){
    $('#deletebookbtn').on('click', function(e){
         $target = $(e.target);
         const id = $target.attr('data-id');

         $.ajax({
             type: 'DELETE', 
             url: '/adminmenu/book/'+id, 
             success: function(response){
                 alert('Deleting Book'); 
                 window.location.href="/adminmenu/books"
             }, 
             error: function(err){
                 console.log(err);
             }
         });
    });
});