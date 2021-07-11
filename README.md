# physics_bot

Repository for full documentation of the twitch chatbot physics_bot (see twitch.tv/physics_bot for more info)

Bot's channel: [www.twitch.tv/physics_bot]

Info document: [https://docs.google.com/document/d/1FzHYh8quqQYVad-XT_XulUq7H0gZRgOpaC15gfSg6co/edit?usp=sharing]

The main document in this repository, `factoids.js`, is a JavaScript file that contains all of the factoids and prompts that the bot uses to respond and talk in chat (excepting what is contained in the Info Document). There are basically two kinds of things contained in the document:

The first type of thing are the __prompts__: words and combinations of letters that, if read by the bot, have a chance of initiating a response. Many prompts are contained in the arrays in the beginning of the document (all the lines beginning with `const`): these are collections of prompts that all relate to the same topic, things like `star_tags` and `atom_tags`. 

The second thing is an object called `factoids`, declared as a `var` (so the line goes `var factoids = {...`). Each line after this is one factoid and the corresponding prompts, formatted like this: `factoid : prompts`. The list of words after the colon are all the prompts that can cause the bot to send that factoid to the chat. Note that many of the prompt collections defined in the first section are referenced here. The `.concat()` you see often here (and above in the `const` parts) just sticks two strings of text next to each other. For example, if the string `string1` is `"hi, "`, the phrase `string1.concat("have a nice day")` is equivalent to `"hi, have a nice day"`
