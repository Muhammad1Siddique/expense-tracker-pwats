import {createContext} from 'react'

    type transObject = {
        desc: String;
        amount:number;
    }
    const Transactions:transObject[]=[
        {desc:"Deposit", amount: 210},
        {desc:"Coke", amount:-90}
    ]


export const TransactionContext = createContext(Transactions);