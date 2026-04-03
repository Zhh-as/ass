function toggleChat() {
    const chat = document.getElementById('chatWindow');
    chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
}

function askQuestion(questionText, answerText) {
    const messagesContainer = document.getElementById('chatMessages');
    
    // 1. Добавляем вопрос пользователя
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = questionText;
    messagesContainer.appendChild(userDiv);
    
    // Скроллим вниз
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 2. Имитируем задержку ответа "бота"
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot';
        botDiv.textContent = answerText;
        messagesContainer.appendChild(botDiv);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 600);
}