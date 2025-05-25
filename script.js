const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Função para adicionar tarefa
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please enter a task!");
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

// Adiciona tarefa com Enter
inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Marcar ou remover tarefa
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
});
