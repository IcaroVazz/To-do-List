const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Função para verificar se é fim de semana
function isWeekend() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Domingo, 6 = Sábado
    return dayOfWeek === 0 || dayOfWeek === 6; // Retorna true se for fim de semana
}

// Função para adicionar tarefa
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please enter a task!");
    } else {
        // Verifica se é fim de semana
        if (isWeekend()) {
            alert("Tasks cannot be added on weekends.");
            return;
        }

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

// Função para remover as tarefas de sábado e domingo
function removeWeekendTasks() {
    const tasks = listContainer.querySelectorAll('li');
    tasks.forEach(task => {
        if (isWeekend()) {
            task.remove();
        }
    });
}

// Chama a função para remover tarefas no início do dia
removeWeekendTasks();
