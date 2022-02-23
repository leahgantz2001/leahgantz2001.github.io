import {Row, Col, Card, Button} from 'react-bootstrap';

export default () => {
    return <div style={{marginBottom: '320px'}}>
        <h3>Projects</h3>
        <div style={{color: "black"}}>
            <Col>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Mancala</Card.Title>
                                <Card.Text>
                                      Used Object Oriented Programming in Java to create a game of mancala for users to play.
                                </Card.Text>
                                <Button onClick={() => window.open("https://github.com/leahgantz2001/mancala")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Operating System</Card.Title>
                                <Card.Text>
                                    Created a Java program simulating a computer system with master, clients, and slaves.
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/leahgantz2001/mainClient")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Racko Game</Card.Title>
                                <Card.Text>
                                    Created a Racko game in Java using object oriented programming with multiple classes.
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/leahgantz2001/rackoGame")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
              
            </Col>
        </div>
    </div>
}
