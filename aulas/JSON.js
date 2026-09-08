 const todos = [
     {
     id: 1,
     descricao: 'estudar js',
     status: false,
 },

 {
     id: 2,
     descricao:"comer",
     status: false
 },
 {
     id: 3,
     descricao:"correr",
     status: true
  },
 ];
 
 const todosJSON = JSON.stringify(todos);

 console.log(todosJSON)