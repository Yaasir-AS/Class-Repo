/* 
     Return a list of all the to do items

      {
        statusCode:200,
              {name:"to do list"}
        body: JSON.stringify(data)
        body: {"name":"to do list"}
      }

*/

export async function handler(event, context){

    return {
         statusCode:200,
         body: JSON.stringify({path:"/db/todos"})
    }
}