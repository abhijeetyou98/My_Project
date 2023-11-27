import { useEffect , useState} from "react";
import * as React from 'react';
import "./registrationpage.css";
import Checkbox from '@mui/material/Checkbox';
import { Form, Card, Col, Container, Row, } from "react-bootstrap";
import { print_city, print_state } from "../../cities.js"; 

// const gradeOptions = Array.from({ length: 12 }, (_, index) => index + 1);

const PersonalInfo = ({data, setData}) => {


const [errorData, setErrorData] = useState({
  isError: false,
  errorData: null
})

// const [loading, setLoading] = useState(false)


  const [checked, setChecked] = React.useState(true);

  const handleChange=(event, property)=>{
     console.log(event)
     console.log(property)
     
     setData({
      ...data, [event.target.name]: event.target.value})




  };



  useEffect(() => {
    print_state("stateSelect");
  }, []);

 const xyz =(event)=>{
  // setData({
  //   ...data, [e.target.name]: e.target.value})
    const selectedStateIndex = event.target.selectedIndex - 1;
    print_city("citySelect", selectedStateIndex);
 }




 
  const handleStateChange = (event, property) => {
    // Call print_city to populate city dropdown based on selected state
    
    setData({
      ...data,
      [property]: event.target.value})

      
   
  };


  return (
    <Container >
      <Row>
      <Col sm={{ span: 5, offset: 0.5 }}>
    <div className="form1" style={{
      // width: "1700px",
      position:"absolute",
      borderRadius:'40px',
      padding: '0 40px',
      opacity:"1"}}>

        {/* {JSON.stringify(data)} */}
      
      <Form style={{position:"absolute"}}>
        <h2
          style={{
            marginTop: "59px",
            font: "normal normal medium 28px/42px Poppins",
          }}
        >
          Personal Information
        </h2>
        <br></br>
        

          <Form.Group  className="mb-3"  >
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
      name="studentsName"
      onChange={(event)=>handleStateChange(event,'studentsName')}
      value={data.studentsName}
      isInvalid={errorData.errorData?.response?.data?.studentsName}
    />
    <Form.Control.Feedback type="invalid">
      {errorData.errorData?.response?.data?.studentsName}
    </Form.Control.Feedback>
    </Form.Group>
  



<Form.Group className="mb-3" >
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
      id="studentsEmailId"
      name="studentsEmailId"
      onChange={(event)=>handleStateChange(event,'studentsEmailId')}
      value={data.studentsEmailId}
      isInvalid={errorData.errorData?.response?.data?.studentsEmailId}
    />
    <Form.Control.Feedback type="invalid">
      {errorData.errorData?.response?.data?.studentsName}
    </Form.Control.Feedback>
   
    </Form.Group>



<Form.Group  className="mb-3" >
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
            onChange={(event)=>handleStateChange(event,'students_number')}
            value={data.students_number}
            isInvalid={errorData.errorData?.response?.data?.students_number}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.students_number}
          </Form.Control.Feedback>

          
          </Form.Group>
        
       


<div style={{ display: "flex", alignItems: "center" }}>
  
 
<select id="stateSelect"  
onChange={(event)=>{handleStateChange(event,'state')
xyz(event)
}}
style={{flex: 1,
    width:"310px",
      height: "61px",
      opacity: "0.36",
      background: "#D9E1DE59 0% 0% no-repeat padding-box",
      boxShadow: "0px 3px 7px #00000040",
      font: "normal normal normal 20px/30px Poppins"}}>
      <option value=""> State</option>
    </select>
  
  {/* <Form.Select id="citySelect">
    <option value=""> City</option>
  </Form.Select> */}


    <select id="citySelect"
    onChange={(event)=>handleStateChange(event,'city')}
    style={{flex: 1,
    marginLeft:"40px",
    width:"300px",
      height: "61px",
      opacity: "0.36",
      background: "#D9E1DE59 0% 0% no-repeat padding-box",
      boxShadow: "0px 3px 7px #00000040",
      font: "normal normal normal 20px/30px Poppins"}}>
      <option value=""> City</option>
      
    </select>

</div>
<br></br>

    

        
        <Form.Group className="mb-3" >
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
            onChange={(event)=>handleStateChange(event,'parentsName')}
            value={data.parentsName}
            isInvalid={errorData.errorData?.response?.data?.parentsName}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.parentsName}
          </Form.Control.Feedback>
        </Form.Group>
       


        <Form.Group className="mb-3" >
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
            onChange={(event)=>handleStateChange(event,'parents_emailId')}
            value={data.parents_emailId}
            isInvalid={errorData.errorData?.response?.data?.parents_emailId}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.parents_emailId}
          </Form.Control.Feedback>
      </Form.Group>
       
        <Form.Group className="mb-3">
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
            onChange={(event)=>handleStateChange(event,'parents_number')}
            value={data.parents_number}
            isInvalid={errorData.errorData?.response?.data?.parents_number}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.parents_number}
          </Form.Control.Feedback>
          </Form.Group>
        
     

      
      <Form.Group className="mb-3" >
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
            onChange={(event)=>handleStateChange(event,'password')}
            value={data.password}
            isInvalid={errorData.errorData?.response?.data?.password}
          />
          <Form.Control.Feedback type="invalid">
            {errorData.errorData?.response?.data?.password}
          </Form.Control.Feedback>
          </Form.Group>
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
  
  

      
      </Form>
    </div>
    </Col>
    </Row>
    </Container>
  );
};

export default PersonalInfo;
