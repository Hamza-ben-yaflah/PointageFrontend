import React from "react";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TrackingShop from "../../components/trackingShop/TrackingShop";
import "./singleShop.scss";
const SingleShop = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/images/shop.jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Bardo</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. Tunis
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Tunis</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="User Spending ( Last 7 days)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TrackingShop />
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
