# PilotDashboard
✈️ Pilot Dashboard project

Hello, this is a project which simulates a pilot dashboard.
The project includes a backend and frontend sides separated to server and client directories.


The server file is written using node.js, asks the user for 3 inputs: ALT, HIS and ADI, after the 
user added the desired values, if the values were right according to the statements (Numerical,
ALT being between 0 and 3000, HIS being between 0 and 360, ADI being between -100 and 100),
the GUI asks the user to press any key, after pressing any key, the application proceeds to upload 
the inputs to the API, which is located in localhost:5000/api.


Then the client side comes in, the site shows "Loading" if the API was unreachable (server offline)
and if the site reached the API, it shows the 3 values as visuals: 

ALT being the left indicator,going from 0 to 3000 according to the user input, the red line indicates 
the value.

HIS being the middle indicator, represented as a spinning wheel with an arrow in the middle, the 
wheel rotates according to the user input, the arrow stays static pointing up.

ADI being the right indicator, a circle which has 2 colors, blue and green, the closer the value is 
to 100, the more blue the indicator will show, and the closer the value is to -100, the more green 
the indicator will show.

The 2 buttons on the left side of the screen cycle between Text and Visual indication with the 
default being Visual (Whenever you load the site up, you will see visual indicators).
When pressed on "Text", the visual indicators will be replaced with the values as text with the name
Same goes for "Visual" button, whenever pressed while seeing the values as text, replaces the text
with the visual indicators.


The project was written in ReactJS and NodeJS with the next modules being in use for NodeJS:
-Nodemon
-Express
-Readline

To create a file which runs the server with just a click:

1.Create a text file with this text inside:
@echo off
cmd /k "cd -X-\PilotDashboard\server && node server.js"

Replace the -X- with your own path to the main folder of the project, as an example: 
"cd C:\PilotDashboard\server && node server.js"

2.Press "Save as".

3.Select "All files" in "Save as type:" at the bottom.

4.Save as X.bat, with X being any name that you want for this file to be.
