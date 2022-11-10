import React from "react";
import location from "../../assests/images/address.png";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
function ContactUs() {
  return (
    <React.Fragment>
      <div style={{ height: "400px", background: "#253344" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: "40px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", color: "white"}}
          >
            <div style={{ color: "#ACB0B5",marginBottom:"40px" , fontSize:"48px", fontWeight:"700"}}>Contact Details</div>

            <div style={{marginBottom:"20px" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <PhoneOutlined style={{ color: "#FFCF2A", paddingRight:"10px" }} />
                <h3>Phone number</h3>
              </div>

              <div>+91-9928093684</div>
            </div>
            <div style={{marginBottom:"20px" }}>
              <div style={{ display: "flex", flexDirection: "row"}}>
                <EmailOutlinedIcon style={{ color: "#FFCF2A" ,paddingRight:"10px"}} />
                <h3>Email</h3>
              </div>
              <div>tradersbajrang@gmail.com</div>
            </div>
            <div style={{marginBottom:"20px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                <BusinessOutlinedIcon style={{ color: "#FFCF2A",paddingRight:"10px" }} />
                <h3>Address</h3>
              </div>
              <div>D-28, Jaitpuri Ext. , Mahesh Nagar, Jaipur , India</div>
            </div>
          </div>

          <div style={{ justifyContent: "flex-end" }}>
            <a href="https://goo.gl/maps/4cBVzyNgsSzfsA6R6">
              <img
                style={{
                  width: "500px",
                  borderRadius: "4px",
                  flexDirection: "column",
                }}
                src={location}
              />
            </a>
          </div>
        </div>
      </div>
      {/* "https://goo.gl/maps/MVvc1L9cJGVrsa4Z7" */}
    </React.Fragment>
  );
}
export default ContactUs;
