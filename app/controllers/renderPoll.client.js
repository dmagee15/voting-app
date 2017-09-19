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
