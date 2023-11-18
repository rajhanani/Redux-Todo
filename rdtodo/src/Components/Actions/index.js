export const additem =(data)=>{
    return {
        type:"ADDTODO",
        payload:{
            id : new Date().getTime().toString(),
            data:data
        }
       
    }
}

export const removeitem =()=>{
    return {
        type:"ADDTODO",
        
    }
}

export const deleteitem =()=>{
    return {
       
        
    }
}
