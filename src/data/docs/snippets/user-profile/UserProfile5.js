// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import custom components
import StudentInstructorInfoCard from 'components/marketing/common/cards/StudentInstructorInfoCard';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

export const UserProfile5 = () => {
    const data = [
        {
            id: 1,
            name: 'Jenny Wilson',
            image: Avatar1,
            topic: 'Front-end Developer, Designer',
            courses: 6,
            students: 50274,
            rating: 4.6
        }
    ];
    return (
        <section className="py-6 bg-light rounded-3">
            <Container>
                <Row>
                    <Col xxl={4} xl={4} md={6} xs={12}>
                        <StudentInstructorInfoCard instructor={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const UserProfile5Code = `
// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import custom components
import StudentInstructorInfoCard from 'components/marketing/common/cards/StudentInstructorInfoCard';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

export const UserProfile5Example = () => {
    const data = [
        {
            id: 1,
            name: 'Jenny Wilson',
            image: Avatar1,
            topic: 'Front-end Developer, Designer',
            courses: 6,
            students: 50274,
            rating: 4.6
        }
    ];
    return (
        <section className="py-6 bg-light rounded-3">
            <Container>
                <Row>
                    <Col xxl={4} xl={4} md={6} xs={12}>
                        <StudentInstructorInfoCard instructor={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}`.trim();