const intialstate = {
    list:[]
}

const addreducer = (state=intialstate,actioin)=>{
    switch (actioin.type){
        case "ADDTODO" :
const {id,data}=actioin.payload;
return {
    ...state,
        data:[
            ...state.list,
        {
           id:id,
           data:data
        }
    ]
}

break;
default :
return state
    }

}

export default addreducer;