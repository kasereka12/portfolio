import React from 'react';
import myPicture from '../Assets/image/a_series_of_photos_of_black_black_men_in_Finance_I_ins.jpg'
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';


function About() {
    return (
        <Container>
            <Row className="align-items-center pt-3 pb-3">
                <h2 className='text-center mb-4'>À propos de moi</h2>
                <Col xs={12} md={6} className='mb-3 mb-md-1'>
                    <p className="text-muted" style={{ fontSize: '1.2rem' }}>

                        Actuellement étudiant en ingénierie informatique et réseaux, mon parcours académique m'a doté d'une solide compréhension des concepts fondamentaux de l'informatique, ainsi que de compétences pratiques dans le développement logiciel et les réseaux.
                    </p>
                    <p className="text-muted" style={{ fontSize: '1.2rem' }}>
                        Passionné d'informatique, j'ai passé plus de 3 ans à perfectionner mes compétences à travers un large éventail de projets. Ma principale force réside dans la décomposition de problèmes complexes en tâches gérables, une compétence essentielle pour fournir un code robuste et maintenable sur des projets à grande échelle.
                    </p>
                    <p className="text-muted" style={{ fontSize: '1.2rem' }}>
                        Je m'épanouis dans les défis, recherchant constamment des opportunités pour améliorer mes capacités. J'ai principalement poursuivi un apprentissage autodirigé, ce qui me permet d'appréhender et de m'adapter rapidement aux nouvelles technologies en toute autonomie.
                    </p>
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <Image rounded src={myPicture} alt="myPicture" style={{ maxWidth: '60%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>

    )
}

export default About
