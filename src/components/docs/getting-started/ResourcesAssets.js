// import node module libraries
import { Link } from 'react-router-dom';
import { Row, Col, Card, Table } from "react-bootstrap";

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data file
import { resourcesLinks } from "data/docs/SidebarContentLinks";
import {
    pluginResources,
    iconResources,
    imageResources,
} from "data/docs/ResourcesData";

const ResourcesAssets = () => {

    const ResourcesTable = ({ data }) => {
        return (
            <Card className="border shadow-none ">
                <div className="table-responsive">
                    <Table className="mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{ width: "30%" }}>Name of installed package</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="text-dark fw-semibold">{item.name}</td>
                                    <td>
                                        <Link to={item.link} target="_blank">
                                            {item.link} <i className="fe fe-external-link"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        );
    };

    return (
        <DocsInnerLayout links={resourcesLinks}>
            <div className="docs-content mx-xxl-9">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-8" id="intro">
                            <h1 className="mb-0 fw-bold">Resources & assets</h1>
                            <p className="mb-6 lead text-muted">
                                First, let us take this opportunity to thank all the creative
                                minds for their great products and plugins.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="mb-8" id="plugins">
                            <h2 className="fw-semibold">Plugins (libraries / packages)</h2>
                            <p className="mb-3">
                                The following dependencies are used with GeeksUI ReactJS theme, which are required to run the template.
                            </p>
                            <Card>
                                <Card.Body>
                                    <ResourcesTable data={pluginResources} />
                                </Card.Body>
                            </Card>

                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <div className="mb-8" id="icons">
                            <h2 className="fw-semibold">Icons</h2>
                            <p className="mb-3">All of the icons we use in GeeksUI ReactJS</p>
                            <Card>
                                <Card.Body>
                                    <ResourcesTable data={iconResources} />
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <div className="mb-8" id="images">
                            <h2 className="fw-semibold">Images</h2>
                            <p className="mb-3">
                                Images in GeeksUI ReactJS come almost exclusively from below website
                                links.
                            </p>
                            <Card>
                                <Card.Body>
                                    <ResourcesTable data={imageResources} />
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <div className="mb-8" id="figma-files">
                            <h2 className="fw-semibold">Figma Files</h2>
                            <p className="mb-3">We will provide Figma files upon request.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </DocsInnerLayout>
    );
};

export default ResourcesAssets;
