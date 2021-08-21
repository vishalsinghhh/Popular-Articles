import React, {useState} from "react";
import { useGlobalContext } from "../context";
import "./Components.css";

const SearchForm = () => {
  const {searchTerm, setSearchTerm } = useGlobalContext();
  const [state, setstate] = useState(0)
  return (
    <section className="">
      <div className="days">
        <div
          onClick={() => setSearchTerm(1)}
          className={`day1 ${1 === searchTerm && "active-btn"}`}
        >
          <p>1 Day</p>
        </div>
        <div className="day2" onClick={() => setSearchTerm(7)}>
          <p>7 Day</p>
        </div>
        <div className="day3" onClick={() => setSearchTerm(30)}>
          <p>30 Day</p>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
