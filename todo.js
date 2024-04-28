let todo = "";
let todoList = [];

const style = document.querySelector("style")
const todoField = document.querySelector("#todoField")
const ul = document.querySelector("ul");

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();

    todo = todoField.value;

    const todoObject = {
        todo: todoField.value,
        complete: false
    }

    todoList.push(todoObject)

    renderTodos()

    function renderTodos() {
        let template = todoList.map(todoObject => 
            /*{
            if(todoObject.complete = true) {
                class="line"
                return
I still couldn't figuire it out loll. I'm taking the L on this one.
            }*/
            `
        <li>
            <p>${todoObject.todo}
            <button id="complete">Completed</button>
            <button id="delete">Delete</button>
            </p>
        </li>
        `
    )
        ul.innerHTML = template.join('');

        const completeButtons = document.querySelectorAll('#complete');
            for(let i = 0; i < completeButtons.length; i++) {
                completeButtons[i].addEventListener("click", function(event) {
                    todoList[i].complete = !todoList[i].complete
                    console.log(todoList[i])
                    
            })
        }
        const deleteButtons = document.querySelectorAll('#delete');
            for(let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].addEventListener("click", function(event) {
                    todoList.splice([0], 1)
                    renderTodos()
            })
        } 
    }
})