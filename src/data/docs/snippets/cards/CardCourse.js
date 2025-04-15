// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import CoursePathCard from "components/marketing/common/cards/CoursePathCard";

// import required media files
import PathBootstrap from 'assets/images/path/path-bootstrap.svg';

export const CardCourse = () => {
    const data = [
        {
            id: 1,
            category: 'Development',
            logo: PathBootstrap,
            title: 'Bootstrap',
            courses: 42,
            hours: 110124,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CoursePathCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const CardCourseCode = `
// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import CoursePathCard from "components/marketing/common/cards/CoursePathCard";

// import required media files
import PathBootstrap from 'assets/images/path/path-bootstrap.svg';

export const CoursePathCardExample = () => {
    const data = [
        {
            id: 1,
            category: 'Development',
            logo: PathBootstrap,
            title: 'Bootstrap',
            courses: 42,
            hours: 110124,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CoursePathCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
