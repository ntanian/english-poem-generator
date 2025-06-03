function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "047abeb7f35f08at0b5ffead8e3o0a9c";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem and separate each line with a <br />. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a english poem about ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#form-generator");
poemFormElement.addEventListener("submit", generatePoem);
