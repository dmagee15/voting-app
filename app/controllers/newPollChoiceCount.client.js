var count = 2;

var button = document.querySelector('#addChoice');

button.addEventListener('click',function(){
    count++;
    switch(count){
        case 3: document.querySelector('#choice3box').style.display = 'inline'; break;
        case 4: document.querySelector('#choice4box').style.display = 'inline'; break;
        case 5: document.querySelector('#choice5box').style.display = 'inline'; break;
        case 6: document.querySelector('#choice6box').style.display = 'inline'; break;
        case 7: document.querySelector('#choice7box').style.display = 'inline'; break;
    }
},false);