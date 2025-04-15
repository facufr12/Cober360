// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import WebinarCard from 'components/marketing/common/cards/WebinarCard';

// import required media files
import WebinarImage from 'assets/images/education/edu-webinar-1.jpg';

export const WebinarImageStyledCard = () => {
    const data = [
        {
            id: 1,
            image: WebinarImage,
            title: 'Education Edition Deployment And Set Up',
            date: 'Thu, November 10, 2023',
            time: '6:00 PM – 8:00 PM GMT',
            link: "#"
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <WebinarCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const WebinarImageStyledCardCode = `
// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import WebinarCard from 'components/marketing/common/cards/WebinarCard';

// import required media files
import WebinarImage from 'assets/images/education/edu-webinar-1.jpg';

export const WebinarImageStyledCardExample = () => {
    const data = [
        {
            id: 1,
            image: WebinarImage,
            title: 'Education Edition Deployment And Set Up',
            date: 'Thu, November 10, 2023',
            time: '6:00 PM – 8:00 PM GMT',
            link: "#"
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <WebinarCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
