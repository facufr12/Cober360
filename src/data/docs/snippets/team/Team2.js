// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import SectionHeadingCenter from 'components/marketing/common/section-headings/SectionHeadingCenter';
import InstructorCard from 'components/marketing/common/cards/InstructorCard';

// import data files
import { InstructorsList } from 'data/marketing/LandingCoursesData';

export const Team2 = () => {
    const title = 'Classes Taught by Industry Expert';
    const subtitle = 'World-class Instructors';
    const description = `Geeks teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you.`;
    return (
        <section className="py-8 py-lg-16 bg-light-gradient-top bg-white">
            <Container>
                <SectionHeadingCenter title={title} description={description} subtitle={subtitle} />
                <Row>
                    {InstructorsList.map((item, index) => (
                        <Col key={index} xl={3} lg={4} md={6} sm={12} className='d-xl-block' >
                            <InstructorCard item={item} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col md={12} className="mt-3 text-center">
                        <Link to="#" className="btn btn-primary">
                            See All Instructors
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export const Team2Code = `
// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import SectionHeadingCenter from 'components/marketing/common/section-headings/SectionHeadingCenter';
import InstructorCard from 'components/marketing/common/cards/InstructorCard';

// import data files
import { InstructorsList } from 'data/marketing/LandingCoursesData';

export const Team2Example = () => {
    const title = 'Classes Taught by Industry Expert';
    const subtitle = 'World-class Instructors';
    const description = 'Geeks teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you.';
    return (
        <section className="py-8 py-lg-16 bg-light-gradient-top bg-white">
            <Container>
                <SectionHeadingCenter title={title} description={description} subtitle={subtitle} />
                <Row>
                    {InstructorsList.map((item, index) => (
                        <Col key={index} xl={3} lg={4} md={6} sm={12} className='d-xl-block' >
                            <InstructorCard item={item} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col md={12} className="mt-3 text-center">
                        <Link to="#" className="btn btn-primary"> See All Instructors </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
`.trim();