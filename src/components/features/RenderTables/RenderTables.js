import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { NavLink } from "react-router-dom";

const RenderTables = () => {
  const tables = useSelector(getAllTables);
  console.log(tables);

  return (
    <>
      <section>
        {tables.map(table => (
          <div key={table.id} className='d-flex align-items-center border-bottom py-4'>
            <b><h3 className='m-0'>Table {table.id}</h3></b>
            <p className='m-0 mx-4'><b>Status: </b>{table.status}</p>
            <Button className='ms-auto' size='md' as={NavLink} to={'/table/' + table.id}>Show more</Button>
          </div>
        ))}
      </section>
    </>
  )
}

export default RenderTables;