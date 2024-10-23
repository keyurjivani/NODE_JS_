import { Users } from "./Api.js";


const Data = (e) => {
    e.preventDefault();

    let user_data = {
         username : document.getElementById("username").value,
         email :  document.getElementById("email").value,
         password : document.getElementById("password").value,
    }
    console.log(user_data);

    Users.post();
}






let get_user = await Users.get()


const mapper = (data) =>{
    data.map((item)=>{
        let username = document.createElement("p");
        username.innerText = `Username: ${item.username}`;

        let email = document.createElement("p");
        email.innerText = `Email: ${item.email}`;

        let div = document.createElement("div");
        div.append(username, email);

        document.getElementById("display").append(div)

    })
}
mapper(get_user)


document.getElementById("datas").addEventListener("submit", Data)