import { categoryTemplates } from "./templates/categories";

// init app, load data, loop data, create the To-Dos and send them to the DOM

async function appInit(){
    const res = await fetch('.netlify/functions/todos')
    const todos = await res.json()
    const containerElement = document.createElement('div')
    let markup = ``
    todos.forEach(todo =>{
        const template = categoryTemplates[todo.category](todo)
        markup += template
    })
    containerElement.innerHTML = markup
    document.querySelector('main').append(containerElement)
}

appInit()