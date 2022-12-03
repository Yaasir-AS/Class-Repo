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

    //GET Request
    const res = await fetch('/.netlify/functions/todos')
    console.log(res)

    const data = await res.json()
    console.log(data)
    //document.querySelector('#tagline').textContent = data.path
}

getToDos()