//datamuse

async function getDataMuseResponse(wordQuery, numbers) {
    const dataMuseURL = 'https://api.datamuse.com/words?';
    const queryParameter = 'sl=' //sl: sounds like 
    const numbersOfQuery = '&max=';
    const endpoint = dataMuseURL + queryParameter + wordQuery + numbersOfQuery + numbers;
    try {
        const response = await fetch(endpoint, {cache: "no-cache"});
        if (response.ok) {
            const jsonResponse = await response.json();
            renderDataMuseResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

const renderDataMuseResponse = (res) => {
    // Handles if res is falsey
    console.log(res.length);
    if(!res){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!res.length){
        list.innerHTML = "<p>No result, please try again.</p>";
      return;
    }
  
    // Creates an array to contain the HTML strings
    let wordList = []
    // Loops through the response and maxxing out at 10
    for(let i = 0; i < res.length; i++){
      // Creates a list of words
      wordList.push(`<li>${res[i].word}</li>`);
    }
    // Joins the array of HTML strings into one string
    wordList = wordList.join("");
  
    // Manipulates responseField to render the modified response
    list.innerHTML = `${wordList}`;
    return;
  }


//datamuse click event
const dataMuseInput = document.getElementById('datamuse_input');
const resultNumbers = document.getElementById('result_numbers');
const dataMuseButton = document.getElementById('datamuse_button');
const list = document.getElementById('list');
const displayDataMuse = (event) => {
    event.preventDefault();
    //Clean previous results
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    const wordQuery = dataMuseInput.value;
    const numbers = resultNumbers.value;
    getDataMuseResponse(wordQuery, numbers);
 
}
dataMuseButton.addEventListener('click', displayDataMuse);



//Rebrandly
function getRebrandlyResponse() {
    const apiKey = '9ed6cc30bcbc499f8a48897978032809';
    const endpoint = 'https://api.rebrandly.com/v1/links';
    //const parameters = 
}

//Rebrandly click event
const urlInputField = document.getElementById('rebrandly_input');
const shortenButton = document.getElementById('rebrandly_button');
const displayShortUrl = (event) => {
    event.preventDefault();
    
}
shortenButton.addEventListener('click', displayShortUrl);



//TMDB


