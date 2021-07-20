import React, {useContext} from 'react'
import './ExpenseStyle.css'
import { Card, Row, Col, Alert, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransactionContext } from './ExpenseContext';

type transObject = {
    desc: String;
    amount:number;
}

const ExpenseCard = () => {
    const Transactions = useContext(TransactionContext)
    return (
        // Balance Card Main Function
        <div className="Balance-Card shadow-sm rounded mt-4 p-3">
            <h1 className="text-center p-4"><strong>Expense Tracker</strong></h1>
            <h4>Your Balance</h4>
            <h3><strong>$120</strong></h3>
            <Card>
                <Card.Body>
                <Row>
                    <Col>
                        <h4 className="text-center">Income</h4>
                        <h4 className="text-center text-success"><strong>$210</strong></h4>
                    </Col>
                    <Col>
                        <h4 className="text-center">Expense</h4>
                        <h4 className="text-center text-danger"><strong>-$90</strong></h4>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
            <h4 className="History mt-4">History</h4>
            {
                Transactions.map((transObj:transObject, index:number)=>{
                    let chec;
                    let sign;
                    if(Number(transObj.amount)>0){
                         chec = true;
                         sign = "+";
                    }else{
                         chec = false;
                         sign = "-";
                    }
                    return(
                        <Alert key={index} variant={`${chec ? 'success': 'danger'}`}>
                            <button className={`delete-btn ${chec ? 'delete-success': 'delete-danger'}`} >X</button>
                            <p className="History-record"><span>{transObj.desc}</span><span>{sign}${Math.abs(transObj.amount) }</span></p>
                        </Alert>
                    )
                })
            }

            <h4 className="History mt-4">Add New Transactions</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" placeholder="Amount" />
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