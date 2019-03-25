// add an event listener to the form to submit message
const chatInput = document.querySelector('#chatInput');
const fullChat = document.querySelector('#fullChat');

var currentValue = "";
var userName = "";


// Listener for enter key from user
chatInput.addEventListener("keydown", function (e) {
	if (chatInput.classList.contains("new-chat")) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      e.preventDefault();
    	userName = chatInput.value;
    	currentValue = chatInput.value;
    	//console.log(`${userName} in function`);
    	chatInput.classList.remove("new-chat");
    	appendMessage(currentValue);
    	introduction(userName);
    	chatInput.placeholder = "";
    	chatInput.value = "";
    }
	} else {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      e.preventDefault();
    	currentValue = chatInput.value;
    	//console.log(`${currentValue} in function`);
    	appendMessage(currentValue);
    	botResponse(currentValue);
    	chatInput.value = "";
   }
  }
});

// Adding user-entered chat to main div

function appendMessage(chatMessage) {
	fullChat.innerHTML += `<div class="user-message"><p>${currentValue}</p></div>`;
}


// create a function to respond to user messages with variable logic based upon inputs
function introduction(name) {
	setTimeout(function(){ fullChat.innerHTML += `<div class="bot-message"><p>Hey! ${name} is my name, too! What city do you live in?</p></div>`; }, 2000);
}

function botResponse() {
	setTimeout(function(){ fullChat.innerHTML += `<div class="bot-message"><p>Weird, I live in ${currentValue} too.</p></div>`; }, 2000);
}

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message

// add code