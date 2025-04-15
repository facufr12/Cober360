// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import CourseCard from "components/marketing/common/cards/CourseCard";

// import required media files
import CourseGatsby from 'assets/images/course/course-gatsby.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';

export const CardCourseThumbnail = () => {
    const data = [
        {
            id: 1,
            image: CourseGatsby,
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            instructor_image: Avatar7,
            level: 'Intermediate',
            duration: '1h 46m',
            rating: 2.0,
            ratingby: 16500,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CourseCard item={data[0]} viewby="grid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const CardCourseThumbnailCode = `
// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import CourseCard from "components/marketing/common/cards/CourseCard";

// import required media files
import CourseGatsby from 'assets/images/course/course-gatsby.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';

export const CardCourseThumbnailExample = () => {
    const data = [
        {
            id: 1,
            image: CourseGatsby,
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            instructor_image: Avatar7,
            level: 'Intermediate',
            duration: '1h 46m',
            rating: 2.0,
            ratingby: 16500,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CourseCard item={data[0]} viewby="grid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
