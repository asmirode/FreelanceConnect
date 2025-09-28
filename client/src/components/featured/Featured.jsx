import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <form className="search" onSubmit={handleSubmit}>
            <div className="searchInput">
              <img src="/img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="right">
          <img src="/img/mman.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
