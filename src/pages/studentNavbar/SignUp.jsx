import React from "react";
import { Form, Card, Col, Container, Row, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom"
import { toast,ToastContainer } from "react-toastify";
import { useContext, useState } from "react"
import { loginUser } from "../../services/user.service";
import 'react-toastify/dist/ReactToastify.css'; 
import UserContext from "../../context/user.context";

const SignUp = () => {
// to redirect the location after logging
  const redirect = useNavigate()
  const userContext = useContext(UserContext);

  let [data, setData] = useState({
        email: '',
        password: '',
  })
  let [error, setError] = useState({
      errorData: null,
      isError: false
  })

  let [loading, setLoading] = useState(false)

  const handleChange = (event, property) => {
      setData({
          ...data,
          [property]: event.target.value
      })
  }

  const handleReset = () => {

      setData({
          email: '',
          password: ''
      })

      setError({
          errorData: null,
          isError: false
      })

      setLoading(false)
  }

  //submit form

  const submitForm = (event) => {
      event.preventDefault();
     
      console.log(data)

      //client side validations

      if (data.email === undefined || data.email.trim() === '') {
          toast.error("Email required !!")
          return
      }

      if (data.password === undefined || data.password.trim() === '') {
          toast.error("Password required !!")
          return
      }

      //login api
      setLoading(true)
      loginUser(data)
      .then((data)=>{
        console.log(data)
        toast.success("Logged In")
        setError({
          errorData: null,
          isError: false

        })
        // userContext.setIsLogin(true)
        // userContext.setUserData(data)
        userContext.login(data)
// redirect to dashboard
redirect("/admin")
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response.data.message)
        setError({
            errorData: error,
            isError: true
        })
    })
    .finally(() => {
        setLoading(false)
    })
            
  }





  const loginForm = () => {
    return (
      <Container  style={{paddingTop:'115px' }}>
         
        <ToastContainer/>
        <Row>
          <Col
            md={{
              span: 8,
              offset: 2,
            }}
          >
              
            <Card className="my-3 border-0 shadow">
            {/* {JSON.stringify(userContext)} */}
              <Card.Body>
                {/* <img src="images/darklogo.png" alt="Store logo" width={100} height={100} /> */}
               
                <h3 className="text-center text-uppercase"> Login </h3>

                <Form  noValidate onSubmit={submitForm}>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Email </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter here"
                    onChange={(event) => handleChange(event, "email")}
                    value={data.email}
                  />
                </Form.Group>

                {/* password login field */}

                <Form.Group className="mb-3">
                  <Form.Label>Enter Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter here"
                    onChange={(event) => handleChange(event, "password")}
                    value={data.password}
                  />
                </Form.Group>
                <Container className="text-center">
                                        {/* <p>Forget Password ! <a href="/forget">Click here</a></p> */}
                                        <p>If not registered !  <NavLink to="/registration" >Click here</NavLink></p>
                                    </Container>

                                    <Container className="text-center">

<Button type="submit" className="" variant="success" > Login
    {/* <Spinner
        animation="border"
        size="sm"
        hidden={!loading}
        className={'me-2'}

    />
    <span hidden={!loading}>Please wait...</span>

    <span hidden={loading}>  Login</span> */}

</Button>

<Button onClick={handleReset} className="ms-2" variant="danger">Reset</Button>
</Container>    
</Form>                 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
loginForm()

  );
};

export default SignUp;

