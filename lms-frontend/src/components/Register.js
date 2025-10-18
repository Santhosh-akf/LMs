import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Student' // Default role
    });

    const { name, email, password, role } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        // For now, we'll just log the data.
        // Later, we'll send this to our backend API.
        console.log('Registering user:', formData);
    };

    return (
        <div className="form-container">
            <h2>Create Your Account</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label>Register as</label>
                    <select name="role" value={role} onChange={onChange}>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                    </select>
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
    );
};

export default Register;