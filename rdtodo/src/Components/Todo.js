import React from "react";
import "./Todo.css";
import { useState } from "react";
import { additem } from "./Actions";
import { useDispatch, useSelector } from "react-redux";

export const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const dispatch = useDispatch();
  console.log(inputdata);

  const getdata = () => {
    dispatch(additem(inputdata));
    setinputdata("");
  };

  const {list} = useSelector((state)=>state.addreducer);

  console.log(list,'list')
  
  return (
    <div>
      <div className="main_div">
        <div className="child_div">
          <div className="child_img">
            <image src=""></image>
          </div>

          <div className="todo_title">
            <h3>ADD Items Hear............</h3>
          </div>

          <div className="add_items">
            <input
              type="text"
              placeholder="Add Items Hear..."
              value={inputdata}
              onChange={(e) => setinputdata(e.target.value)}
            ></input>
            <i class="fa-solid fa-plus" onClick={getdata}></i>
          </div>


{


}
          <div className="show_items">
            <div className="each_item">
              <h3></h3>
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
          <div className="remove">
            <button>Remove List</button>
          </div>

        </div>
      </div>
    </div>
  );
};
