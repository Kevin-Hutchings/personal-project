import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/context";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../css/components/Settings.css";

const UserSettings = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(UserContext);
  let history = useHistory();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDelete = () => {
    try {
      axios.delete(`/api/auth/destroy/${user.id}`);
      setUser({});
      history.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const updateEmail = (val) => {
    setEmail(val);
  };

  const handleEmailUpdate = (email) => {
    try {
      if(email !== "") {
        axios.put(`/api/auth/update/${user.id}`, { email });
        toast.success("Email updated");
        setEmail("");
      } else toast.error("Please enter a valid email address.")
    } catch (err) {
      console.log(err);
    }
  };

  const removeEmail = () => {
    try {
      axios.put(`/api/auth/remove/${user.id}`);
      toast.success("Email removed from database!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings-container">
      <button onClick={handleToggle}>Settings</button>
      {toggle ? (
        <div className="user-settings">
          <div className="input-container">
            <input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />
            <div className="email-buttons">
              <button onClick={() => handleEmailUpdate(email)}>
                Update
              </button>
              <button onClick={() => {
              const confirmBox = window.confirm(
                "Select OK if you want to remove your email address from the database."
              );
              if (confirmBox) {
                removeEmail();
              }
            }}>Delete</button>
            </div>
          </div>
          <ToastContainer position="bottom-right" autoClose={2300} />
          <div className="delete-account">
          <button
            onClick={() => {
              const confirmBox = window.confirm(
                "This will permanently delete your account, as well as any associated reviews and watchlist items. Are you sure?"
              );
              if (confirmBox) {
                handleDelete();
              }
            }}
          >
            Delete Account
          </button>

          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserSettings;
