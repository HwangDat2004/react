import "./App.scss";
import { useState } from "react";

function App  ()  {
  // const [color, setColor] = useState("red");
  // const [status, setStatus] = useState(true);

  // const changeColor = () => {
  //   setColor(prevColor => (prevColor === "red" ? "blue" : "red"));
  // };

  // const changeStatus = () => {
  //   setStatus(prevStatus => !prevStatus);
  // };

  const [Cv, setCv] = useState([]); // danh sach cac cong viec
  const [newCv, setNewCv] = useState(""); // o trong input
  const [editId, setEditId] = useState(null); // id cua cong viec dang chinh sua
  const [editText, setEditText] = useState(""); // noi dung cua cong viec dang chinh sua

  const addCv = () => {
    if (newCv !== "") {
      setCv(prevCv => [...prevCv, newCv]);
      // ...: dấu 3 chấm là nhận được tất cả các phần tử trong mảng
      setNewCv("");
    }
  };

  const deleteCv = (id) => {
    setCv(prevCv => prevCv.filter((_cv, index) => index !== id));
  };

  const editCv = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const updateCv = () => {
    setCv(prevCv => prevCv.map((cv, index) => (index === editId ? editText : cv)));
    setEditId(null);
    setEditText("");
  };


  return (
    <div className="container">
      <div className="row justify-content-center col-4">
      <h1>CV</h1>
      <input type="text" className="form-control " value={newCv} onChange={e => setNewCv(e.target.value)}/>
      <button onClick={addCv} className="btn btn-checkout btn-primary">Add</button>
      <ul className="list-group">
        {Cv.map((cv, index) => (
          <li key={index} className="list-group-item " >

              <span>{cv}</span>

              <button className="btn btn-checkout btn-primary" onClick={() => deleteCv(index)}>Delete</button>
              <button className="btn btn-checkout btn-danger" onClick={() => editCv(index, cv)}>Edit</button>

          </li>
        ))}
      </ul>
      <button onClick={updateCv}>Update</button>
      </div>
    </div>
  );
}

export default App;

