import React, { useState } from 'react';
import './registration.css'; // Import your CSS styles here

function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    country: 'Select Country',
    city: 'Select City',
    schoolName: '',
    boardName: '',
    collegeName: '',
    course: 'Select Course',
    experience1: '',
    position1: '',
    experience2: '',
    position2: '',
    experience3: '',
    position3: '',
    userName: 'Peter Hawkins',
  });

  const steps = [
    {
      heading: 'Your Personal Information',
      content: 'Enter your personal information to get closer to companies.',
    },
    {
      heading: 'Education',
      content: 'Inform companies about your education life.',
    },
    {
      heading: 'Work Experiences',
      content: 'Can you talk about your past work experience?',
    },
    {
      heading: 'User Photo',
      content: 'Upload your profile picture and share yourself.',
    },
    {
      heading: 'Congratulations!',
      content:
        `Thanks Mr./Mrs. ${formData.userName} your information has been submitted successfully for future reference. We will contact you soon.`,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = () => {
    // Handle form submission here
    console.log('Form Data:', formData);
  };

  const handleHeartClick = () => {
    // Toggle heart icon
  };

  const handleShareClick = () => {
    // Toggle share icon
  };

  const validateForm = () => {
    let validate = true;
    const validateInputs = document.querySelectorAll(".main.active input[required]");
    validateInputs.forEach((validateInput) => {
      validateInput.classList.remove('warning');
      if (validateInput.value.length === 0) {
        validate = false;
        validateInput.classList.add('warning');
      }
    });
    return validate;
  };

  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <div className="left-heading">
              <h3>indeed</h3>
            </div>
            <div className="steps-content">
              <h3>
                Step <span className="step-number">{currentStep + 1}</span>
              </h3>
              {steps.map((step, index) => (
                <p
                  className={`step-number-content ${index === currentStep ? 'active' : 'd-none'}`}
                  key={index}
                >
                  {step.content}
                </p>
              ))}
            </div>
            <ul className="progress-bar">
              {steps.map((step, index) => (
                <li
                  className={index <= currentStep ? 'active' : ''}
                  key={index}
                >
                  {step.heading}
                </li>
              ))}
            </ul>
          </div>
          {/* Right-side content */}
          <div className={`right-side ${currentStep === 4 ? 'congrats' : ''}`}>
            <div className="main active">
              <small>
                <i className="fa fa-smile-o"></i>
              </small>
              <div className="text">
                <h2>{steps[currentStep].heading}</h2>
                <p>{steps[currentStep].content}</p>
              </div>
              {/* Form inputs */}
              {currentStep === 0 && (
                <div className="input-text">
                  <div className="input-div">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <span>First Name</span>
                  </div>
                  <div className="input-div">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                    <span>Last Name</span>
                  </div>
                </div>
              )}
              {/* Add more form input sections based on the current step */}
              {/* ... */}
              {/* Buttons */}
              <div className="buttons button_space">
                {currentStep > 0 && currentStep < 3 && (
                  <button className="back_button" onClick={handleBack}>
                    Back
                  </button>
                )}
                {currentStep < 3 && (
                  <button className="next_button" onClick={handleNext}>
                    Next Step
                  </button>
                )}
                {currentStep === 3 && (
                  <button className="submit_button" onClick={handleFormSubmit}>
                    Submit
                  </button>
                )}
              </div>
            </div>
            {/* Add more main content sections based on the current step */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
