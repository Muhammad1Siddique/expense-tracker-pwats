type transObject = {
    amount: number,
    desc: string
  }
  
export const TransactionReducer = ((state:transObject[], action:any) => {

    switch(action.type){
        case "add_transaction":{
            return [action.payload, ...state];
        }
        case "delete_transaction":{
          let value = state[action.payload];
          return state.filter((item) => item !== value)
        }
        default:
            return state;
    }  
      
    })