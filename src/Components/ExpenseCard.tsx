import React from 'react'
import './ExpenseStyle.css'
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseCard = () => {
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
            <h4 className="">History</h4>
        </div>
    )
}
export default ExpenseCard;