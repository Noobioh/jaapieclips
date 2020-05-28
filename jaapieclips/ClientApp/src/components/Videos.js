import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle , CardText, CardImg, CardSubtitle } from 'reactstrap';
import './videos.css';


export default class Videos extends Component {
    render() {
        return (
            <Container fluid>
                    <Row>
                        <Col>
                    <h1>Clips</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card id="videocard">
                            <CardTitle>Modern Warfare</CardTitle>
                            <CardSubtitle>Warzone clip</CardSubtitle>
                            <CardImg src="./thumbnails/mw.jpg"></CardImg>
                        </Card>
                        <Card id="videocard">
                            <CardTitle>Modern Warfare</CardTitle>
                            <CardSubtitle>Warzone clip</CardSubtitle>
                            <CardImg src="./thumbnails/mw.jpg"></CardImg>
                        </Card>
                        <Card id="videocard">
                            <CardTitle>Modern Warfare</CardTitle>
                            <CardSubtitle>Warzone clip</CardSubtitle>
                            <CardImg src="./thumbnails/mw.jpg"></CardImg>
                        </Card>
                        <Card id="videocard">
                            <CardTitle>Modern Warfare</CardTitle>
                            <CardSubtitle>Warzone clip</CardSubtitle>
                            <CardImg src="./thumbnails/mw.jpg"></CardImg>
                        </Card>
                        <Card id="videocard">
                            <CardTitle>Modern Warfare</CardTitle>
                            <CardSubtitle>Warzone clip</CardSubtitle>
                            <CardImg src="./thumbnails/mw.jpg"></CardImg>
                        </Card>
                        <Card id="videocard">
                            <CardTitle>Modern Warfare</CardTitle>
                            <CardSubtitle>Warzone clip</CardSubtitle>
                            <CardImg src="./thumbnails/mw.jpg"></CardImg>
                        </Card>
                        <Card id="videocard">
                            <CardTitle>Modern Warfare</CardTitle>
                            <CardSubtitle>Warzone clip</CardSubtitle>
                            <CardImg src="./thumbnails/mw.jpg"></CardImg>
                        </Card>
                        </Col>
                    </Row>
            </Container>
        )
    }
}
