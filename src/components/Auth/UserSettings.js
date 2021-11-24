import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/context";
import { useHistory } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import '../../css/components/Auth.css'

const UserSettings = () => {
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(UserContext);
  let history = useHistory();

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleDelete = () => {
    try {
      axios.delete(`api/auth/destroy/${user.id}`)
      history.push("/auth")
      toast.success("Account Deleted")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="user-settings">
      <button onClick={handleToggle}>Settings</button>
    {toggle ? 
        <div>
          <button onClick={handleDelete}>Delete Account</button>
          <ToastContainer position="bottom-right" autoClose={2300} />
        </div> : null
      }
    </div>
  )
}

export default UserSettings;
