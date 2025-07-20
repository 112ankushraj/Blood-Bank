import React from "react";
import Header from "../../components/shared/Layout/Header";
import { useState } from "react";
import { useEffect } from "react";
import API from "./../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData,setInventoryData] = useState([])
  const colors = [
    "#BB3E00",
    "#F7AD45",
    "#657C6A",
    "#27548A",
    "#626F47",
    "#FE7743",
    "#F564A9",
    "#FBF3C1",
  ];
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // life cycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);


  
  // get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn}</b> (ML)
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut}</b> (ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availabeBlood}</b> (ML)
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transaction</h1>
        
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Blood Group</th>
                          <th scope="col">Inventory Type</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Donar Email</th>
                          <th scope="col">Time & Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inventoryData?.map((record) => (
                          <tr key={record._id}>
                            <td>{record.bloodGroup}</td>
                            <td>{record.inventoryType}</td>
                            <td>{record.quantity} (ML)</td>
                            <td>{record.email}</td>
                            <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
      </div>
    </>
  );
};

export default Analytics;
