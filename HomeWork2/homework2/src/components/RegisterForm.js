import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    retypePassword: "",
    agreement: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const usernameRegex = /^[A-Za-z0-9]{4,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernameRegex.test(formData.username)) {
      errors.username =
        "Username must be at least 4 characters and only contain letters and numbers.";
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.gender) {
      errors.gender = "Please select a gender.";
    }

    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    if (formData.retypePassword !== formData.password) {
      errors.retypePassword = "Passwords do not match.";
    }

    if (!formData.agreement) {
      errors.agreement = "You must agree to the terms.";
    }

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isFormValid) {
      // Handle form submission
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          User name:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            onBlur={validateForm}
          />
        </label>
        {formErrors.username && (
          <p style={{ color: `red` }}>{formErrors.username}</p>
        )}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateForm}
          />
        </label>
        {formErrors.email && <p style={{ color: `red` }}>{formErrors.email}</p>}
      </div>

      <div>
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            onBlur={validateForm}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        {formErrors.gender && (
          <p style={{ color: `red` }}>{formErrors.gender}</p>
        )}
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={validateForm}
          />
        </label>
        {formErrors.password && (
          <p style={{ color: `red` }}>{formErrors.password}</p>
        )}
      </div>

      <div>
        <label>
          Retype Password:
          <input
            type="password"
            name="retypePassword"
            value={formData.retypePassword}
            onChange={handleInputChange}
            onBlur={validateForm}
          />
        </label>
        {formErrors.retypePassword && (
          <p style={{ color: `red` }}>{formErrors.retypePassword}</p>
        )}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleInputChange}
            onBlur={validateForm}
          />
          I have read the agreement
        </label>
        {formErrors.agreement && (
          <p style={{ color: `red` }}>{formErrors.agreement}</p>
        )}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
