const chatbox = document.getElementById('chatbox');
const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userInput = inputField.value;
    const userMessage = document.createElement('li');
    userMessage.classList.add('user');
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);
    inputField.value = '';
});
const chatbox = document.getElementById('chatbox');
const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userInput = inputField.value;
    const userMessage = document.createElement('li');
    userMessage.classList.add('user');
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);
    inputField.value = '';
});
