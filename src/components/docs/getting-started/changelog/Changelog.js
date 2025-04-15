// import node module libraries
import { Col, Row, Alert } from 'react-bootstrap';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';

// import sub components
import Version010000 from 'components/docs/getting-started/changelog/Version010000';
import Version010100 from 'components/docs/getting-started/changelog/Version010100';
import Version010200 from 'components/docs/getting-started/changelog/Version010200';
import Version010300 from 'components/docs/getting-started/changelog/Version010300';
import Version010400 from 'components/docs/getting-started/changelog/Version010400';
import Version010500 from 'components/docs/getting-started/changelog/Version010500';
import Version010501 from 'components/docs/getting-started/changelog/Version010501';
import Version020000 from 'components/docs/getting-started/changelog/Version020000';
import Version020001 from 'components/docs/getting-started/changelog/Version020001';
import Version020100 from 'components/docs/getting-started/changelog/Version020100';
import Version020101 from 'components/docs/getting-started/changelog/Version020101';
import Version020200 from 'components/docs/getting-started/changelog/Version020200';
import Version020201 from 'components/docs/getting-started/changelog/Version020201';
import Version020300 from 'components/docs/getting-started/changelog/Version020300';
import Version030000 from 'components/docs/getting-started/changelog/Version030000';

// import custom components
import PageHeadingDescription from 'components/docs/common/PageHeadingDescription';

// import required data files
import { changelogLinks } from 'data/docs/SidebarContentLinks';

// import required layout
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout';

const ChangeLog = () => {
	return (
		<DocsInnerLayout links={changelogLinks} id='intro'>
			<div className="docs-content mx-xxl-9">

				<PageHeadingDescription
					title="Changelog"
					description="We’re constantly improving & updating Geeks. See the latest features and improvements."
				/>


				<hr className="mb-5 mt-5" />
				<Row>
					<Col xl={12} lg={12} md={12} sm={12} xs={12}>
						<Alert variant="warning" className="justify-content-between d-flex">
							<div>
								<ExclamationTriangleFill size={20} className="me-1" />
							</div>
							<div className="ms-3">
								<Alert.Heading as="h4">
									Make a backup before updating.
								</Alert.Heading>
								Before updating, read the changelog carefully and please backup
								your project and customizations, because having a backup will keep
								you safe from losing anything.
							</div>
						</Alert>

					</Col>
				</Row>

				<div id='v300'></div>
				<hr className="my-5" />
				<Version030000 />

				<div id='v230'></div>
				<hr className="my-5" />
				<Version020300 />

				<div id='v221'></div>
				<hr className="my-5" />
				<Version020201 />

				<div id='v220'></div>
				<hr className="my-5" />
				<Version020200 />

				<div id='v211'></div>
				<hr className="my-5" />
				<Version020101 />

				<div id='v210'></div>
				<hr className="my-5" />
				<Version020100 />

				<div id='v201'></div>
				<hr className="my-5" />
				<Version020001 />

				<div id='v200'></div>
				<hr className="my-5" />
				<Version020000 />

				<div id='v151'></div>
				<hr className="my-5" />
				<Version010501 />

				<div id='v150'></div>
				<hr className="my-5" />
				<Version010500 />

				<div id='v140'></div>
				<hr className="my-5" />
				<Version010400 />

				<div id='v130'></div>
				<hr className="my-5" />
				<Version010300 />

				<div id='v120'></div>
				<hr className="my-5" />
				<Version010200 />

				<div id='v110'></div>
				<hr className="my-5" />
				<Version010100 />

				<div id='v100'></div>
				<hr className="my-5" />
				<Version010000 />

			</div>
		</DocsInnerLayout>
	);
};

export default ChangeLog;
