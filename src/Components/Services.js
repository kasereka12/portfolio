import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import services from '../Assets/Json/Services.json';
import Skills from './Skills';

function Services() {
    return (
        <Container>
            <h2 className='text-center me-2 pt-2 pb-2'>My Services</h2>
            <Row className="justify-content-center">
                {services.map(service => (
                    <Col key={service.Id} xs={12} sm={6} md={4} lg={3} className='pb-3'>
                        <Card className='pb-2' style={{
                            borderRadius: "50px"
                        }}>
                            <Card.Header style={{
                                backgroundColor: service.couleur, padding: "10px", borderTopLeftRadius: "30px",
                                borderTopRightRadius: "30px"
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={require(`../Assets/image/${service.Image}`)}
                                        style={{ maxWidth: '15%', height: 'auto', marginRight: '10px' }}
                                        alt={`Image ${service.Id}`}
                                    />
                                    <h2 style={{ fontSize: 18, fontWeight: 'bolder', margin: 0 }}>
                                        {service.Title}
                                    </h2>
                                </div>
                            </Card.Header>
                            <Card.Body style={{ padding: "10px", textAlign: "center" }}>
                                {service.Description}
                                <Card.Text>
                                    {service.Description}
                                </Card.Text>
                                <Button variant="success" href='/Projects'>Check my projects</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/*J'ai directement importé les Skills dans la partie services*/}
            <Skills />
        </Container >
    )
}

export default Services;
