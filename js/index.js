fetch('https://api.escuelajs.co/api/v1/users')
  .then(Response => Response.json())
  .then(data =>{
    let tabla = `<tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Contraseña</th>
                    <th>Avatar</th>
                </tr>`

    for(let user of data){
     tabla +=   `<tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.avatar}</td>
                </tr>`
    }  
 
    document.getElementById("tblUsers").innerHTML = tabla
  })