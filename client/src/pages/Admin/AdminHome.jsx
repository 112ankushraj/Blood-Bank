import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin{" "}
            <i
              className="
        text-success "
            >
              {user?.name}
            </i>
          </h1>
          <h3>Manage Blood Bank APP</h3>
          <hr />
          <p>
            Effective management of a blood bank app requires a systematic
            approach to ensure real-time updates, donor engagement, and hospital
            coordination. Begin with a user-friendly interface that allows
            donors to register, track eligibility, and receive reminders for
            future donations. Ensure that all user data is securely stored and
            compliant with healthcare regulations like HIPAA or local
            equivalents. A robust backend is essential for real-time inventory
            tracking, including blood type availability, expiration dates, and
            stock levels at various locations. Integrate GPS services to help
            users find nearby blood banks or donation camps. Hospitals and
            clinics should have access to request or reserve blood, view stock
            levels, and receive updates on availability. Automated alerts should
            notify staff of low inventory levels or urgent requests. Incorporate
            AI for predictive analytics to forecast demand based on historical
            data and seasonal trends. For engagement, send regular updates,
            success stories, and urgent donation appeals. Add reward systems or
            recognition features to encourage repeat donations. Include
            multilingual support and 24/7 customer assistance for better user
            accessibility. Finally, monitor app performance and user feedback
            regularly to fix bugs and improve features. A well-managed blood
            bank app can save lives through efficient communication, timely
            data, and a community-focused design.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
