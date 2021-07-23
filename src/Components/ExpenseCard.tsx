import React, {useState, useContext} from 'react'
import './ExpenseStyle.css'
import { Card, Row, Col, Alert, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransactionContext } from './ExpenseContext';

type transObject = {
    desc: String;
    amount:number;
}

const ExpenseCard = () => {
    
    let {transactions, addTransaction, deleteTransaction} = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    const handleAddition = (event:any)=>{
        event.preventDefault();
        if(Number(newAmount)===0){
            window.alert("Zero is not allow");
            return false;
        }
        console.log(Number(newAmount));
        console.log(newDesc);
        addTransaction( Number(newAmount), newDesc)
        
        setDesc("");
        setAmount(0);
        
    }
    const grossIncome =() => {
        let income:number = 0;
        for (let i:number = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
            {
                income += transactions[i].amount;
            }
        }
        return income;
    }
    const totalExpense =() =>{
        let expense:number = 0; 
        for(let j:number = 0; j< transactions.length; j++ ){
            if(transactions[j].amount < 0)
            {
                expense += transactions[j].amount;
            }
        }
        return expense;
    }
    return (
        // Balance Card Main Function
        <div className="Balance-Card shadow-sm rounded mt-4 p-3">
            <h1 className="text-center p-4"><strong>Expense Tracker</strong></h1>
            <h4>Your Balance</h4>
            <h3><strong>${grossIncome() + totalExpense()}</strong></h3>
            <Card>
                <Card.Body>
                <Row>
                    <Col>
                        <h4 className="text-center">Income</h4>
                        <h4 className="text-center text-success"><strong>${grossIncome()}</strong></h4>
                    </Col>
                    <Col>
                        <h4 className="text-center">Expense</h4>
                        <h4 className="text-center text-danger"><strong>-${Math.abs(totalExpense())}</strong></h4>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
            <h4 className="History mt-4">History</h4>
            {
                transactions.map((transObj:transObject, index:number)=>{
                    let chec:boolean;
                    let sign:String;
                    if(Number(transObj.amount)>0){
                         chec = true;
                         sign = "+";
                    }else{
                         chec = false;
                         sign = "-";
                    }
                    return(
                        <Alert key={index} variant={`${chec ? 'success': 'danger'}`}>
                            <button onClick={()=>{deleteTransaction(index)}} className={`delete-btn ${chec ? 'delete-success': 'delete-danger'}`} >X</button>
                            <p className="History-record"><span>{transObj.desc}</span><span>{sign}${Math.abs(transObj.amount) }</span></p>
                        </Alert>
                    )
                })
            }

            <h4 className="History mt-4">Add New Transactions</h4>
            <Form  onSubmit={handleAddition}>
                <Form.Group className="mb-3" controlId="formBasicDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={newDesc} onChange={(ev)=>setDesc(ev.target.value)} placeholder="Description" />    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" value={newAmount} onChange={(ev)=>setAmount(Number(ev.target.value))} placeholder="Amount" />
                    <Form.Text className="text-muted">
                    negative for expense, positive for income
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Add Transaction
                </Button>
                </Form>
        </div>
    )
}
export default ExpenseCard;