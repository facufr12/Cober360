// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import ProfileCard from "components/marketing/common/cards/ProfileCard";

// import required media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

export const ProfileCardSnippet = () => {
    const data = [
        {
            id: 1,
            author_name: 'Jenny Wilson',
            author_image: Avatar1,
            designation: 'Front-end Developer, Designer',
            rating: 4.5,
            students: 110124,
            courses: 42,
            about_author: 'I start my development and digital career studying digital design. After taking a couple of programming classes I realize that code is what I wanted to be doing.'
        },
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={6} xl={6} lg={12}>
                        <ProfileCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const ProfileCardCode = `
// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import custom components
import ProfileCard from "components/marketing/common/cards/ProfileCard";

// import required media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

export const ProfileCardExample= () => {
    const data = [
        {
            id: 1,
            author_name: 'Jenny Wilson',
            author_image: Avatar1,
            designation: 'Front-end Developer, Designer',
            rating: 4.5,
            students: 110124,
            courses: 42,
            about_author: 'I start my development and digital career studying digital design. After taking a couple of programming classes I realize that code is what I wanted to be doing.'
        },
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={6} xl={6} lg={12}>
                        <ProfileCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
