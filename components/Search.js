import { React } from "react";
import "../styles/Search.css";
import logo from "./../assets/title.png";

let Search = ({ term, setTerm, filter, setFilter }) => {
  window.onload = () => {
    return setFilter("characters");
  };
  return (
    <>
      <a href="#">
        <img src={logo} className="logo" alt="Logo Name" />
        
      </a>
      
      

      <div className="row d-flex justify-content-center">
        <div className="col-md-6 text-dark">
          <div className="card">
            <div className="input-box">
              <input
                type="search"
                className="form-control"
                placeholder="Input Term"
                onChange={(event) => setTerm(event.target.value)}
              />
              <i className="cancer"> &#128269;</i>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="characters"
              onClick={() => setFilter("monsters")}
            />
            <label className="clark" htmlFor="inlineRadio1">
              Monsters
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="monsters"
              onClick={() => setFilter("characters")}
            />
            <label className="clark" htmlFor="inlineRadio2">
              Characters
            </label>
          </div>
        </div>
      </div>
    
    </>
  );
};

export { Search };
