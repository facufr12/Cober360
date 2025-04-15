// import node module libraries
import { Container } from "react-bootstrap";

// import custom components
import CourseCard from "components/marketing/common/cards/CourseCard";

// import required media files
import CourseGatsby from 'assets/images/course/course-gatsby.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';

export const CardCourseHorizontal = () => {
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
                <CourseCard item={data[0]} viewby="list" />
            </Container>
        </section>
    )
}

export const CardCourseHorizontalCode = `
// import node module libraries
import { Container } from "react-bootstrap";

// import custom components
import CourseCard from "components/marketing/common/cards/CourseCard";

// import required media files
import CourseGatsby from 'assets/images/course/course-gatsby.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';

export const CardCourseHorizontalExample = () => {
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
                <CourseCard item={data[0]} viewby="list" />
            </Container>
        </section>
    )
}
`.trim();
