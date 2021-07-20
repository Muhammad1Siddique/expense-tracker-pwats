import {createContext} from 'react'

    type transObject = {
        desc: String;
        amount:number;
    }
    const Transactions:transObject[]=[
        {desc:"Deposit", amount: 500},
        {desc:"Mango", amount:-200},
        {desc:"Lemon", amount: -80}
    ]


export const TransactionContext = createContext(Transactions);