type transObject = {
  amount: number;
  desc: string;
  transactions: any;
  addTransaction: (amount: number, desc: string) => {};
  deleteTransaction: (actionId: number) => {};
};
  
  export const TransactionReducer = ((state:any, action:any) => {

    switch(action.type){
        case "add_transaction":{
            return [action.payload, ...state];
        }
        case "delete_transaction":{
          let value = state[action.payload];
          return state.filter((item:any) => item !== value)
        }
        default:
            return state;
    }  
      
    })