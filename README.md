# physics_bot
Repository for full documentation of the twitch chatbot physics_bot (twitch.tv/physics_bot for more info, README for details about what's contained here)
//
//
// Bot's channel: www.twitch.tv/physics_bot
//
//
// Info document: https://docs.google.com/document/d/1FzHYh8quqQYVad-XT_XulUq7H0gZRgOpaC15gfSg6co/edit?usp=sharing
//
//
the main document in this repository, prompts_and_responses.js, is a javascript file that contains all of the prompts and responses that the bot uses to respond and talk in chat (excepting what is contained in the Info Document). Reading this document is a bit tricky without some way to systematically parse the data. An example microcosm is given below:


EXAMPLE OF WHAT YOU'LL SEE IN prompts_and_responses.js
----------------------------------------------------------------------------------------------------

var prompts_and_responses = {
  
    'bow shock' : ['\"Bow shock\" in astrophysics is the boundary geometry of a body\'s magnetosphere interacting with an ambient plasma such as the solar wind.', '\“Bow shock\” is so-called because of the vaguely bow-shaped pattern of plasma deflecting off of a rounded magnetospheric shell of charged particles.', 'All the planets in the solar system exhibit bow shock, even Mercury and Venus, which have very weak (almost nonexistent) magnetic fields.', 'Bow shock can be seen on comets nearing the Sun as the solar wind hits the comet\'s vaporizing \"atmosphere\" (called the comet\'s \"coma\"). Not only is bow shock ubiquitous on comets close enough to the Sun, bow shock defines their atmospheres; without sunlight and solar wind vaporizing layers of ice on the comet\'s surface, comets generally have negligible atmospheres.'],
    .
    .
    .
    .

-----------------------------------------------------------------------------------------------------
The line "var prompts_and_responses = {" is just the declaration of the variable containing all this information. What's important is what's after the squiggly bracket on that line (the { ) and what's before the closing } near the bottom of the file. 

Following the { is the first prompt in the file, 'bow shock' - this is a phrase that the bot will respond to.

After the prompt is a colon, and then there is a lot of text surrounded by square brackets. This text is organized as follows: a series of phrases surrounded by single quotes, with commas seperating all of them. For example, the first one is:  

'\"Bow shock\" in astrophysics is the boundary geometry of a body\'s magnetosphere interacting with an ambient plasma such as the solar wind.' 

and then a comma. This represents one of the possible responses the bot will have when it chooses to respond to the keyword prompt 'bow shock.' An important thing to note is that whenever you see something that looks like \" (or \') inside of the single quotes, read that as just being " (or ') - for example, the example above (the first 'bow shock' response) will be entered into a chat as:

----------------------------------------------------------------------------------------------------
"Bow shock" in astrophysics is the boundary geometry of a body's magnetosphere interacting with an ambient plasma such as the solar wind.
----------------------------------------------------------------------------------------------------

without the single quotes and backslashes. 

Any prompts that have two forward slashes, //, is currently inactive - in Javascript, the double slashes means a line is "commented out", that that line is to be ignored by the Javascript compiler and the bot. 


At the end of the prompt and response list will be the closing squiggly and a semicolon, followed by the last line of the file:

----------------------------------------------------------------------------------------------------
  .
  .
  .
  };
module.exports = {prompts_and_responses}; 
----------------------------------------------------------------------------------------------------


This line merely indicates that the entire object, the thing called prompts_and_responses up at the top of the file, is up for grabs for other Javascript files to read and use. 
