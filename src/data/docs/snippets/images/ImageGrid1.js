// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import HeroCollageGallery from 'components/marketing/common/gallery/HeroCollageGallery';

// import media files
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';
import Avatar13 from 'assets/images/avatar/avatar-13.jpg';
import Avatar14 from 'assets/images/avatar/avatar-14.jpg';

export const ImageGrid1 = () => {
    const images = [
        Avatar6, Avatar8, Avatar10, Avatar11, Avatar12, Avatar13, Avatar14
    ]
    return (
        <section className="py-md-14 py-8 bg-white">
            <Container>
                <Row className="align-items-center">
                    <Col xl={6} lg={6} xs={12}>
                        <div className="mb-5  ">
                            <h1 className="display-3 mb-4 fw-bold "> Join the team, we’re growing fast! </h1>
                            <p className="lead mb-4 pe-xl-12 ">
                                We’re looking for incredible people to build on our strong momentum. Help us power the brands you know and love.
                            </p>
                            <Link to="#position" className="btn btn-primary"> See All Open Positions </Link>
                            <p className=" mt-4 mb-0">
                                69 open positions across and <Link to="#">all offices</Link> and <Link to="#">all teams</Link>.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <HeroCollageGallery images={images} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export const ImageGrid1Code = `
// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import HeroCollageGallery from 'components/marketing/common/gallery/HeroCollageGallery';

// import media files
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';
import Avatar13 from 'assets/images/avatar/avatar-13.jpg';
import Avatar14 from 'assets/images/avatar/avatar-14.jpg';

export const ImageGrid1Example = () => {
    const images = [
        Avatar6, Avatar8, Avatar10, Avatar11, Avatar12, Avatar13, Avatar14
    ]
    return (
        <section className="py-md-14 py-8 bg-white">
            <Container>
                <Row className="align-items-center">
                    <Col xl={6} lg={6} xs={12}>
                        <div className="mb-5  ">
                            <h1 className="display-3 mb-4 fw-bold "> Join the team, we’re growing fast! </h1>
                            <p className="lead mb-4 pe-xl-12 ">
                                We’re looking for incredible people to build on our strong momentum. Help us power the brands you know and love.
                            </p>
                            <Link to="#position" className="btn btn-primary"> See All Open Positions </Link>
                            <p className=" mt-4 mb-0">
                                69 open positions across and <Link to="#">all offices</Link> and <Link to="#">all teams</Link>.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <HeroCollageGallery images={images} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}`.trim();