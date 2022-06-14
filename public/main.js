//datamuse
const dataMuseURL = 'https://api.datamuse.com/words?';
//sl: sounds like 
const dataMuseInput = document.getElementById('datamuse_input');
const resultNumbers = document.getElementById('result_numbers');
const list = document.getElementById('list');
const queryParameter = 'sl=' 
const numberOfQuery = '&max=';

function getDataMuseResponse() {
    
}

//Rebrandly
function getRebrandlyResponse() {
    
}

//TMDB



//click event
const fn = (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = dataMuseInput.value;
    //Clean previous results
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    list.appendChild(li);
}
const dataMuseButton = document.getElementById('datamuse_button');
dataMuseButton.addEventListener('click', fn);