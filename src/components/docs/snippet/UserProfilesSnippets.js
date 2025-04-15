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
import { UserProfile1, UserProfile1Code } from 'data/docs/snippets/user-profile/UserProfile1';
import { UserProfile2, UserProfile2Code } from 'data/docs/snippets/user-profile/UserProfile2';
import { UserProfile3, UserProfile3Code } from 'data/docs/snippets/user-profile/UserProfile3';
import { UserProfile4, UserProfile4Code } from 'data/docs/snippets/user-profile/UserProfile4';
import { UserProfile5, UserProfile5Code } from 'data/docs/snippets/user-profile/UserProfile5';
import { UserProfile6, UserProfile6Code } from 'data/docs/snippets/user-profile/UserProfile6';
import { UserProfile7, UserProfile7Code } from 'data/docs/snippets/user-profile/UserProfile7';

const UserProfilesSnippets = () => {
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
            hrefID: 'userProfile-1',
            title: 'Profile Cover Card',
            tabContent: <UserProfile1 />,
            codeContent: UserProfile1Code
        },
        {
            hrefID: 'userProfile-2',
            title: 'Profile Card',
            tabContent: <UserProfile2 />,
            codeContent: UserProfile2Code
        },
        {
            hrefID: 'userProfile-3',
            title: 'Profile With Counter',
            tabContent: <UserProfile3 />,
            codeContent: UserProfile3Code
        },
        {
            hrefID: 'userProfile-4',
            title: 'Contact Card',
            tabContent: <UserProfile4 />,
            codeContent: UserProfile4Code
        },
        {
            hrefID: 'userProfile-5',
            title: 'Profile Card',
            tabContent: <UserProfile5 />,
            codeContent: UserProfile5Code
        },
        {
            hrefID: 'userProfile-6',
            title: 'Profile Page Header',
            tabContent: <UserProfile6 />,
            codeContent: UserProfile6Code
        },
        {
            hrefID: 'userProfile-7',
            title: ' Instructor Profile Card',
            tabContent: <UserProfile7 />,
            codeContent: UserProfile7Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="User Profile"
                    description="A user profile is a directory of stored user settings and information for the related user account."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default UserProfilesSnippets