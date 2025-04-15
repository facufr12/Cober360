// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import custom components
import GKTabs from "components/elements/tabs/GKTabs";
import PageHeadingDescription from "../common/PageHeadingDescription";
import HighlightCode from "components/elements/highlight-code/HighlightCode";

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { ImageGrid1, ImageGrid1Code } from 'data/docs/snippets/images/ImageGrid1';
import { ImageGrid2, ImageGrid2Code } from 'data/docs/snippets/images/ImageGrid2';
import { ImageGrid3, ImageGrid3Code } from 'data/docs/snippets/images/ImageGrid3';
import { ImageGrid4, ImageGrid4Code } from 'data/docs/snippets/images/ImageGrid4';

const ImageGridSnippets = () => {
    const SnippetSection = ({ item }) => {
        return (
            <Fragment>
                <div id={item.hrefID}></div>
                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">{item.title}</h2>
                        </div>
                        <GKTabs
                            tabs={[
                                { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: item.tabContent },
                                { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={item.codeContent} /> }
                            ]}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    const SnippetSectionData = [
        {
            hrefID: 'image-1',
            title: 'Image Collage With Text',
            tabContent: <ImageGrid1 />,
            codeContent: ImageGrid1Code
        },
        {
            hrefID: 'image-2',
            title: 'Image Collage',
            tabContent: <ImageGrid2 />,
            codeContent: ImageGrid2Code
        },
        {
            hrefID: 'image-3',
            title: 'Image Grid',
            tabContent: <ImageGrid3 />,
            codeContent: ImageGrid3Code
        },
        {
            hrefID: 'image-4',
            title: 'Image LightBox Zoom',
            tabContent: <ImageGrid4 />,
            codeContent: ImageGrid4Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Image Grid"
                    description="Geeks image grid is a simple construction which allows you to create a responsive layout for your images."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default ImageGridSnippets