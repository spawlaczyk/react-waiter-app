import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";


const TableForm = () => {
  const { id } = useParams();
  const tableData = useSelector(state => getTableById(state, id));

  return (
    <div>Table</div>
  )
}

export default TableForm;