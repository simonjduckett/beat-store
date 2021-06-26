import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Faqs = () => {
    return ( 
        
        <section align="center" className='py-5' id="faq">
            <div className="container">
                <h2>FAQ</h2>
                <br />
                    <p>We are here to help. Here are some of the most<br /> common questions, along with the complete answers.</p>
                        <br />
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle className='w-100' as={Button} variant="link" eventKey="0">
                                Do the beats still have a tag when I purchase a license?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>No, all licenses come with untagged files.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle className='w-100' as={Button} variant="link" eventKey="1">
                                Once purchased from the store, do I own the beat?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body><p>No. Purchases from the Beat Store are non-exclusive. This means that the producer still owns the copyright and can still license it to other artists.</p>
                                <p>Please contact if you wish to obtain exclusive rights.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle className='w-100' as={Button} variant="link" eventKey="2">
                                What are the payment methods?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>You can pay via paypal or a credit card</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle className='w-100' as={Button} variant="link" eventKey="3">
                                How do I download the tracks after payment?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>

                                <p>After payment you will be re-directed to a secure download area where you can download the purchased tracks.</p>

                                <p>You will also be sent a confirmation email with download links.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                            
            </div>
</section>
     );
}

export default Faqs;