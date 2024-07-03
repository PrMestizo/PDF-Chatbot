async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    if (userInput.value.trim() === '') {
        return;
    }

    // Mostrar mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Enviar pregunta al servidor y obtener respuesta
    const response = await fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: userInput.value })
    });
    const data = await response.json();
    const botResponse = data.answer;

    // Mostrar mensaje del bot
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = botResponse;
    chatBox.appendChild(botMessage);

    // Limpiar entrada de texto
    userInput.value = '';
    
    // Desplazarse hacia abajo en el cuadro de chat
    chatBox.scrollTop = chatBox.scrollHeight;
}
