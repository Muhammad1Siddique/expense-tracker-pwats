
import { createContext, useReducer } from "react";
import {TransactionReducer} from './ExpenseReducer';


type transObject = {
    amount:number,
    desc:string
}


const initialTransactions:transObject[] = [] 
// const initialTransactions:transObject[] = [
//     {amount: 300, desc: "deposit"},
//     {amount: -140, desc: "chicken meet"},
//     {amount: -60, desc: "vegitable"}

// ]

  

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}:{children:any})=>{
    let  [state, dispatch] = useReducer(TransactionReducer, initialTransactions)
    console.log(state);
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
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}