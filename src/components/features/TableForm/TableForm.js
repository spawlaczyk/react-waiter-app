import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStatuses } from '../../../redux/statusRedux';

const TableForm = ({action, tableData}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const statuses = useSelector(getStatuses);
  const [tableStatus, setTableStatus] = useState(tableData.status || '');
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount || '');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount || '');
  const [bill, setBill] = useState(tableData.bill || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({id, tableStatus, peopleAmount, maxPeopleAmount, bill});
    navigate('/');
  }

  const handleStatusChange = tableStatus => {
    if(tableStatus === 'Busy' || 'Reserved'){
      setBill(0);
      setPeopleAmount(0);
      setMaxPeopleAmount(10);
      setTableStatus(tableStatus);
    } else if(tableStatus === 'Cleaning' || 'Free'){
      setPeopleAmount(0);
      setTableStatus(tableStatus);
    } else {
      setTableStatus(tableStatus);
    }
  }

  const handlePeopleAmountChange = n => {
    if(n >= 10){
      setPeopleAmount(10);
    } else if(n > maxPeopleAmount){
      setPeopleAmount(maxPeopleAmount);
    } else if(n <= 0){
      setPeopleAmount(0);
    } else {
      setPeopleAmount(n);
    }
  }

  const handleMaxPeopleAmount = n => {
    if(n >= 10){
      setMaxPeopleAmount(10);
    } else if(n <= 0){
      setMaxPeopleAmount(0);
    } else if(peopleAmount >= n){
      setPeopleAmount(n);
      setMaxPeopleAmount(n)
    } else {
      setMaxPeopleAmount(n);
    }
  }

  return (
    <>
      <Form className='py-4' onSubmit={handleSubmit}>
        <Form.Group className='d-flex pb-3'>
          <Form.Label className='me-4 my-auto'><b>Status: </b></Form.Label>
          <Form.Select style={{maxWidth: 200}} value={tableStatus} onChange={e => handleStatusChange(e.target.value)}>
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className='d-flex pb-3'>
          <Form.Label className='me-4 my-auto'><b>People: </b></Form.Label>
          <Form.Control style={{maxWidth: 50}} className='me-2' value={peopleAmount} onChange={e => handlePeopleAmountChange(e.target.value)}></Form.Control>
          <span className='my-auto'>/</span>
          <Form.Control style={{maxWidth: 50}} className='ms-2' value={maxPeopleAmount} onChange={e => handleMaxPeopleAmount(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className={tableStatus === 'Busy' ? 'd-flex pb-3' : 'd-none'}>
          <Form.Label className='me-5 my-auto'><b>Bill: </b></Form.Label>
          <span className='my-auto'>$</span>
          <Form.Control className='ms-2' style={{maxWidth: 50}} value={bill} onChange={e => setBill(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit'>Update</Button>
      </Form>
    </>
  )
}

export default TableForm;