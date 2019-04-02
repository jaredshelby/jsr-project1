# E CORP Chatbot!

My chatbot was inspired by the television show Mr. Robot and ideas from movies like Fight Club. I'm attempting to make a chatbot that appears to be the same person as whomever is chatting with it. I do this by getting some information from the user and then saying the same is true of the chatbot. 

Additionally, I have a moderator bot that intercedes at certain moments when the topic of conversation gets too sensitive, either in the chat or as a browser alert. 

I use the class list in an array to help identify the user's last name after they provide their first name. Additionally, I later loop through this array to combine first and last names to create a list of users "banned" by E Corp.

In a couple instances i use indexOf in an if statement to test for positive or negative reactions from the user, and alter the chatbot response depending on what the user says.

I used a few other ideas to try to make the presentation slicker, including using JavaScript to scroll to the bottom of the chat window as chats are added, and using a CSS trick to make the bot's messages appear to be typed out a character at a time. I also went with an intentionally bland, corporate look for the chat interface.

* KNOWN LIMITATIONS - My chat interactions are very reliant on yes or no questions and leading the user to provide very specific information I'm looking for. To flesh this out I would like to see the chat interactions be more robust and natural seeming.

Also, I am very reliant on a linear chat and used setTimeout throughout to keep responses flowing in the order I needed them to. Were I starting over from scratch, I would probably try to imagine a less linear way to set up the chat to make the responses more interesting and resiliant. It was a very good learning experience for the difficulties of trying to write JavaScript that will run in the order and at the time I want it to, though.

Additionally, there are definite limitations to the CSS layout of the page - for instance, chatbot responses must be limited to one line, or the typewriter effect of the responses breaks. I wasn't able to come up with a solution to this without taking needed time away from the JavaScript work for the project.

One main lesson that I learned from this project is that if I am starting to build anything in JavaScript with any sort of complexity, I need to sit down and think through (probably using pseudocode) everything I want the JavaScript to do and how I want to structure everything. With this project I excitedly jumped right in and started writing code and found by the end that not only had I needed to rewrite much of everything, but I still wasn't totally happy with my organization.