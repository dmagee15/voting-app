'use strict';

(function () {
   
   var profileId = document.querySelector('#profile-id') || null;
   var profileUsername = document.querySelector('#profile-username') || null;
   var profileRepos = document.querySelector('#profile-repos') || null;
   var displayName = document.querySelector('#display-name');
   var apiUrl = appUrl + '/api/:id';
   
   ajaxFunctions.ready(function(){
      
      ajaxFunctions.ajaxRequest('GET', appUrl+'/logged', function(data){
         if(data){
            ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
               var userObject = JSON.parse(data);
               console.log("logged in");
               document.querySelector('#loginout').innerHTML = "Logout";
               document.querySelector('#logstatus').innerHTML = "Logged in as: "+userObject.username;
               document.querySelector('#loginlink').setAttribute('href','/logout');
            });
         }else{
            console.log("logged out");
            document.querySelector('#loginout').innerHTML = "Login";
            document.querySelector('#logstatus').innerHTML = "Not logged in";
            document.querySelector('#loginlink').setAttribute('href','/login');
         }
      });
   });
   
})();
