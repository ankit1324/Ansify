import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://www.shutterstock.com/image-illustration/
          3d-cartoon-hand-holding-smartphone-600w-2005755494.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>THe best Mobile App Develpment Company</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
