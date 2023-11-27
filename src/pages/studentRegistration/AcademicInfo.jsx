import React, { useState } from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';

function AcademicInfo({ data, setData }) {
  const gradeOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  const [errorData, setErrorData] = useState({
    isError: false,
    errorData: null
  });

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event, property) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const [selectedGrade, setSelectedGrade] = useState('');

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const [selectedBoard, setSelectedBoard] = useState('');

  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };

  const handleStateChange = (event, property) => {
    setData({
      ...data,
      [property]: event.target.value
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={{ span: 5, offset: 0.5 }}>
          <div
            className="form1"
            style={{
              width: '970px',
              position: 'absolute',
              borderRadius: '40px',
              padding: '0 40px',
              opacity: '1'
            }}
          >
            {/* {JSON.stringify(data)} */}
            <Form style={{ position: 'absolute' }}>
              <h2
                style={{
                  marginTop: '59px',
                  font: 'normal normal medium 28px/42px Poppins'
                }}
              >
                Academics Information
              </h2>
              <br></br>

              <Form.Group className="mb-3">
                <Form.Control
                  style={{
                    width: '650px',
                    height: '61px',
                    opacity: '0.6',
                    background: '#D9E1DE59 0% 0% no-repeat padding-box',
                    boxShadow: '0px 3px 7px #00000040',
                    font: 'normal normal normal 20px/30px Poppins'
                  }}
                  placeholder="Name Of Current School *"
                  type="text"
                  marginLeft="15px"
                  id="schoolName"
                  name="schoolName"
                  onChange={(event) => handleStateChange(event, 'schoolName')}
                  value={data.schoolName}
                  isInvalid={errorData.errorData?.response?.data?.schoolName}
                />
                <Form.Control.Feedback type="invalid">
                  {errorData.errorData?.response?.data?.schoolName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  style={{
                    width: '650px',
                    height: '61px',
                    opacity: '0.6',
                    background: '#D9E1DE59 0% 0% no-repeat padding-box',
                    boxShadow: '0px 3px 7px #00000040',
                    font: 'normal normal normal 20px/30px Poppins'
                  }}
                  placeholder="Current Board *"
                  type="text"
                  marginLeft="15px"
                  id="board"
                  name="board"
                  as="select"
                  onChange={(event)=>handleBoardChange(event,'board')}
                  
                  // value={data.selectedBoard}
                >
                  <option value="">Select Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="State Board">State Board</option>
                  <option value="IB">IB</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  style={{
                    width: '650px',
                    height: '61px',
                    opacity: '0.6',
                    background: '#D9E1DE59 0% 0% no-repeat padding-box',
                    boxShadow: '0px 3px 7px #00000040',
                    font: 'normal normal normal 20px/30px Poppins'
                  }}
                  placeholder="Current Grade *"
                  type="text"
                  marginLeft="15px"
                  id="grade"
                  name="grade"
                  as="select"
                  onChange={(event)=>handleGradeChange(event,'grade')}
                 
                  value={selectedGrade}
                >
                  <option value="">Select Grade</option>
                  {gradeOptions.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}th Std
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

           
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AcademicInfo;
