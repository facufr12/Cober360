// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import GetEnrolledCourseCard from "components/marketing/common/cards/GetEnrolledCourseCard";

// import required media files
import CourseGatsby from 'assets/images/course/course-gatsby.jpg';
import CourseReact from 'assets/images/course/course-react.jpg';
import CourseHTML from 'assets/images/course/course-html.jpg';

export const CardThumbnailV2 = () => {
    const data = [
        {
            id: 1,
            image: CourseGatsby,
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            level: 'Intermediate',
            price: 850,
            rating: 2.5,
            ratingby: 16500,
            link: '#'
        },
        {
            id: 2,
            image: CourseReact,
            title: 'How to easily create a website with React',
            instructor_name: 'April Noms',
            level: 'Advance',
            price: 750,
            rating: 4.5,
            ratingby: 1500,
            link: '#'
        },
        {
            id: 3,
            image: CourseHTML,
            title: 'HTML Full Course - Build a Website Tutorial',
            instructor_name: 'Miston Wilson',
            level: 'Beginner',
            price: 700,
            rating: 3.0,
            ratingby: 1600,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row className="row-cols-1 row-cols-md-3 g-4">
                    {data.map((item, index) => (
                        <Col xs key={index}>
                            <GetEnrolledCourseCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export const CardThumbnailV2Code = `
// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import GetEnrolledCourseCard from "components/marketing/common/cards/GetEnrolledCourseCard";

// import required media files
import CourseGatsby from 'assets/images/course/course-gatsby.jpg';
import CourseReact from 'assets/images/course/course-react.jpg';
import CourseHTML from 'assets/images/course/course-html.jpg';

export const CardThumbnailV2Example = () => {
    const data = [
        {
            id: 1,
            image: CourseGatsby,
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            level: 'Intermediate',
            price: 850,
            rating: 2.5,
            ratingby: 16500,
            link: '#'
        },
        {
            id: 2,
            image: CourseReact,
            title: 'How to easily create a website with React',
            instructor_name: 'April Noms',
            level: 'Advance',
            price: 750,
            rating: 4.5,
            ratingby: 1500,
            link: '#'
        },
        {
            id: 3,
            image: CourseHTML,
            title: 'HTML Full Course - Build a Website Tutorial',
            instructor_name: 'Miston Wilson',
            level: 'Beginner',
            price: 700,
            rating: 3.0,
            ratingby: 1600,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row className="row-cols-1 row-cols-md-3 g-4">
                    {data.map((item, index) => (
                        <Col xs key={index}>
                            <GetEnrolledCourseCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
`.trim();
