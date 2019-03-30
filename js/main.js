// add an event listener to the form to submit message
const chatInput = document.querySelector('#chatInput');
const fullChat = document.querySelector('#fullChat');
const classList = ['Courtney', 'Hoskins', 'Ted', 'Williams', 'Jared', 'Shelby', 'Kate', 'Granat', 'Mike', 'Guzman', 'Bill', 'Maass', 'Sara', 'Attarzadeh'];

let currentValue = ''; // Variable to store the current user input
let messageNumber = 0; // Message counter, used in botResponse if statements
let userName = '';


// Listener for enter key from user 
chatInput.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {  //checks whether the pressed key is "Enter" - found the basics for this code by Googling
    e.preventDefault();
  	currentValue = chatInput.value;
  	appendMessage(currentValue);
  	botResponder(currentValue);
  	chatInput.placeholder = '>>';
  	chatInput.value = '';
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
	botMessage.classList.remove('typewriter');
}

// Responder function to set timer and add response
function responder(botResponse, time = 500) {
	setTimeout(function() { 
  		fullChat.innerHTML += `<div class="bot-message typewriter"><p>${botResponse}</p></div>`;
		fullChat.scrollTop = fullChat.scrollHeight;
  	}, time);
}

// Mod Responder function to set timer and add response, different markup
function modResponder(botResponse, time = 500) {
	setTimeout(function() { 
		cleanFormat();
  	fullChat.innerHTML += `<div class="mod-message"><p>${botResponse}</p></div>`;
		fullChat.scrollTop = fullChat.scrollHeight;
  }, time);
}
// Mod Alert function to set timer and add response
function modAlert(botResponse, time = 500) {
	setTimeout(function() {
  		alert(botResponse);
  		clearChat();
  	}, time);
}

// Clear chat screen function
function clearChat(){
	// fullChat.classList.add('clear-chat');
	setTimeout(function() { 
		fullChat.innerHTML = '';
	}, 1000);
}

// Various response functions

function nameMatch(currentValue) {
	userName = currentValue;
	responder(`Hey, that's funny! ${userName} is my name, too! What city do you live in?`);
}

function cityMatch(currentValue) {
	cleanFormat();
	responder(`Even weirder, I live in ${currentValue} too. What part of town?`);
}

function neighborhoodMatch() {
	cleanFormat();
	responder(`Yup, that's my neighborhood. This is kind of making me nervous. You are real, right?`);
}

function watchingQuestion() {
	cleanFormat();
	responder(`I'm mostly kidding. Weird question, but have you felt like someone is watching you lately?`);
}

function watchingResponse(currentValue) {
	currentValue = currentValue.toLowerCase();
	if (['yes', 'yup', 'yeah', 'yea', 'uh huh'].indexOf(currentValue) >= 0) {
		cleanFormat();
		responder(`Me too! I've been getting terrible headaches and thought I might be going crazy.`);
		modResponder(`Hi, this is an eCorp moderator! This appears to be an unauthorized use of this program. Your messages are now being monitored.`, 3500);
		responder(`I guess they didn't like what we were talking about.`, 5000);
	} else {
		cleanFormat();
		responder(`Must just be me. I wonder if it's related to these headaches I've been getting.`);
		modResponder(`Hi, this is an eCorp moderator! This appears to be an unauthorized use of this program. Your messages are now being monitored.`, 3500);
		responder(`I guess they didn't like what we were talking about. You still there?`, 5000);
	}
}

function restartChat() {
	responder(`I guess they didn't like what we were talking about.`);
}

// Switch function to determine response

function botResponder() {
  switch(messageNumber) {
    case 0:
      nameMatch(currentValue);
      break;
    case 1:
      cityMatch(currentValue);
      break;
    case 2:
      neighborhoodMatch();
      break;
    case 3:
    	watchingQuestion();
    	break;
    case 4:
			watchingResponse(currentValue);
			break;
		// case 5:
		// 	restartChat();
		// 	break;
    default:
      console.log('fallthrough');
  } 
}

// Reformat everything to be in smaller reusable functions with an array of responses?
// function botResponse();
// Write code to test if username is in list of class members, say others have been arrested or something. Have moderator talking to chat bot?
