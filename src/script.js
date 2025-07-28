function displayPoem(response) {

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "", 
      });
}


function generatePoem(event) {
    event.preventDefault();

// Build the API URL
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "03bb378d4df0e4c5cat14b701460900o";
let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Do NOT include inverted commas and the html word in the poem. Make sure to follow the user instructions. Sign the poem with 'Love, Tumi inside a <strong> element at the end of the poem and NOT at the beginning" ;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
// Make a call to the API

axios.get(apiUrl).then(displayPoem);
// Display the generated poem

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
