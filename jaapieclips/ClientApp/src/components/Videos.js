import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle , CardText, CardImg, CardSubtitle } from 'reactstrap';
import './videos.css';


export default class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [], loading: true };
      }

      componentDidMount() {
        this.getVideos();
      }

    render() {

            let contents = this.state.loading
              ? <p><em>Loading...</em></p>
              :   <div>
                  {this.state.videos.map(video =>
                  <a href={"/getvideos/getvideocontent?path="+video.file}> 
                 <Card id="videocard">
                 <CardTitle>{video.name}</CardTitle>
                 <CardSubtitle>{video.description}</CardSubtitle>
                 <CardImg src="./thumbnails/mw.jpg"></CardImg>
             </Card>
             </a>
                   )}
                </div>
        return (

            <Container fluid>
                    <Row>
                        <Col>
                    <h1>Clips</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {contents}
                        </Col>
                    </Row>
            </Container>
        )
    }

    async getVideos() {
        const response = await fetch('getvideos/videos');
        const data = await response.json(); 
        this.setState({ videos: data, loading: false });
      }

}
