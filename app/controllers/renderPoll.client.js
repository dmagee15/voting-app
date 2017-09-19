'use strict';
var ctx = document.getElementById("myChart").getContext('2d');
var question = document.getElementById("pollQuestion").innerHTML;
var wordregex = /^[\w]*[^:]/;
var numregex = /[\d]*$/;

function showForm(){
    document.getElementById("newOptionForm").style.display = 'inline';
    document.getElementById("pollAddOption").style.display = 'none';
}

var labelArray = [];
var colorArray = [];
var dataArray = [];

if(document.getElementById("option7")!==null){
    labelArray = [document.getElementById("option1").innerHTML.match(wordregex),document.getElementById("option2").innerHTML.match(wordregex),document.getElementById("option3").innerHTML.match(wordregex),document.getElementById("option4").innerHTML.match(wordregex),document.getElementById("option5").innerHTML.match(wordregex),document.getElementById("option6").innerHTML.match(wordregex),document.getElementById("option7").innerHTML.match(wordregex)];
    dataArray = [parseInt(document.getElementById("option1").innerHTML.match(numregex),10),parseInt(document.getElementById("option2").innerHTML.match(numregex),10),parseInt(document.getElementById("option3").innerHTML.match(numregex),10),parseInt(document.getElementById("option4").innerHTML.match(numregex),10),parseInt(document.getElementById("option5").innerHTML.match(numregex),10),parseInt(document.getElementById("option6").innerHTML.match(numregex),10),parseInt(document.getElementById("option7").innerHTML.match(numregex),10)];
    colorArray = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#cc65fe","#ff6384"];
}
else if(document.getElementById("option6")!==null){
    labelArray = [document.getElementById("option1").innerHTML.match(wordregex),document.getElementById("option2").innerHTML.match(wordregex),document.getElementById("option3").innerHTML.match(wordregex),document.getElementById("option4").innerHTML.match(wordregex),document.getElementById("option5").innerHTML.match(wordregex),document.getElementById("option6").innerHTML.match(wordregex)];
    dataArray = [parseInt(document.getElementById("option1").innerHTML.match(numregex),10),parseInt(document.getElementById("option2").innerHTML.match(numregex),10),parseInt(document.getElementById("option3").innerHTML.match(numregex),10),parseInt(document.getElementById("option4").innerHTML.match(numregex),10),parseInt(document.getElementById("option5").innerHTML.match(numregex),10),parseInt(document.getElementById("option6").innerHTML.match(numregex),10)];
    colorArray = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#cc65fe"];
}
else if(document.getElementById("option5")!==null){
    labelArray = [document.getElementById("option1").innerHTML.match(wordregex),document.getElementById("option2").innerHTML.match(wordregex),document.getElementById("option3").innerHTML.match(wordregex),document.getElementById("option4").innerHTML.match(wordregex),document.getElementById("option5").innerHTML.match(wordregex)];
    dataArray = [parseInt(document.getElementById("option1").innerHTML.match(numregex),10),parseInt(document.getElementById("option2").innerHTML.match(numregex),10),parseInt(document.getElementById("option3").innerHTML.match(numregex),10),parseInt(document.getElementById("option4").innerHTML.match(numregex),10),parseInt(document.getElementById("option5").innerHTML.match(numregex),10)];
    colorArray = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"];
}
else if(document.getElementById("option4")!==null){
    labelArray = [document.getElementById("option1").innerHTML.match(wordregex),document.getElementById("option2").innerHTML.match(wordregex),document.getElementById("option3").innerHTML.match(wordregex),document.getElementById("option4").innerHTML.match(wordregex)];
    dataArray = [parseInt(document.getElementById("option1").innerHTML.match(numregex),10),parseInt(document.getElementById("option2").innerHTML.match(numregex),10),parseInt(document.getElementById("option3").innerHTML.match(numregex),10),parseInt(document.getElementById("option4").innerHTML.match(numregex),10)];
    colorArray = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
}
else if(document.getElementById("option3")!==null){
    labelArray = [document.getElementById("option1").innerHTML.match(wordregex),document.getElementById("option2").innerHTML.match(wordregex),document.getElementById("option3").innerHTML.match(wordregex)];
    dataArray = [parseInt(document.getElementById("option1").innerHTML.match(numregex),10),parseInt(document.getElementById("option2").innerHTML.match(numregex),10),parseInt(document.getElementById("option3").innerHTML.match(numregex),10)];
    colorArray = ["#3e95cd", "#8e5ea2","#3cba9f"];
}
else{
    labelArray = [document.getElementById("option1").innerHTML.match(wordregex),document.getElementById("option2").innerHTML.match(wordregex)];
    dataArray = [parseInt(document.getElementById("option1").innerHTML.match(numregex),10),parseInt(document.getElementById("option2").innerHTML.match(numregex),10)];
    colorArray = ["#3e95cd", "#8e5ea2"];
}
new Chart(document.getElementById("myChart"), {
    type: 'pie',
    data: {
      labels: labelArray,
      datasets: [{
        label: "Population (millions)",
        backgroundColor: colorArray,
        data: dataArray
      }]
    },
    options: {
      title: {
        display: true,
        text: question
      }
    }
});
/*
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
*/
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