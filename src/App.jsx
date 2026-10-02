import { useEffect, useState } from "react";

function App() {

  const API = "http://localhost:3000/employees";
  const [A_Data, setA_Data] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [pageperdata, setPageperdata] = useState(15);
  let totelpage = Math.ceil(A_Data.length / pageperdata);
  let lastIndex = currentpage * pageperdata;
  let FirstIndex = lastIndex - pageperdata;
  let currentpageData = A_Data.slice(FirstIndex, lastIndex);

  useEffect(() => {
    fetch(API, {
      method: "GET",
      header: {
        "content-type": "application/json"
      }
    }).then((response) => {
      response.json().then((data) => {
        setA_Data(data);

      })
    })
  }, [])


  return (
    <>
      <div>
        <h2 className="text-center mb-3">Data of Employee</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>EMPLOYEE ID</th>
                <th>Name</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>DEPARTMENT</th>
                <th>POSITION</th>
                <th>SALARY</th>
                <th>CITY</th>
                <th>AGE</th>
              </tr>
            </thead>

            <tbody>
              {
                currentpageData.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td>{element.department}</td>
                      <td>{element.position}</td>
                      <td>₹{element.salary}</td>
                      <td>{element.city}</td>
                      <td>{element.age}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mt-3">
        <div className="d-flex justify-content-between align-items-center border rounded p-3 bg-light">
          <div className="d-flex align-items-center gap-2">
            <span>Pages per data</span>
            <select className="form-select w-auto" onChange={(e) => {
              setPageperdata(e.target.value);
            }}>
              <option>15</option>
              <option>30</option>
              <option>45</option>
              <option>60</option>
              <option>75</option>
              <option>100</option>

            </select>
          </div>

          <div>
            <span className="fw-semibold">Page {currentpage} of (totalpages {totelpage})</span>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary" onClick={() => { setCurrentpage(currentpage - 1) }} disabled={currentpage == 1}>
              Previous
            </button>
            <button className="btn btn-outline-primary" onClick={() => { setCurrentpage(currentpage + 1) }} disabled={currentpage == totelpage}>
              Next
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App