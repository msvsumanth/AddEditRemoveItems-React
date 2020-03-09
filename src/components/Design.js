import React from "react";
import Todo from "./Todo";
import { FaBook, FaRegTrashAlt } from "react-icons/fa";

export default function Design() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="leftSide col-2 m-0 p-0">
            <div className="d-flex justify-content-center mt-5 ">
              <img
                src="https://i.ya-webdesign.com/images/profile-image-png-14.png"
                alt="Cinque Terre"
                width="70"
                height="70"
              />
            </div>
            <h5 className="d-flex justify-content-center font-weight-bold mt-3 ">
              John Erick
            </h5>
            <ul className="list-group mt-4">
              <li className="d-flex justify-content-center list-group-item font-weight-bold">
                <FaBook className="mr-2 mt-1" />
                Notes
              </li>
              <div className="border "></div>
              <li className=" d-flex justify-content-center list-group-item font-weight-bold">
                <FaRegTrashAlt className="mr-2 mt-1" />
                Trash
              </li>
              <div className="border "></div>
            </ul>
          </div>

          <div className="rightSide col-10">
            <div className="container mt-5  d-flex justify-content-center">
              <span className="borderRound text-justify"  style={{fontSize :"1.5vw"}}>
                <span className=" d-flex justify-content-center">
                  <h1 style={{fontSize :"2vw"}}>TODO APP</h1>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate blanditiis fuga voluptatum facilis eius, dolorum
                aperiam, eaque iure, quam distinctio possimus voluptatibus.
                Autem incidunt nihil iste officia modi, aut magnam blanditiis
                fuga voluptatum!
              </span>
            </div>

            <Todo />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
