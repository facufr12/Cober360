// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import CourseDescriptionCard from 'components/marketing/common/cards/CourseDescriptionCard';
import SectionHeadingCenter from "components/marketing/common/section-headings/SectionHeadingCenter";

// import requried data files
import { CourseDescriptionList } from "data/marketing/LeadCourseData";

export const Card2Column = () => {
    return (
        <section className="py-8 bg-light">
            <Container>
                <SectionHeadingCenter
                    title='What will you learn?'
                    subtitle='Course Description'
                    description='Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.'
                />
                <Row>
                    {CourseDescriptionList.map((item) => (
                        <Col lg={6} sm={12} key={item.id}>
                            <CourseDescriptionCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export const Card2ColumnCode = `
// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import CourseDescriptionCard from 'components/marketing/common/cards/CourseDescriptionCard';
import SectionHeadingCenter from "components/marketing/common/section-headings/SectionHeadingCenter";

// import requried data files
import { CourseDescriptionList } from "data/marketing/LeadCourseData";

export const Card2ColumnExample = () => {
    return (
        <section className="py-8 bg-light">
            <Container>
                <SectionHeadingCenter
                    title='What will you learn?'
                    subtitle='Course Description'
                    description='Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.'
                />
                <Row>
                    {CourseDescriptionList.map((item) => (
                        <Col lg={6} sm={12} key={item.id}>
                            <CourseDescriptionCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
`.trim();
