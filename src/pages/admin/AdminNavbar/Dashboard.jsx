import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../../../context/user.context'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar2 from '../../../components/admin/Navbar2';
import Header2 from '../../../components/admin/Header2';
import { isAdminUser } from '../../../auth/HelperAuth';
import Content from './Content';
const Dashboard = () => {

  // useJwtTokenExpiration()
  const userContext = useContext(UserContext)
  const dashboardView = () => {
      return (
          <div>
              <Container fluid className="px-0 py-0  ">
                  <Row>
                      <Col md={{
                          span: 3
                      }} className="">
                            <Header2 />
                           <Navbar2 />
                           <Content/>
                           <Outlet />
                      </Col>
                      <Col md={10} className="ps-3 pt-2">
                          
                      </Col>
                  </Row>
              </Container>
          </div>

      )
  }

  return (
      (isAdminUser()) ? dashboardView() : <Navigate to="/admin" />
  )
}

export default Dashboard