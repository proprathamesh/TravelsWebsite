import React, {useState} from "react";
import "./form.css";
import emailjs from 'emailjs-com'

export default function Form() {
  const [info, setInfo] = useState({
    name:'',
    phone:'',
    email:'',
    start:'',
    end:'',
    date:'',
  })

  const notify = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]:value});
  }
  
  const submited = (e) => {
    e.preventDefault();
    // console.log(`${info.name}, ${info.phone}, ${info.start}, ${info.end}, ${info.date} `)
    emailjs.sendForm('service_pduwgii', 'template_3rkbpyb', e.target, 'QRkwCKru9WWl3n8yB');
    emailjs.sendForm('service_pduwgii', 'template_vji07ij', e.target, 'QRkwCKru9WWl3n8yB');
  }
  return (
    <div>
      <div className="form">
        <div>
          <div className="text">Book Your First Ride Now</div>
          <div className="line">
            Book a cab from wide range of cars available. Book for one way,
            round trip. Rent a car @ lowest prices. Best & well maintained cars.
          </div>
        </div>
        <div className="details">
          <div className="details2">
            <form action="" onSubmit={submited}>
              <h3 style={{ textAlign: "center" }}>Rent A Car</h3>
              <div className="input-group mb-3 margin">
                <label
                  htmlFor="name"
                  className="input-group-text"
                  id="basic-addon1"
                >
                  Name
                </label>
                <input
                  name="name"
                  value={info.Name}
                  autoComplete = "off"
                  onChange={notify}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 margin">
                <label
                  htmlFor="phone"
                  className="input-group-text"
                  id="basic-addon1"
                >
                  Phone No.
                </label>
                <input
                  name="phone"
                  value={info.phone}
                  autoComplete = "off"
                  onChange={notify}
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 margin">
                <label
                  htmlFor="email"
                  className="input-group-text"
                  id="basic-addon1"
                >
                E-Mail
                </label>
                <input
                  name="email"
                  value={info.email}
                  autoComplete = "off"
                  onChange={notify}
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 margin">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Select ride type
                </label>
                <select className="form-select" id="inputGroupSelect01">
                  <option select>Choose...</option>
                  <option value="1">one way</option>
                  <option value="2">round trip</option>
                </select>
              </div>
              <div className="input-group mb-3 margin">
                <label
                  htmlFor="start"
                  className="input-group-text"
                  id="basic-addon1"
                >
                  Pickup point
                </label>
                <input
                  type="text"
                  value={info.start}
                  autoComplete = "off"
                  onChange={notify}
                  name="start"
                  id="start"
                  className="form-control"
                  placeholder="Enter your location"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 margin">
                <label
                  htmlFor="end"
                  className="input-group-text"
                  id="basic-addon1"
                >
                  Destination
                </label>
                <input
                  type="text"
                  value={info.end}
                  autoComplete = "off"
                  onChange={notify}
                  name="end"
                  id="end"
                  className="form-control"
                  placeholder="Enter destination location"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3 margin">
                <label
                  htmlFor="day"
                  className="input-group-text"
                  id="basic-addon1"
                >
                  Date
                </label>
                <input
                  type="date"
                  value={info.d}
                  autoComplete = "off"
                  onChange={notify}
                  name="day"
                  id="day"
                  className="form-control"
                  placeholder="dd-mm-yy"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="d-grid gap-2 margin">
                <button className="btn btn-dark" type="submit" >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
