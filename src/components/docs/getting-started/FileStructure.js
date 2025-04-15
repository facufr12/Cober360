// import node module libraries
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { fileStructureData } from "data/docs/FileStructureData";

// import custom components
import HighlightCode from "components/elements/highlight-code/HighlightCode";

const FileStructure = () => {
    const JSConfig = `{"compilerOptions": 
    {
      "baseUrl": "src"  
    }
}`;

    const File = ({ file, index }) => (
        <ListGroup as="ul" variant="flush">
            <ListGroup.Item className={`px-0 ${index != 0 ? "border-top" : ""}`}>
                <Row>
                    <Col xs="auto">
                        <div>{file.icon}</div>
                    </Col>
                    <Col className="d-flex ms-n3">
                        <span className="me-4 text-dark fw-bold">{file.name}</span>
                        <p className="mb-0">{file.desc}</p>
                    </Col>
                </Row>
                {file.children && (
                    <ListGroup variant="flush" className="ps-3 mt-3">
                        {file.children.map((child) =>
                            child.name === "gulpfile.js" ? (
                                <ListGroup.Item className="px-0" key={child.id}>
                                    <Row>
                                        <Col xs="auto">
                                            <div>{child.icon}</div>
                                        </Col>
                                        <Col className="d-flex ms-n3">
                                            <span className="me-4 text-dark fw-bold">{child.name}</span>
                                            <p className="mb-0">
                                                Configuration file for Gulp library. It contains all tasks
                                                you want to perform with Gulp. Learn more about it from
                                                section or{" "}
                                                <Link to="/docs/working-with-gulp">
                                                    Working with Gulp
                                                </Link>
                                                <Link to="https://gulpjs.com/">
                                                    official Gulp documentation
                                                </Link>
                                            </p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ) : (
                                <File key={child.id} file={child} />
                            )
                        )}
                    </ListGroup>
                )}
            </ListGroup.Item>
        </ListGroup>
    );

    return (
        <DocsInnerLayout isOpen={false}>
            <div className="docs-content mx-xxl-9">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-8" id="intro">
                            <h1 className="fw-bold display-3">File Structure</h1>
                            <p className="mb-6 lead text-muted">
                                This section will show you how to keep your files organized. Our
                                theme file structure that looks like this.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="mb-8">
                            <h2 className="fw-semibold">Theme folder and file structure</h2>
                            <p>
                                Inside the zip-file you&apos;ll find the following directories and
                                files. The application is created using <Link to="https://create-react-app.dev/docs/getting-started" target='_blank'>Create React App <i className="fe fe-external-link"></i></Link>  at the time of setup.

                            </p>

                            <p>Once installed, we have updated <code> jsconfig.json </code> file as shown below. For more options visit <Link to="https://code.visualstudio.com/docs/languages/jsconfig" target="_blank">VS Code Studio <i className="fe fe-external-link"></i></Link></p>
                            <HighlightCode code={JSConfig} />
                        </div>
                        <div>
                            <h4 className="mb-3">
                                Here is how the Geeks React theme organizes its files and folders' structure:
                            </h4>
                            <Card>
                                <Card.Body>
                                    {fileStructureData.map((file, index) => (
                                        <File key={file.id} file={file} index={index} />
                                    ))}
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </DocsInnerLayout>
    );
};

export default FileStructure;
