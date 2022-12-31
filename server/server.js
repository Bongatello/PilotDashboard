const app = require('express')();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//sendInputsToAPI function, converts to numbers and uploads the 3 user inputs to the API
function sendInputsToAPI(ALT, HIS, ADI) {
  app.get("/api", (req, res) => {
    res.json({
      stats: [Number(ALT), Number(HIS), Number(ADI)]
    });
  });
  app.listen(5000, () => {console.log("Server started on port 5000")}); 
};


//waitForKeyPress function, this function is responsible for making a break between typing the last user input (ADI) to uploading the inputs to the API,
//after getting last user input, proceeds to wait for the user to press ANY key before sending the data to the API.
function waitForKeyPress() {
  return new Promise((resolve) => {
    process.stdin.on('data', (data) => {
      process.stdin.pause();
      resolve();
    });
  });
};


//Get user inputs and check the value if its numeric and if its in range, if not, gives out an error which states what input was wrong.
rl.question('Enter ALT (0 to 3000): ', (ALT) => {
    if (ALT >= 0 && ALT <= 3000) {
      rl.question('Enter HIS (0 to 360): ', (HIS) => {
        if (HIS >= 0 && HIS <= 360) {
          rl.question('Enter ADI (-100 to 100): ', (ADI) => {
            if (ADI >= -100 && ADI <= 100) {
              waitForKeyPress().then(() => {
                sendInputsToAPI(ALT, HIS, ADI);
              });
            } else {
              console.log('Wrong ADI input');
            };
          });
        } else {
          console.log('Wrong HIS input');
        };
      });
    } else {
      console.log('Wrong ALT input');
    };
  });