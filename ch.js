// JavaScript code for advanced chatbot functionality
const inputField = document.getElementById("input-field");
const chatMessages = document.getElementById("chat-messages");

// Function to send a message
function sendMessage(message, isUser) {
    // Create a new message container
    const messageContainer = document.createElement("div");
    messageContainer.classList.add(isUser ? "user-message" : "chatbot-message");

    // Create an avatar
    const avatar = document.createElement("img");
    avatar.src = isUser ? "user-avatar.png" : "chatbot-avatar.png";
    avatar.classList.add("avatar");
    messageContainer.appendChild(avatar);

    // Create a message text element
    const messageText = document.createElement("p");
    messageText.classList.add("message-text");
    messageText.textContent = message;
    messageContainer.appendChild(messageText);

    // Add the message container to the chat
    chatMessages.appendChild(messageContainer);

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for form submission
document.getElementById("input-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const message = inputField.value.trim();

    if (message !== "") {
        // Send user message
        sendMessage(message, true);

        // Process and send chatbot response
        processUserMessage(message);
    }

    // Clear the input field
    inputField.value = "";
});

// Function to process user message and generate chatbot response
function processUserMessage(userMessage) {
    // Implement your chatbot logic here
    let response;

    if (userMessage.toLowerCase() === "hi") {
        response = "Hi!";
    } else if (userMessage.toLowerCase() === "how are you?") {
        response = "I'm doing well, thank you for asking!";
    } else if (userMessage.toLowerCase() === "what is your name?") {
        response = "My name is Chatbot!";
    } else if (userMessage.toLowerCase() === "what time is it?") {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        response = `It is currently ${hours}:${minutes}.`;
    } else if (userMessage.toLowerCase() === "what day is it?") {
        const date = new Date();
        const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
        response = `Today is ${date.toLocaleDateString("en-US", options)}.`;
    } else {
        response = "I'm sorry, I don't understand.";
    }

    // Send chatbot response
    setTimeout(() => sendMessage(response, false), 1000); // Simulate bot typing delay
}

// Initial greeting from the chatbot
setTimeout(() => sendMessage("Hello! How can I assist you today?", false), 1000);
