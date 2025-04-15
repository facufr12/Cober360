// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import custom components
import MentorCard from 'components/marketing/common/cards/MentorCard';

// import media files
import MentorImg7 from 'assets/images/mentor/mentor-img-7.jpg';

export const UserProfile2 = () => {
    const data = [
        {
            id: 1,
            image: MentorImg7,
            mentorName: 'Andrew Lupien',
            mentorRole: 'Quality Assurance Engineer',
            company: "Microsoft",
            experience: 5,
            reviews: 12,
            ratings: 5.0,
            verified: true,
            price: 35,
            allowFreeTrial: true
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={3} xl={4} md={6} xs={12}>
                        <MentorCard mentor={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const UserProfile2Code = `
// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import custom components
import MentorCard from 'components/marketing/common/cards/MentorCard';

// import media files
import MentorImg7 from 'assets/images/mentor/mentor-img-7.jpg';

export const UserProfile2Example = () => {
    const data = [
        {
            id: 1,
            image: MentorImg7,
            mentorName: 'Andrew Lupien',
            mentorRole: 'Quality Assurance Engineer',
            company: "Microsoft",
            experience: 5,
            reviews: 12,
            ratings: 5.0,
            verified: true,
            price: 35,
            allowFreeTrial: true
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={3} xl={4} md={6} xs={12}>
                        <MentorCard mentor={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}`.trim();