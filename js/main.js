// add an event listener to the form to submit message
const chatInput = document.querySelector('#chatInput');
const fullChat = document.querySelector('#fullChat');

let currentValue = ""; // Variable to store the current user input
let messageNumber = 0; // Message counter, used in botResponse if statements



// Listener for enter key from user 
chatInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter" - found the basics for this code by Googling
    e.preventDefault();
  	currentValue = chatInput.value;
  	appendMessage(currentValue);
  	botResponse(currentValue);
  	chatInput.placeholder = ">>";
  	chatInput.value = "";
  	messageNumber++;
  }
});

// Adding user-entered chat to main div
function appendMessage(chatMessage) {
	fullChat.innerHTML += `<div class="user-message"><p>${currentValue}</p></div>`;
	fullChat.scrollTop = fullChat.scrollHeight;
}

// Cleaning up format for typewriter effect
function cleanFormat() {
	const botMessage = document.querySelector('.typewriter');
	botMessage.classList.remove("typewriter");
}

// Responder function to set timer and add response
function responder(botResponse, time = 500) {
	setTimeout(function() { 
  		fullChat.innerHTML += botResponse;
		fullChat.scrollTop = fullChat.scrollHeight;
  	}, time);
}

// create a function to respond to user messages with variable logic based upon inputs
function botResponse() {
	if (messageNumber === 0) {

		responder(`<div class="bot-message typewriter"><p>Hey, that's funny! ${currentValue} is my name, too! What city do you live in?</p></div>`);
	
	} else if (messageNumber === 1) {

		cleanFormat();
		responder(`<div class="bot-message typewriter"><p>Even weirder, I live in ${currentValue} too. What part of town?</p></div>`);


	} else if (messageNumber === 2) {

		cleanFormat();
		responder(`<div class="bot-message typewriter"><p>Yup, that's my neighborhood. This is kind of making me nervous. You are real, right?</p></div>`);

	} else if (messageNumber === 3) {

		cleanFormat();
		responder(`<div class="bot-message typewriter"><p>Weird question, but have you felt like someone is watching you lately?</p></div>`);

	} else if (messageNumber === 4) {

		if (['yes', 'Yes', 'yup', 'Yup', 'Yeah', 'yeah', 'yea', 'Yea', 'uh huh', 'Uh huh'].indexOf(currentValue) >= 0) {

			cleanFormat();
			responder(`<div class="bot-message typewriter"><p>Me too! I've been getting terrible headaches and thought I might be going crazy.</p></div>`);
			setTimeout(function() { 
  				cleanFormat();
  			}, 4000);
			responder(`<div class="mod-message"><p>Hi, this is an eCorp moderator! This appears to be an unauthorized use of this program.</p></div>`, 4000);

		} else {

			cleanFormat();
			responder(`<div class="bot-message typewriter"><p>Must just be me. I wonder if it's related to these headaches I've been getting.</p></div>`);
			setTimeout(function() { 
  				cleanFormat();
  			}, 4000);
			responder(`<div class="mod-message"><p>Hi, this is an eCorp moderator! This appears to be an unauthorized use of this program.</p></div>`, 4000);

		}

	}

}

// Reformat everything to be in smaller reusable functions with an array of responses?
// function botResponse();
// Write code to test if username is in list of class members, say others have been arrested or something. Have moderator talking to chat bot?

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message

// add code