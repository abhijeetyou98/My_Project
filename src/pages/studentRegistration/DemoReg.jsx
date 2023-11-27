
import * as React from 'react';
import {useEffect , useState} from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import {  Container, Form }  from 'react-bootstrap';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { print_city, print_state } from "../../cities.js";
import Checkbox from '@mui/material/Checkbox';

import {registerUser} from  "../../services/user.service.js"
import axios from 'axios';


const steps = [
    {
      label: 'Personal Information',
      description: 'Provide your personal details.'
    },
    {
      label: 'Academics Information',
      description: 'Enter your academic details.'
    },
    {
      label: 'Payment Method',
      description: 'Choose a payment method.'
    },
    {
      label: 'Invoice Bill',
      description: 'Review and confirm your invoice.'
    },
  ];


const DemoReg = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [states, setStates] = useState([]); // Define a state for storing the list of states
    const [cities, setCities] = useState([]); // Define a state for storing the list of cities

    const [data ,setData] = useState({
        students_Name: '',
        students_number: '',
        students_emailId: '',
        parentsName: '',
        parents_number: '',
        parents_emailId: '',
        grade: '',
        password: '',
        board: '',
        countrty:'',
        state: '', // Set the selected state
        city: '',   // Set the selected city

    })

    

    const [errorData, setErrorData] = useState({
        isError: false,
        errorData: null
      })

      const [loading, setLoading] = useState(false)

      const [activeStep, setActiveStep] = React.useState(0);

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };   

      const handleFinish = () => {
        // Log the form data to the console
        console.log('data:',data);
    
        // You can also submit the data to a server here if needed
      };


      
      const submitForm=(event)=>{
        event.preventDefault();
        console.log(data)
    
    
    
      }

    //   methods of personalInfo
     const [getCountry, setCountry]= useState([]);

    const [checked, setChecked] = React.useState(true);

    const handleChange=(event, property)=>{
        console.log(event)
        console.log(property)
        
        setData({
         ...data, [event.target.name]: event.target.value});
        if (event.target.id==="citySelected"){
            const newCity = event.target.value;
            setSelectedCity(newCity);
        }
     };


     const onSubmit =(e)=>{
        setData({
          ...data, [e.target.name]: e.target.value})



 
// //  when validation is ok 
//     //call api
//     setLoading(true)
//     registerUser(data)
//         .then(userData => {
//             //success handler
//             console.log(userData)
//             toast.success("User created successfully !!");
            

//         })
//         .catch(error => {
//             //error handler
//             console.log(error)
//             setErrorData({
//                 isError: true,
//                 errorData: error
//             })
//             toast.error("Error in creating user ! Try again")
//         })
//         .finally(() => {
//             setLoading(false)
//         })
}

    
  useEffect(() => {
    axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
    .then(res=> setData(res.data) )
    .catch(err=>console.log(err))
  }, []);
   const country=[...new Set(data.map(item=> item.country))] ;
    console.log(country);



  const handleStateChange = (event) => {
    // Update the selected state
    const newState = event.target.value;
    setSelectedState(newState);
     // Fetch the list of cities based on the selected state and set it in the 'cities' state variable
    const selectedStateIndex = event.target.selectedIndex - 1;
    
    
    const fetchedCities =  print_city("citySelect", selectedStateIndex);
    setCities(fetchedCities);

    // Optionally, you can clear the selected city when the state changes
    setSelectedCity('');
  };    

  return (
    <>
     <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
    <Box
      sx={{
        width: "470px",
    height: "1080px",
    background: "transparent linear-gradient(202deg, #A57548 0%, #755334E6 100%) 0% 0% no-repeat padding-box",
    borderRadius: "40px 0px 0px 40px",
        display: 'flex',
        flexDirection: 'column',
        opacity:"0.9",
        color: 'white', // Text color
        padding: '40px' // Added padding
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" sx={{top:"139px", height:"45px",
        left:"36px", font:"normal normal 600 36px/48px Poppins",
        color:"white"}}>
          Step {activeStep + 1}
         
        </Typography>
        <br></br>
        <Typography sx={{ width:"363px",
         left:"40px",font: "normal normal normal 26px/30px Poppins"
        }}>
          {/* {steps[activeStep].description} */}
        </Typography>
        <br></br>
        <br></br>
        
      </Box>
      <Box sx={{ width: '100%', 
      flex: 1 }}>
        <Stepper activeStep={activeStep} orientation="vertical" >
          {steps.map((step, index) => (
            <Step key={step.label}  sx={{ mb: 3 }}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption" ></Typography>
                  ) : null
                }
                
              >
                 <Typography  sx={{ color:"white", opacity:"0.5",
                 fontSize:" 20px",
                  width:"208px", height:"28px", left:"92px" }}>
                {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
            
                <Typography></Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
      </Box>
    <Box sx={{ 
    width:"970px",
    height: "1080px", 
    position:"relative",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "0px 40px 40px 0px",
    opacity:"0.9",
    boxShadow: "0px 3px 9px #00000040" }}>

{activeStep === 0 && (
           <>
            <div className="form1" style={{
      width: "970px",
      position:"absolute",
      borderRadius:'40px',
      padding: '0 40px',
      opacity:"1"}}>

        {/* {JSON.stringify(data)} */}
      
      <form style={{position:"absolute"}}>
        <h2
          style={{
            marginTop: "59px",
            font: "normal normal medium 28px/42px Poppins",
          }}
        >
          Personal Information
        </h2>
        <br></br>
        <Form>
  <div>
    <Form.Control
      style={{
        width: "650px",
        height: "61px",
        opacity: "0.6",
        background: "#D9E1DE59 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 7px #00000040",
        font: "normal normal normal 20px/30px Poppins",
      }}
      placeholder="  Student Name*"
      type="text"
      marginLeft="15px"
      id="studentstName"
      name="students_Name"
      onChange={onSubmit}
      value={data.students_Name}
      isInvalid={errorData.errorData?.response?.data?.students_Name}
    />
    <Form.Control.Feedback type="invalid">
      {errorData.errorData?.response?.data?.students_Name}
    </Form.Control.Feedback>
  </div>
</Form>
<br></br>
<Form>
  <div>
    <Form.Control
      style={{
        width: "650px",
        height: "61px",
        opacity: "0.6",
        background: "#D9E1DE59 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 7px #00000040",
        font: "normal normal normal 20px/30px Poppins",
      }}
      placeholder="  Student Email*"
      marginLeft="15px"
      type="email"
      id="students_emailId"
      name="students_emailId"
      onChange={onSubmit}
      value={data.students_emailId}
      isInvalid={errorData.errorData?.response?.data?.students_emailId}
    />
    <Form.Control.Feedback type="invalid">
      {errorData.errorData?.response?.data?.students_Name}
    </Form.Control.Feedback>
   
  </div>
</Form>
<br></br>
<Form>
  <div>
    <Form.Control
            style={{
              width: "650px",
              height: "61px",
              opacity: "0.6",
              background:"#D9E1DE59 0% 0% no-repeat padding-box",
              boxShadow:"0px 3px 7px #00000040",
              font: "normal normal normal 20px/30px Poppins",
            }}
            placeholder="  Student Number"
            type="text"
            id="students_number"
            name="students_number"
            onChange={onSubmit}
            value={data.students_number}
            isInvalid={errorData.errorData?.response?.data?.students_number}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.students_number}
          </Form.Control.Feedback>

          
        </div>
        </Form>
        <br></br>

<Form>
<div style={{ display: "flex", alignItems: "center" }}>
  
 
  <select   style={{flex: 1,
  width:"310px",

    height: "61px",
    opacity: "0.36",
    background: "#D9E1DE59 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 7px #00000040",
    font: "normal normal normal 20px/30px Poppins"}}
    
    >
        <option value=""> Country</option>
    
    {country.map(items => (
            <option key={items} >
              {items}
            </option>
          ))}
  </select>

  <select id="citySelect" 
   onChange={(event) => setSelectedCity(event.target.value)}
  style={{flex: 1,
  marginLeft:"40px",
  width:"300px",
    height: "61px",
    opacity: "0.36",
    background: "#D9E1DE59 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 7px #00000040",
    font: "normal normal normal 20px/30px Poppins"}}
   >
    <option value="">Select City</option>
          {/* {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option> 

          ))}*/}
  </select>

</div>
</Form>
        <br></br>

        <Form>
  <div>
    <Form.Control
            style={{
              width: "650px",
              height: "61px",
              opacity: "0.6",
              background:"#D9E1DE59 0% 0% no-repeat padding-box",
              boxShadow:"0px 3px 7px #00000040",
              font: "normal normal normal 20px/30px Poppins",
            }}
            placeholder="  Parents Name"
            type="text"
            id="parentsName"
            name="parentsName"
            onChange={onSubmit}
            value={data.parentsName}
            isInvalid={errorData.errorData?.response?.data?.parentsName}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.parentsName}
          </Form.Control.Feedback>
        </div>
        <br></br>
</Form>
<Form>
  <div>
    <Form.Control
            style={{
              width: "650px",
              height: "61px",
              opacity: "0.6",
              background:"#D9E1DE59 0% 0% no-repeat padding-box",
              boxShadow:"0px 3px 7px #00000040",
              font: "normal normal normal 20px/30px Poppins",
            }}
            placeholder="  Parents Email"
            type="email"
            id="parents_emailId"
            name="parents_emailId"
            onChange={onSubmit}
            value={data.parents_emailId}
            isInvalid={errorData.errorData?.response?.data?.parents_emailId}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.parents_emailId}
          </Form.Control.Feedback>
        </div>
        <br></br>
</Form>
<Form>
  <div>
    <Form.Control
            style={{
              width: "650px",
              height: "61px",
              opacity: "0.6",
              background:"#D9E1DE59 0% 0% no-repeat padding-box",
              boxShadow:"0px 3px 7px #00000040",
              font: "normal normal normal 20px/30px Poppins",
            }}
            placeholder="  Parents Number"
            type="text"
            id="parents_number"
            name="parents_number"
            onChange={onSubmit}
            value={data.parents_number}
            isInvalid={errorData.errorData?.response?.data?.parents_number}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.parents_number}
          </Form.Control.Feedback>
        </div>
        </Form>
      <br></br>

      <Form>
  <div>
    <Form.Control
            style={{
              width: "650px",
              height: "61px",
              opacity: "0.6",
              background:"#D9E1DE59 0% 0% no-repeat padding-box",
              boxShadow:"0px 3px 7px #00000040",
              font: "normal normal normal 20px/30px Poppins",
            }}
            placeholder="    Password"
            type="password"
            id="password"
            name="password"
            onChange={onSubmit}
            value={data.password}
            isInvalid={errorData.errorData?.response?.data?.password}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.password}
          </Form.Control.Feedback>
        </div>
        </Form>
        <br></br>
        <div>
        <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
           
    />   <span style={{width:"464px", height:"48px", 
                      font:"normal normal normal 20px/25px Poppins",
                      opacity:"1",
                      textAlign:"center"}}> By signing up, I agree to the Privacy Statement and Terms of  Service.</span>
                      
        </div>
      </form>
    </div>
           </>
          )}
          {activeStep === 1 && (
    <>

    </>   
          )}
          {activeStep === 2 && (
           <>

           </>
             
            
          )}
          {activeStep === 3 &&  (
           <>
           
           </>
          ) }
      
         <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          component={Link}
         
          sx={{ mt: 1, mr: 1 , 
            position:"absolute",
            top:"975px", left:"60px",
            font:"normal normal normal 24px/35px Poppins",
            color:' #4B4B4B' 
           }}
        >
          Previous
        </Button>

        
        {activeStep < steps.length - 1 && (
          <Button
            variant="contained"
            onClick={handleNext}
            component={Link}
            sx={{ mt: 1, ml: 2,
                position:"absolute",
                top:"970px" ,
                left:"540px",
                width:"230px",
                height:"60px",
                // font:"normal normal medium 24px/35px Poppins",
                background:"#A57548 0% 0% no-repeat padding-box",
                borderRadius:"50px", fontSize: "23px"}}
          > 
            Next
          </Button>
        )}

        <Form onSubmit={submitForm}>
        {activeStep === steps.length - 1 && (
         <Button
         type='submit'
         variant="success"
         onClick={() => {
            console.log(data)
           console.log("Finish button clicked");
           handleNext(); // Call your handleNext function if needed
         }}
         component={Link}
         sx={{
           mt: 1,
           ml: 2,
           position: "absolute",
           top: "970px",
           left: "540px",
           width: "230px",
           height: "60px",
           background: "#A57548 0% 0% no-repeat padding-box",
           borderRadius: "50px",
           fontSize: "23px"
         }}
       >
         Finish
       </Button>
        )}
        </Form>
      </Box>
      


  </Box>
    </Container>
    
    
    </>
  )
}

export default DemoReg