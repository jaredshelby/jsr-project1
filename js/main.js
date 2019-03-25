// add an event listener to the form to submit message
const chatInput = document.querySelector('#chatInput');
const fullChat = document.querySelector('#fullChat');

var currentValue = "";


// Listener for enter key from user
chatInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      e.preventDefault();
    	currentValue = chatInput.value;
    	console.log(`${currentValue} in function`);
    	chatInput.placeholder = ""
    	// return currentValue;
    	appendMessage(currentValue);
    }
});

console.log(currentValue);

// Adding user-entered chat to main div
function appendMessage(chatMessage) {
	fullChat.innerHTML += `<div><p>${currentValue}</p></div>`;
}


// create a function to respond to user messages with variable logic based upon inputs


// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message

// add code