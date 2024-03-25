import { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import myPicture from '../Assets/image/myPicture.png';
import myCV from '../Assets/image/myCV.png';
import m from '../Assets/image/clean_cut_handsome_black_man_at_his_corporate_offi1_ins.jpg'


function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Row className="align-items-center" id='back' style={{
            backgroundImage: `url(${m})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '625px',
            padding: '50px 0',
            paddingTop: '100px',
            ...(windowWidth <= 500 && { backgroundPosition: 'right' })
        }}>
            <Col xs={12} md={6} className='text-center mt-4 mt-md-0'>
                <p>
                    <span style={{ fontSize: '1.5rem', color: 'wheat' }}>Hi!</span><br />
                    <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e76f51' }}>Je suis<br />Daniel MUTAKA</span><br />
                    <span style={{ fontSize: '1.5rem', color: 'white' }}>Elève ingénieur en ingénierie informatique et réseau.</span>
                </p>
                <div className="d-flex justify-content-center">
                    <Button variant="success" className='me-3'>
                        Contactez-moi
                    </Button>
                    <Button variant="secondary" onClick={handleShow}>
                        Voir mon CV
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Mon CV</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <Image rounded src={myCV} alt="myCV" style={{ maxWidth: '90%', height: 'auto' }} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Email me
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Row>


    );
}

export default Home;
