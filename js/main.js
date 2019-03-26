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
}

// Cleaning up format for typewriter effect
function cleanFormat() {
	const botMessage = document.querySelector('.typewriter');
	botMessage.classList.remove("typewriter");
}

// create a function to respond to user messages with variable logic based upon inputs
function botResponse() {
	if (messageNumber === 0) {

		setTimeout(function(){ 
			fullChat.innerHTML += 
				`<div class="bot-message typewriter">
					<p>Hey, that's funny! ${currentValue} is my name, too! What city do you live in?</p>
				</div>`; 
		}, 500);
	
	} else if (messageNumber === 1) {

		cleanFormat();
		setTimeout(function(){ 
			fullChat.innerHTML += 
				`<div class="bot-message typewriter">
					<p>Weird, I live in ${currentValue} too. What part of town?</p>
				</div>`;
		}, 500);

	} else if (messageNumber === 2) {

		cleanFormat();
		setTimeout(function(){ 
			fullChat.innerHTML += 
				`<div class="bot-message typewriter">
					<p>Yup, that's my neighborhood. This is kind of making me nervous. You are real, right?</p>
				</div>`;
		}, 500);

	} else if (messageNumber === 3) {

		cleanFormat();
		setTimeout(function(){ 
			fullChat.innerHTML += 
				`<div class="bot-message typewriter">
					<p>Weird question, but have you felt like someone is watching you lately?</p>
				</div>`;
		}, 500);

	} else if (messageNumber === 4) {

		if (['yes', 'Yes', 'yup', 'Yup', 'Yeah', 'yeah'].indexOf(currentValue) >= 0) {
			cleanFormat();
			setTimeout(function(){ 
				fullChat.innerHTML += 
					`<div class="bot-message typewriter">
						<p>Me too!</p>
					</div>`;
			}, 500);
		}	else {
			cleanFormat();
			setTimeout(function(){ 
				fullChat.innerHTML += 
					`<div class="bot-message typewriter">
						<p>Must just be me.</p>
					</div>`;
			}, 500);
		}

	}

}

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message

// add code