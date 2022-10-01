import React from "react";
import location from "../../assests/images/location.png";
function ContactUs() {
  return (
    <React.Fragment>
      <div style={{ height: "520px", background: "#253344" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div></div>
          <h2>Contact Details</h2>

          <div>
            <h3>Phone number</h3>
            <div>+91 9928093686</div>
          </div>
          <div>
            <h3>Email</h3>
            <div>tradersbajrang@gmail.com</div>
          </div>
          <div>
            <h3>Address</h3>
            <div>D-28, Jaitpuri Ext. , Mahesh Nagar, Jaipur , India</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a href="https://goo.gl/maps/MVvc1L9cJGVrsa4Z7">
            <img
              style={{
                width: "603px",
                borderRadius: "4px",
                flexDirection: "column",
              }}
              src={location}
            />
          </a>
        </div>
      </div>
      {/* "https://goo.gl/maps/MVvc1L9cJGVrsa4Z7" */}
    </React.Fragment>
  );
}
export default ContactUs;
