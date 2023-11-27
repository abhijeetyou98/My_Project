
import {useEffect, useState} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import {  Container, Form, Col, Row, }  from 'react-bootstrap';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AcademicInfo from '../../pages/studentRegistration/AcademicInfo';
import InvoiceBill from '../../pages/studentRegistration/InvoiceBill' ;
import PersonalInfo from '../../pages/studentRegistration/PersonalInfo' ;
import PaymentMethod from '../../pages/studentRegistration/PaymentMethod' ;
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getUsers, registerUser } from "../../services/user.service";
import 'react-toastify/dist/ReactToastify.css';





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
const dottedLineStyle = {
  borderBottom: '2px dashed #A57548', 
};


export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [activeDescription, setActiveDescription] = useState(steps[0].description);

  const [data ,setData] = useState({
   studentsName: '',
    students_number: '',
    studentsEmailId: '',
    parentsName: '',
    parents_number: '',
    parents_emailId: '',
    grade: '',
    password: '',
    board: '',
    state:'',
    city:'',
    // schoolName:'',
    // board:'',
    // grade:''

})

const [errorData, setErrorData] = useState({
  isError: false,
  errorData: null
})


  const handleNext = () => {
    
//    // validate client side
// if (data.studentsName === undefined || data.studentsName.trim() === '') {
//   toast.error("Name is required !!")
//   return
// }
// if (data.studentsEmailId === undefined || data.studentsEmailId.trim() === '') {
//   toast.error("Email is required !!")
//   return
// }

// if (data.students_number === undefined || data.students_number.trim() === '') {
//   toast.error("Number is required !!")
//   return
// }


// if (data.parentsName === undefined || data.parentsName.trim() === '') {
//   toast.error("Parent name is required !!")
//   return
// }
// if (data.parents_emailId === undefined || data.parents_emailId.trim() === '') {
//   toast.error("Email is required !!")
//   return
// }

// if (data.parents_number === undefined || data.parents_number.trim() === '') {
//   toast.error("Number is required !!")
//   return
// }
// if (data.password === undefined || data.password.trim() === '') {
//   toast.error("Password is required !!")
//   return
// }
console.log(data)


    registerUser(data).then(res=>{
       console.log(res)
       toast.success("User created successfully !!");
    }).catch(error=>{
        console.log(error)
        setErrorData({
          isError: true,
          errorData: error
      })
      toast.error("Error in creating user ! Try again")
        
      })

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
  // useEffect(() => {
  //   setActiveDescription(steps[activeStep].description);
  // }, [activeStep]);
 


  return (
    <>
    <Container style={{ display: 'flex', paddingTop:'115px',
    // On larger screens, the content is side by side
    flexDirection: 'row', 
    alignItems: 'flex-start' }}>
      <ToastContainer/>

      {/* <Row>
      <Col sm={{ span: 5, offset: 0.5 }} md={{ span: 2.5, order: 0.25 }}> */}
    <Box
      sx={{
        // Takes up half the width on larger screens
        width:"40%",
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
                    <Typography variant="caption" className="dotted-line" ></Typography>
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
            <PersonalInfo
              data={data}
              setData={setData}
            />
          )}
          {activeStep === 1 && (
            <AcademicInfo
            data={data}
            
            />
          )}
          {activeStep === 2 && (
            <PaymentMethod
            data={data}
             
            />
          )}
          {activeStep === 3 &&  (
            <InvoiceBill
            data={data}
           
             />
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
         type="submit"
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
  {/* </Col>
  </Row> */}
    </Container>
  </>
  );
        }