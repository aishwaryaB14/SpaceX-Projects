import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col, Row, Button, Label } from 'reactstrap';
import Header from './Header';
export default class Lanchss extends Component {
    state = {
        userList: [],
        data: []
    }
    async componentDidMount() {
        const url = "https://api.spacexdata.com/v3/launches?limit=100/";
        const response = await fetch(url);
        const data = await response.json();
        console.log("res", data)
        this.setState({ userList: data });
    }


    render() {
        return (
            <div style={{ background: "#f9e8e8", height: '100%', width: '100%' }}>
                <Header />
                <div >
                    <div className="row">
                       
                      <div className="col-md-4">
                          <Card style={{ backgroundColor: 'white' }}  >
                                    <CardTitle style={{ color: 'black' }}><h2>Filters</h2></CardTitle>
                                    <Col xs="3"> <Label ><h4 style={{ textAlign: 'center' }}><u>Launch year</u></h4></Label> </Col>
                                    <Row>
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2006</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2007</Button></Col>
                                        </Row>
                                        <br /><br />
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2008</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2009</Button></Col>
                                        </Row>
                                        <br /> <br />
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2010</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2011</Button></Col>
                                        </Row> <br /> <br />
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2012</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2013</Button></Col>
                                        </Row> <br /><br />
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2014</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2015</Button></Col>
                                        </Row> <br /><br />
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2016{this.state.userList.launch_year}</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2018{this.state.userList.launch_year}</Button></Col>
                                        </Row> <br /><br />
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2019{this.state.userList.launch_year}</Button><br /></Col> <br />
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">2020{this.state.userList.launch_year}</Button></Col>
                                        </Row> <br /><br />
                                        <Row>
                                            <Col xs="3"> <Label><h4>Successful Launch </h4></Label> <br /></Col> </Row>
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">True{this.state.userList.launch_success}</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">False{this.state.userList.launch_success}</Button></Col>
                                        </Row>
                                        <br />  <br /><br />
                                        <Row>
                                            <Col xs="3"> <Label ><h4>Successful Landing </h4></Label> </Col> <br /> </Row>
                                        <Row>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">True{this.state.userList.launch_success}</Button></Col>
                                            <Col sm={{ size: 'auto', offset: 2 }}><Button color="success">False{this.state.userList.launch_success}</Button></Col>
                                        </Row>
                                       
                                    </Row>
                                    <br/>
                           </Card>
                           <div class="span8"></div>
                        </div>



                        {this.state.userList.map((data, i) => {
                            return (
                                <div className="col-md-2" key={1}>
                                    <Card body inverse style={{ backgroundColor: 'white' }}>
                                        <div style={{ backgroundColor: '#f9e8e8', marginBottom: 35, textAlign: 'center', height: '100%' }}><img src={data.links.mission_patch_small} alt="mission_patch" style={{ height: '100%', width: '100%' }} ></img></div>
                                        <CardTitle style={{ color: 'black' }} ><h4 style={{ color: 'blue' }}>{data.mission_name} # {data.flight_number}</h4></CardTitle>
                                        <CardText style={{ color: 'black' }}><h4>Mission Ids:</h4>{data.mission_id.length}</CardText>
                                        <CardText style={{ color: 'black' }}><h4>Launch Year:</h4>{data.launch_year}</CardText>
                                        <CardText style={{ color: 'black' }}><h4>Successful Launch :</h4>{data.launch_success}</CardText>
                                        <CardText style={{ color: 'black' }}><h4>Successful Landng :</h4>{data.l}</CardText>
                                    </Card>
                                </div>);
                        })}
 <div style={{ bottom: "1",textAlign: "center",marginLift: "10px"}}><h2 style={{ marginLeft:"-69px",
                  marginRight:"100px"}}>Developed By:Aishwarya</h2></div>
               
                    </div>

                </div>
            </div>
        )
    }
}
