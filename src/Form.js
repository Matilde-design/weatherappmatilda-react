import React from "react";
import "./form.css";

export default function Form() {
  return (
    <form id="search-form" className="mb-4">
      <div className="row">
       
        <div className="col-9">
          <input
            type="search"
            placeholder="Search City"
            className="form-control"
            id="city-input"
            autoComplete="off"
          />
        </div>
        <div className="col-1">
          <span className="search-icon">
            <svg
              className="bi bi-search"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </span>
        </div>
        <div className="col-2">
          <button type="button" id="current-location">
            <svg
              className="bi bi-cursor-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
              />
            </svg>
            <span className="tooltiptext">Search current location</span>
          </button>
        </div>
      </div>
    </form>
  );
}
