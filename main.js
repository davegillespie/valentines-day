// Set up variables here
let Rudy = {
  name: "Rudy",
  id: "valentine-1",
  message: "It'd be rude not to say happy Valentine's day!"
};

let Pomengranate = {
  name: "Pomengranate",
  id: "valentine-2",
  message: "You da POM! Happy Valentine's Day!"
};

let Schmitty = {
  name: "Schmitty",
  id: "valentine-3",
  message: "We're schmitten with you, our Valentine!"
};


// Set up function setHTMLValentinesName here

function setHTMLValentinesName(valentine) {
  let valentineName = document.getElementById(`${valentine.id}--name`);
  valentineName.innerHTML = valentine.name;
}

console.log(setHTMLValentinesName(Rudy));




// Set up function setHTMLValentinesMessage here

function setHTMLValentinesMessage(valentine) {
  let valentineMessage = document.getElementById(`${valentine.id}--message`);
  valentineMessage.innerHTML = valentine.message;
}



// function setHTMLValentinesMessage()





// Set up function processValentines here

arrayNames = [Rudy, Pomengranate, Schmitty];

function processValentines() {
  for (let i = 0; arrayNames.length; i++) {
    console.log(arrayNames[i]);
    setHTMLValentinesName(arrayNames[i]);
    setHTMLValentinesMessage(arrayNames[i]);
  }
}

// Call process Valentines here

// setHTMLValentinesName(Rudy);
// setHTMLValentinesMessage(Rudy);
//
// setHTMLValentinesName(Pomengranate);
// setHTMLValentinesMessage(Pomengranate);
//
// setHTMLValentinesName(Schmitty);
// setHTMLValentinesMessage(Schmitty);
