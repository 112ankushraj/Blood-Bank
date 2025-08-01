import moment from 'moment';
import React, { useEffect, useState } from 'react'
import API from '../services/API';
import { useSelector } from 'react-redux';
import Layout from '../components/shared/Layout/Layout';

const Donation = () => {
 const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  // Fetch inventory records
  const getDonars = async () => {
    try {
      const response = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donar: user?._id,
        },
      });
      if (response?.data?.success) {
        setData(response?.data?.inventory); // fixed typo here
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity}</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Donation