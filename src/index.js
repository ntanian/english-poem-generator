function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem text",
    autoStart: true,
    delay: 0.75,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#form-generator");
poemFormElement.addEventListener("submit", generatePoem);
