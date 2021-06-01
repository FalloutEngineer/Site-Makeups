const list = document.getElementsByClassName('tasks')[0]

const rEmpty = new RegExp(`/^(?!\s*$).+/`);

const header = document.getElementsByTagName('header')[0]
const formCreateTask = document.getElementsByClassName('createTask')[0]

class Task{
    constructor(title, text){
        this.title = title
        this.text = text
    }
}

class TaskForm{
    constructor(title, text, button){
        this.title = title
        this.text = text
        this.button = button

        this.button.addEventListener('click', function(){createTask(title.value, text.value)} ,false)
    }
}

function createTaskHTML(Task){
    let itemBody = document.createElement('li');
    let wrapper = document.createElement('div');
    let tasksItem = document.createElement('div');
    let tasksItemContent = document.createElement('div');
    let tasksItemContentTitle = document.createElement('h3');
    let tasksItemContentText = document.createElement('p');
    let tasksItemDone = document.createElement('button');

    itemBody.classList.add('task');
    wrapper.classList.add('wrapper');
    tasksItem.classList.add('tasks__item');
    tasksItemContent.classList.add('tasks__item__content');
    tasksItemContentTitle.classList.add('tasks__item__content__title');
    tasksItemContentText.classList.add('tasks__item__content__text');
    tasksItemDone.classList.add('tasks__item__done');

    tasksItemContentTitle.appendChild(document.createTextNode(Task.title));
    tasksItemContentText.appendChild(document.createTextNode(Task.text));

    tasksItemDone.addEventListener("click", removeTask, false);

    tasksItemContent.appendChild(tasksItemContentTitle);
    tasksItemContent.appendChild(tasksItemContentText);
    tasksItem.appendChild(tasksItemContent);
    tasksItem.appendChild(tasksItemDone);

    wrapper.appendChild(tasksItem);
    itemBody.appendChild(wrapper);

    return itemBody;
}

function addTaskToPage(taskHTML){
    list.appendChild(taskHTML)
}

function removeTask(){
    this.parentNode.parentNode.parentNode.remove()
}

function createTask(title, text){
    if(title.trim() == "" || text.trim() == ""){
        taskIsNotValid(form)
    }else{
        let t = new Task(title, text);
        addTaskToPage(createTaskHTML(t))
        clearInputs(form)
    }
}

function clearInputs(form){
    form.title.value = ""
    form.text.value = ""
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! добавить тряску кнопки
function taskIsNotValid(form){
    form.button.addEventListener('animationend', () => {
        form.button.classList.remove('shake')
    })

    if(form.title.value.trim() == ""){
        form.title.classList.add('required')

        form.title.addEventListener('focusin', () => {
            form.title.classList.remove('required')
        })
    }
    if(form.text.value.trim() == ""){
        form.text.classList.add('required')

        form.text.addEventListener('focusin', () => {
            form.text.classList.remove('required')
        })
    }

    form.button.classList.add('shake')
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let form = new TaskForm(document.getElementById('taskTitle'), document.getElementById('taskBody'), document.getElementById('taskButton'))
