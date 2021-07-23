
import { createContext, useReducer } from "react";
import { TransactionReducer} from './ExpenseReducer';


interface transObject {
    amount:number,
    desc:string
}

interface initialState {
    transactions: transObject[];
    addTransaction: (amount: number, desc: string) => void;
    deleteTransaction: (actionId: number) => void;
  }
  
  // const initialTransactions: any = {};
  
  const initialTransactions: initialState = {
    transactions: [],
    addTransaction: () => {},
    deleteTransaction: () => {},
  };



export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}:{children:any})=>{
    let  [transactions, dispatch] = useReducer(TransactionReducer, initialTransactions.transactions)
    function addTransaction(amount:number, desc:string){
        dispatch({
            type: "add_transaction",
            payload:{
                amount:amount,
                desc:desc
            }
        })
    }
    function deleteTransaction(actionId:number){
        dispatch({
            type: "delete_transaction",
            payload:actionId
        })
    }

    return(
        <TransactionContext.Provider 
        value={{
            transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}