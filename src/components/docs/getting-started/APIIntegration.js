// import node module libraries
import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { APIIntegrationLinks } from "data/docs/SidebarContentLinks";

// import custom components
import HighlightCode from "components/elements/highlight-code/HighlightCode";
import PageHeadingDescription from '../common/PageHeadingDescription';

const APIIntegration = () => {

    const [productInfo, setProductInfo] = useState()
    useEffect(() => {
        fetch("https://dummyjson.com/products/1")
            .then((response) => response.json())
            .then((data) => setProductInfo(data))
            .catch(error => console.error('Error fetching data:' + error));
    }, [])
    const mockAPIFetchCode = `// import node module libraries
import { useEffect, useState } from "react";

const APIIntegration = () => {
    const [productInfo, setProductInfo] = useState()
    useEffect(() => {
        fetch("https://dummyjson.com/products/1")
            .then((response) => response.json())
            .then((data) => setProductInfo(data))
            .catch(error => console.error('Error fetching data:' + error));
    }, [])
    return (
        <div className="docs-content mx-xxl-9">
            <pre>{JSON.stringify(productInfo, null, 2)}</pre>
        </div>
    );
};
export default APIIntegration;
`;

    const mockAPIaxiosCode = `// import node module libraries
import axios from "axios";
import { useEffect, useState } from "react";

const APIIntegration = () => {
    const [productInfo, setProductInfo] = useState()
    useEffect(() => {
        axios.get("https://dummyjson.com/products/1")
            .then((response) => setProductInfo(response.data))
            .catch(error => console.error('Error fetching data:' + error));
    }, [])
    return (
        <div className="docs-content mx-xxl-9">
            <pre>{JSON.stringify(productInfo, null, 2)}</pre>
        </div>
    );
};

export default APIIntegration;
`;
    return (
        <DocsInnerLayout links={APIIntegrationLinks} id="intro">
            <div className="docs-content mx-xxl-9">

                <PageHeadingDescription
                    title="API Integration"
                    description="An API integration is the connection between two or more applications, via their APIs, that lets those systems exchange data. API integrations power processes throughout many high-performing businesses that keep data in sync and enhance productivity."
                />

                <Row className="docs-example mt-7">
                    <Col md={12} xs={12}>
                        <div id="api-code">
                            <h3 className="mb-3">
                                There are two methods to fetch data from API in React
                            </h3>
                            <ol>
                                <li className="h4">Using JavaScript Fetch API </li>
                                <li className="h4">Using Axios Library</li>
                            </ol>
                        </div>
                    </Col>
                </Row>

                <Row className="docs-example mt-7">
                    <Col md={12} xs={12}>
                        <div id="api-code">
                            <h3 className="mb-3">
                                1) Using JavaScript Fetch API
                            </h3>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <HighlightCode className="py-3 ps-3" code={mockAPIFetchCode} />
                    </Col>
                </Row>

                <Row className="docs-example mt-7">
                    <Col md={12} xs={12}>
                        <div id="api-code">
                            <h3 className="mb-3">
                                2) Using Axios Library
                            </h3>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <HighlightCode className="py-3 ps-3" code={mockAPIaxiosCode} />
                    </Col>
                </Row>

                <Row className="docs-example mt-7">
                    <Col md={12} xs={12}>
                        <div id="api-code">
                            <h3 className="mb-3">
                                Above both method will show the same result as shown below.
                            </h3>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <Card className="p-5 my-3">
                            <pre>{JSON.stringify(productInfo, null, 2)}</pre>
                        </Card>
                    </Col>
                </Row>


            </div>
        </DocsInnerLayout>
    );
};

export default APIIntegration;
