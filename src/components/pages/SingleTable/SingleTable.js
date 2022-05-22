import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleTableForm from "../../features/SingleTableForm/SingleTableForm";
import { API_URL } from "../../../config";

const SingleTable = () => {
  const { id } = useParams();
  //console.log(id);
  const [tableData , setTableData] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/tables/${id}`)
      .then(res => res.json())
      .then(tableData => {
        setTableData(tableData);
      })
  }, []);

  return (
    <section className='py-4'>
      <h1>Table {tableData.id}</h1>
      <SingleTableForm {...tableData} />
    </section>
  )
}

export default SingleTable;