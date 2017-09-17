'use strict';

(function () {
   
   var pollList = $('#pollList');
   var apiUrl = appUrl + '/api/:id';
   
   ajaxFunctions.ready(function(){
      ajaxFunctions.ajaxRequest('GET', appUrl+'/renderYourPolls', function(data){
         console.log(data);
         var length = JSON.parse(data).length;
         for(var x=length-1;x>=0;x--){
             pollList.append('<a href="/polls/'+JSON.parse(data)[x]._id+'"><div class="pollRecord"><p>'+JSON.parse(data)[x].question+'</p></div></a>');
         }
         console.log(window.location.href);
      });
   });
   

})();
