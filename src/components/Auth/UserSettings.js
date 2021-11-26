import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/context";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../css/components/Auth.css";

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
      axios.put(`/api/auth/update/${user.id}`, { email });
      toast.success("Email updated");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="user-settings">
      <button onClick={handleToggle}>Settings</button>
      {toggle ? (
        <form>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />
            <button onClick={() => handleEmailUpdate(email)}>
              Update Email
            </button>
          </div>
          <ToastContainer position="bottom-right" autoClose={2300} />
          {/* <button onClick={handleDelete}>Delete Account</button> */}
          <button
            onClick={() => {
              const confirmBox = window.confirm(
                "Do you really want to delete this account?"
              );
              if (confirmBox === true) {
                handleDelete();
              }
            }}
          >Delete</button>
        </form>
      ) : null}
    </div>
  );
};

export default UserSettings;
