function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();

  if (message === "") return;

  addMessage("You", message, "user-message");
  input.value = "";

  // Simulated bot reply
  setTimeout(() => {
    addMessage("Bot", "Thanks for your message!", "bot-message");
  }, 1000);
}

function addMessage(sender, text, className) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message", className);
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
