// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import custom components
import SkillCourseCard from 'components/marketing/common/cards/SkillCourseCard';

// import required media files
import EducationImg1 from 'assets/images/education/edu-img-1.jpg';
import EducationImg2 from 'assets/images/education/edu-img-2.jpg';

export const CardTopImage = () => {
    const data = [
        {
            id: 1,
            category: 'Writing',
            image: EducationImg1,
            duration: 8,
            durationUnit: 'Hours',
            title: 'Content Writing',
            rating: 4.9,
            votes: 31,
        },
        {
            id: 2,
            category: 'Design',
            image: EducationImg2,
            duration: 12,
            durationUnit: 'Hours',
            title: 'UI / UX Design',
            rating: 4.9,
            votes: 23
        }];
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col xl={3} md={6} xs={12} key={index}>
                                <SkillCourseCard item={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export const CardTopImageCode = `
// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import custom components
import SkillCourseCard from 'components/marketing/common/cards/SkillCourseCard';

// import required media files
import EducationImg1 from 'assets/images/education/edu-img-1.jpg';
import EducationImg2 from 'assets/images/education/edu-img-2.jpg';

export const CardTopImageExample = () => {
    const data = [
        {
            id: 1,
            category: 'Writing',
            image: EducationImg1,
            duration: 8,
            durationUnit: 'Hours',
            title: 'Content Writing',
            rating: 4.9,
            votes: 31,
        },
        {
            id: 2,
            category: 'Design',
            image: EducationImg2,
            duration: 12,
            durationUnit: 'Hours',
            title: 'UI / UX Design',
            rating: 4.9,
            votes: 23
        }];
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col xl={3} md={6} xs={12} key={index}>
                                <SkillCourseCard item={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
`.trim();
