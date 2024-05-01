import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import {useState} from "react";
import React from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const customStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
        age: null
    });

    const handleSubmit = () => {
        if (name!=="" && email!=="" && phone.length!==10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }

        let selectedDate = new Date(dob);
        let currentDate = new Date();
        if (selectedDate > currentDate) {
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return;
        }
        // alert(`Username: ${name}\nEmail: ${email}\nPhone: ${phone}\nDOB: ${dob}`);
        setIsOpen(false);
        // setName("");
        // setEmail("");
        // setPhone("");
        // setDob("");
    }
    return (
        <div className="App">
            <h1>User Details Modal</h1>
            <button onClick={() => setIsOpen(true)}>Open Form</button>
            {isOpen && (
                <div
                className="modal"
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="modal-content">
                    <h2>Fill Details</h2>
                    <form style={{display: "flex", flexDirection: "column", margin: "20px 80px", padding: "15px"}}>
                        <label>Username:</label>
                        <input id="username" type="text" value={name} onChange={(e) => setName(e.target.value)}
                               required/>
                        <label>Email Address:</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                               required/>
                        <label>Phone Number:</label>
                        <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                               required/>
                        <label>Date of Birth:</label>
                        <input id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} required/>
                        <button className="submit-button" style={{
                            width: "fit-content",
                            textAlign: "center",
                            margin: "auto",
                            marginTop: "10px"
                        }} onClick={handleSubmit} >Submit
                        </button>
                    </form>
                </div>
            </div>)
            }
        </div>
    );
}

export default App;
