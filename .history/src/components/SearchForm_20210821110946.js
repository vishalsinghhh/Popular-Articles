import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <section className="">
      <div className="days">
        <div className="day1" onClick={() => setSearchTerm(1)}>
          <p>1 Day</p>
        </div>
        <div className="day2" onClick={() => setSearchTerm(1)}>
          <p>7 Day</p>
        </div>
        <div className="day3" onClick={() => setSearchTerm(1)}>
          <p>30 Day</p>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
