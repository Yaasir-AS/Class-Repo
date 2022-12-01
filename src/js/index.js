/* 
      Make a connection between client ---- server (Netlify cloud function)
      fetch(url)

      PATH TO ALL OF YOUR FUNCTIONS 
      Docs for any service tell how access the function cloud function
      from the client(web browser) (firebase iOS/Android/Web/Unity) 
      /.netlify/functions/fn(name)
      /.netlify/functions/todos  path  route   function
*/

async function getToDos(){
    const url = '/.netlify/functions/todos'
    const res = await fetch(url)
    const data = await res.json
    document.querySelector('#tagline').textContent = data.path
}

getToDos()