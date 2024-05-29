const localStorageKey = 'to-do-list-gn';

document.getElementById('btn-new-task').addEventListener('click', newTask);

function newTask() {
    let input = document.getElementById('input-new-task');

    // Validação
    if (!input.value) {
        alert('Digite algo para inserir em sua lista');
    } else {
        // Incrementar nos arquivos
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values));

       
        input.value = '';

        
        showValues();
    }
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for (let i = 0; i < values.length; i++) {
        let li = document.createElement('li');
        li.textContent = values[i]['name'];

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
        </svg>`;
        deleteButton.setAttribute('data-index', i);
        deleteButton.addEventListener('click', deleteTask);

        li.appendChild(deleteButton);
        list.appendChild(li);
    }
}

function deleteTask(event) {
    let index = event.target.closest('button').getAttribute('data-index');
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
}


showValues();
