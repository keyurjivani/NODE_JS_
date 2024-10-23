export const Users = {
    get:async()=>{
        let req=await fetch(`http://localhost:8090/`)
        let res=await req.json();
        console.log(res);
        return res;
    },

    post:async(data)=>{
        let req=await fetch(`http://localhost:8090/`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    patch:async (data,id)=>{
        let req=await fetch(`http://localhost:8090/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    delete:async (id)=>{
        let req=await fetch(`http://localhost:8090/${id}`,{
            method:"DELETE",
        })
    },
}