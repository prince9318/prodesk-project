import React, { Fragment } from "react";
import "./what.css";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";

function WhatWeDo() {

  return (
    <Fragment>
      <div className='what-us'>
        <div className='what-heading'>
          <h1>What We Do</h1>
        </div>

        <div>
          <h2 className="nav-build">
            <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Builds Industrial Projects
          </h2>

          <h2 className="nav-build" >
            <AiOutlineHome style={{ marginBottom: "2px" }} /> Interior Builds
          </h2>

          <h2 className="nav-build">
            <AiOutlineContacts style={{ marginBottom: "2px" }} /> Construction
          </h2>
        </div>
      </div>
    </Fragment>
  );
}

export default WhatWeDo;
