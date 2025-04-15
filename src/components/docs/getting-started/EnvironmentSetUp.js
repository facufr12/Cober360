// import node module libraries
import { Link } from 'react-router-dom';
import { Row, Col, Image, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required custom components
import PageHeadingDescription from '../common/PageHeadingDescription';

// import required data files
import { environmentLinks } from "data/docs/SidebarContentLinks";

// import media files
import NodeJSIcon from 'assets/images/docs/nodejs.svg';
import SASSIcon from 'assets/images/docs/sass.svg';
import ReactIcon from 'assets/images/docs/react.svg';
import ReactBootstrapIcon from 'assets/images/docs/react-bootstrap.svg';

const EnvironmentSetUp = () => {
    return (
        <DocsInnerLayout links={environmentLinks}>
            <div className="docs-content mx-xxl-9">
                <PageHeadingDescription
                    title="Environment Setup"
                    description="To get started with Geeks UI ReactJS Theme, the only requirement is a
                                Node JS other required packages like SASS, ReactJS, React Bootstrap everything will be managed by theme itself."
                />
                <hr className="mb-5 mt-7" />


                <Row>
                    <Col md={12} xs={12}>
                        <div className="mb-8">
                            <h2 className="fw-semibold">Modern development toolset.</h2>
                            <p className="mb-0">
                                Below are the core tools which we use for building a Geeks UI ReactJS theme.
                                For more detail of the toolset, go to their official websites.
                            </p>
                        </div>
                        <div className="mb-8">
                            <Row>
                                <Col lg={6} xs={12} className="mb-4">
                                    <Card className="border shadow-none mb-4 mb-lg-0">
                                        <Card.Body>
                                            <div className="mb-6">
                                                <div className="mb-4">
                                                    <Image
                                                        src={NodeJSIcon}
                                                        alt=""
                                                        className="avatar-md"
                                                    />
                                                </div>
                                                <h3 className="fw-semibold">Node Js </h3>
                                                <p>
                                                    <Link to="https://nodejs.org/en/" target="_blank">
                                                        Node.js <i className="fe fe-external-link"></i>
                                                    </Link> {" "}
                                                    is an open-source, cross-platform, back-end JavaScript
                                                    runtime environment that runs on the V8 engine and executes
                                                    JavaScript code outside a web browser.
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} xs={12} className="mb-4">
                                    <Card className="border shadow-none mb-4 mb-lg-0">
                                        <Card.Body>
                                            <div className="mb-6">
                                                <div className="mb-4">

                                                    <Image
                                                        src={ReactIcon}
                                                        alt=""
                                                        className="avatar-md"
                                                    />
                                                </div>
                                                <h3 className="fw-semibold">ReactJS</h3>
                                                <p>
                                                    <Link to="https://react.dev/learn" target="_blank">React <i className="fe fe-external-link"></i></Link> lets you build user interfaces out of individual pieces called components.
                                                    Create your own React components like Thumbnail, LikeButton, and Video.
                                                    Then combine them into entire screens, pages, and apps.

                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} xs={12} className="mb-4">
                                    <Card className="border shadow-none mb-4 mb-lg-0">
                                        <Card.Body>
                                            <div className="mb-6">
                                                <div className="mb-4">
                                                    <Image
                                                        src={SASSIcon}
                                                        alt=""
                                                        className="avatar-md"
                                                    />
                                                </div>
                                                <h3 className="fw-semibold">SASS</h3>
                                                <p>
                                                    <Link to="https://sass-lang.com/" target="_blank">
                                                        Sass <i className="fe fe-external-link"></i> {" "}
                                                    </Link>
                                                    (short for syntactically awesome style sheets) is a
                                                    preprocessor scripting language that is interpreted or
                                                    compiled into Cascading Style Sheets (CSS).
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} xs={12} className="mb-4">
                                    <Card className="border shadow-none mb-4 mb-lg-0">
                                        <Card.Body>
                                            <div className="mb-6">
                                                <div className="mb-4">
                                                    <Image
                                                        src={ReactBootstrapIcon}
                                                        alt=""
                                                        className="avatar-md"
                                                    />
                                                </div>
                                                <h3 className="fw-semibold">React Bootstrap</h3>
                                                <p>
                                                    <Link to="https://react-bootstrap.netlify.app/" target="_blank">
                                                        React Bootstrap <i className="fe fe-external-link"></i> {" "}
                                                    </Link> replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </DocsInnerLayout>
    );
};

export default EnvironmentSetUp;
