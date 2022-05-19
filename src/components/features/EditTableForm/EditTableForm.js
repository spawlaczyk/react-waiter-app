import TableForm from "../../features/TableForm/TableForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editTableRequest } from "../../../redux/tablesRedux";

const EditTableForm = ({tableData}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = tableData => {
    dispatch(editTableRequest(tableData));
    navigate('/');
  }

  return (
    <TableForm tableData={tableData} action={handleSubmit}/>
  )
}

export default EditTableForm;