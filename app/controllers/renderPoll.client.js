'use strict';

/*(function () {
    var apiUrl = appUrl + '/api/:id';
    var regex = /[\w\d]{24}/;
    var url = window.location.href;
    var pollId = url.match(regex)[0];
    
    ajaxFunctions.ready(function(){
      
      ajaxFunctions.ajaxRequest('GET', appUrl+'/logged', function(data){

         if(data=="true"){
            ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
               var userObject = JSON.parse(data);
               var username = userObject.username;
 
               document.querySelector('#loginout').innerHTML = "Logout";
               document.querySelector('#logstatus').innerHTML = "Logged in as: "+username;
               document.querySelector('#loginlink').setAttribute('href','/logout');
               
               ajaxFunctions.ajaxRequest('GET', appUrl+'/getPollData/'+pollId, function(data){
         var poll = JSON.parse(data)[0];

         $('#pollQuestion').html(poll.question);
         var html = "";
         if(poll.option7){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div><div class="pollDataRecord"><p>'+poll.option5+': '+poll.option5Num+'</p></div><div class="pollDataRecord"><p>'+poll.option6+': '+poll.option6Num+'</p></div><div class="pollDataRecord"><p>'+poll.option7+': '+poll.option7Num+'</p></div>';
         }
         else
         if(poll.option6){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div><div class="pollDataRecord"><p>'+poll.option5+': '+poll.option5Num+'</p></div><div class="pollDataRecord"><p>'+poll.option6+': '+poll.option6Num+'</p></div>';
         }
         else
         if(poll.option5){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div><div class="pollDataRecord"><p>'+poll.option5+': '+poll.option5Num+'</p></div>';
         }
         else
         if(poll.option4){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div>';
         }
         else
         if(poll.option3){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div>';
         }else
         {
              html = '<form action="vote/'+pollId+'/option1/'+username+'" method="post"><button name="mysubmitbutton" type="submit" class="voteoption">'+poll.option1+': '+poll.option1Num+'</button></form><form action="vote/'+pollId+'/option2/'+username+'" method="post"><button name="mysubmitbutton" type="submit" class="voteoption">'+poll.option2+': '+poll.option2Num+'</button></form>';
         }
         $('.pollData').append(html);
         
      });
               
               form(action='/vote/'+pollId+'/'+options[2]+'/'+user.github.username, method='POST')
                  button.voteoption(name='mysubmitbutton', type='submit')
                     option[0]+": "+option[1]
            });
         }else{
            console.log("logged out");
            document.querySelector('#loginout').innerHTML = "Login";
            document.querySelector('#logstatus').innerHTML = "Not logged in";
            document.querySelector('#loginlink').setAttribute('href','/login');
            
            
            ajaxFunctions.ajaxRequest('GET', appUrl+'/getPollData/'+pollId, function(data){
         var poll = JSON.parse(data)[0];
         console.log(poll.question);
         $('#pollQuestion').html(poll.question);
         var html = "";
         if(poll.option7){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div><div class="pollDataRecord"><p>'+poll.option5+': '+poll.option5Num+'</p></div><div class="pollDataRecord"><p>'+poll.option6+': '+poll.option6Num+'</p></div><div class="pollDataRecord"><p>'+poll.option7+': '+poll.option7Num+'</p></div>';
         }
         else
         if(poll.option6){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div><div class="pollDataRecord"><p>'+poll.option5+': '+poll.option5Num+'</p></div><div class="pollDataRecord"><p>'+poll.option6+': '+poll.option6Num+'</p></div>';
         }
         else
         if(poll.option5){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div><div class="pollDataRecord"><p>'+poll.option5+': '+poll.option5Num+'</p></div>';
         }
         else
         if(poll.option4){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div><div class="pollDataRecord"><p>'+poll.option4+': '+poll.option4Num+'</p></div>';
         }
         else
         if(poll.option3){
             html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div><div class="pollDataRecord"><p>'+poll.option3+': '+poll.option3Num+'</p></div>';
         }else
         {
              html = '<div class="pollDataRecord"><p>'+poll.option1+': '+poll.option1Num+'</p></div><div class="pollDataRecord"><p>'+poll.option2+': '+poll.option2Num+'</p></div>';
         }
         $('.pollData').append(html);
         
      });
            
            
         }
      });
   });
   
})();

*/