Hello,
This project simulates Pilot's dashboard which gets 3 parameters
from the plane: ALT, HIS and ADI. (In this project gets them as user
inputs through the console).
The parameters are shown through visuals and text.

ALT (between 0 and 3000) is shown as a meter with checkpoints which go from 0 to 3000.

HIS (between 0 and 360) is shown as a circle which turns according to the degree input
while a static arrow is indicating the number.

Lastly, ADI (between 100 and -100) is shown as a circle which is split into 2 colors,
green and blue, while more green indicates the stat is closer to -100 and more blue
indicates being closer to 100.
if the stat hits 100, the circle turns full blue, and the oposite for green.

------------------------------------------------------------------------------------------

The programs are written using Node.JS and React.JS
Node.JS is our backend where we get the user inputs through command line and send data
over to the API (localhost:5000/api).
React.JS is our frontend where we use the backend data to create visuals on our
webpage (localhost:3000).


Some things I didn't have enough time to complete:
-Text and Visual buttons which were supposed to show text only or visual only.
-"Press any key" to execute the order to send data to the API.