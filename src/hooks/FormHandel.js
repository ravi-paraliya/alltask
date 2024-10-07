import React, { useState } from 'react';

function FormHandel() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        checkbox: false,
        radio: "",
        select: "",
        date: '',
        number: "",
        password: '',
        range: "",
        color: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
    }

    return (
        <div className='container col-md-4'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="nameInput" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="numberInput" className="form-label">Number</label>
                    <input type="number" className="form-control" id="numberInput" value={userData.number} onChange={(e) => setUserData({ ...userData, number: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectInput" className="form-label">Select</label>
                    <select className="form-control" id="selectInput" value={userData.select} onChange={(e) => setUserData({ ...userData, select: e.target.value })}>
                        <option value="">Choose</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="dateInput" className="form-label">Date</label>
                    <input type="date" className="form-control" id="dateInput" value={userData.date} onChange={(e) => setUserData({ ...userData, date: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordInput" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="colorInput" className="form-label">Color</label>
                    <input type="color" className="form-control" id="colorInput" value={userData.color} onChange={(e) => setUserData({ ...userData, color: e.target.value })} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkboxInput" checked={userData.checkbox} onChange={(e) => setUserData({ ...userData, checkbox: e.target.checked })} />
                    <label className="form-check-label" htmlFor="checkboxInput">Checkbox</label>
                </div>
                <h4>Radio</h4>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked={userData.radio === 'option1'} onChange={(e) => setUserData({ ...userData, radio: e.target.value })} />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked={userData.radio === 'option2'} onChange={(e) => setUserData({ ...userData, radio: e.target.value })} />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                </div>
                <div className="form-check d-flex align-items-center gap-2 ps-0">
                    <label className="form-check-label" htmlFor="rangeInput">Range</label>
                    <input type="range" id="rangeInput" value={userData.range} onChange={(e) => setUserData({ ...userData, range: e.target.value })} />
                </div>
                <button className='btn btn-primary my-2' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default FormHandel;
