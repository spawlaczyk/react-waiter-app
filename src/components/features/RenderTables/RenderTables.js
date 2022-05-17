import { Button, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const RenderTables = () => {
  const [tables, setTables] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => {
        setTables(tables)
        setIsPending(false)
      })
  }, []);

  return (
    <>
      {isPending && 
      <div className='d-flex flex-column align-items-center py-3'>
        <Spinner animation='border' variant='primary'></Spinner>
        <p className='pt-2' style={{fontSize: 20}}>Loading...</p>
      </div>
      }
      {tables && <section>
        {tables.map((table) => (
          <div key={table.id} className='d-flex align-items-center border-bottom py-4'>
            <b><h3 className='m-0'>Table {table.id}</h3></b>
            <p className='m-0 mx-4'><b>Status: </b>{table.status}</p>
            <Button className='ms-auto' size='md' as={NavLink} to={'/table/' + table.id}>Show more</Button>
          </div>
        ))}
      </section>}
    </>
  )
}

export default RenderTables;