function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["Having somewhere to go is home"],
        autoStart: true,
        delay: 1,
        cursor: "", 
      });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
