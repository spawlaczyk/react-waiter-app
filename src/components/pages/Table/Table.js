import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { Spinner } from "react-bootstrap";
import EditTableForm from "../../features/EditTableForm/EditTableForm";

const Table = () => {
  const { id } = useParams();
  const tableData = useSelector(state => getTableById(state, id));

  if(!tableData) return (
    <div className='d-flex flex-column align-items-center py-3'>
      <Spinner animation='border' variant='primary'></Spinner>
      <p className='pt-2' style={{fontSize: 20}}>Loading...</p>
    </div>
  )
  return (
    <section className='py-4'>
      <h1>Table {tableData.id}</h1>
      <EditTableForm tableData={tableData} />
    </section>
  )
}

export default Table;