// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import GKAccordionProgress from 'components/marketing/common/accordions/GKAccordionProgress';

// import data files
import { CourseIndex } from "data/marketing/CourseIndexData";

export const ListGroupsCard = () => {
    return (
        <section className="py-8 bg-light">
            <Container>
                <Row>
                    <Col lg={4} sm={12} >
                        <GKAccordionProgress accordionItems={CourseIndex} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const ListGroupsCardCode = `
// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import GKAccordionProgress from 'components/marketing/common/accordions/GKAccordionProgress';

// import data files
import { CourseIndex } from "data/marketing/CourseIndexData";

export const ListGroupsCardExample = () => {
    return (
        <section className="py-8 bg-light">
            <Container>
                <Row>
                    <Col lg={4} sm={12} >
                        <GKAccordionProgress accordionItems={CourseIndex} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
