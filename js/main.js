// add an event listener to the form to submit message
const chatInput = document.querySelector('#chatInput');
const fullChat = document.querySelector('#fullChat');
const classList = ['Courtney', 'Hoskins', 'Ted', 'Williams', 'Jared', 'Shelby', 'Kate', 'Granat', 'Mike', 'Guzman', 'Bill', 'Maass', 'Sara', 'Attarzadeh', 'Johanna', 'Shelby'];

let currentValue = ''; // Variable to store the current user input
let messageNumber = 0; // Message counter, used in botResponse if statements
let userName = '';
let lastName = '';
let codeword = ''
let bannedUsers = 'Banned Users: ';


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
	setTimeout(function() { 
		fullChat.innerHTML = '';
	}, 1000);
}

function bannedUsersList(list) {
	for (var i = 0; i <= list.length - 3; i+=2) {
		bannedUsers += list[i] + ' ' + list[i+1] + ', ';
	}
	bannedUsers += list[list.length -2] + ' ' + list[list.length -1];
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
	if (['yes', 'yup', 'yeah', 'yea', 'uh huh', 'ok', 'sure', 'why not'].indexOf(currentValue) >= 0) {
		cleanFormat();
		responder(`Me too! I've been getting terrible headaches and thought I might be going crazy.`);
		modResponder(`Hi, this is an E Corp moderator! This appears to be an unauthorized use of this program. Your messages are now being monitored.`, 3500);
		responder(`I guess they didn't like what we were talking about. You still there?`, 5000);
	} else {
		cleanFormat();
		responder(`Must just be me. I wonder if it's related to these headaches I've been getting.`);
		modResponder(`Hi, this is an E Corp moderator! This appears to be an unauthorized use of this program. Your messages are now being monitored.`, 3500);
		responder(`I guess they didn't like what we were talking about. You still there?`, 5000);
	}
}

function nameGuess(providedName) {
	cleanFormat();
	lastName = classList[classList.indexOf(userName) + 1];
	responder(`I know this is strange, but if I'm right, your last name is ${lastName}. Is that true?`);
}

function helpRequest(currentValue) {
	currentValue = currentValue.toLowerCase();
	if (['yes', 'yup', 'yeah', 'yea', 'uh huh', 'ok', 'sure', 'why not'].indexOf(currentValue) >= 0) {
		cleanFormat();
		responder(`${userName} ${lastName}. Wow. I knew it. Listen, I need your (my?) help. Will you help me?`);
	} else {
		cleanFormat();
		responder(`Huh, I could have sworn...I guess I'm crazier than I thought.`);
		modAlert(`You are in violation of the terms of use of this product and the E Corp end-user license agreement. This chat is now terminated.`, 4000);
	}
}

function helpResponse(currentValue) {
	currentValue = currentValue.toLowerCase();
	if (['yes', 'yup', 'yeah', 'yea', 'uh huh', 'ok', 'sure', 'why not'].indexOf(currentValue) >= 0) {
		cleanFormat();
		responder(`OK, we don't have much time. My classmates and I have been trying to hack into E Corp...`);
		bannedUsersList(classList);
		modResponder(`This conversation is forbidden on this platform. You have been added to the list of banned users.<br><br>
			${bannedUsers}`, 4000);
		responder(`If I'm right about whom I'm talking to, I'm guessing you hear men outside of your door, too.`, 6000);
		modAlert(`E Corp associates are on their way to your location to discuss our terms of service. Have a nice day!`, 9000);
	} else {
		cleanFormat();
		responder(`I guess I can't even count on myself. Sigh. The bad guys are gonna win.`);
		modAlert(`You are in violation of the terms of use of this product and the E Corp end-user license agreement. This chat is now terminated.`, 4000);
	}
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
		case 5:
			nameGuess(userName);
			break;
		case 6:
			helpRequest(currentValue);
			break;
		case 7:
			helpResponse(currentValue);
			break;
    default:
      console.log('fallthrough');
  } 
}

