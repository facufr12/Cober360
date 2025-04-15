// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Image } from 'react-bootstrap';
import { useContext } from 'react';

// import context file
import { AppConfigContext } from 'context/Context';

const NavbarBrandOnly = () => {
	const ConfigContext = useContext(AppConfigContext);
	return (
		<Row>
			<Col xl={{ offset: 1, span: 2 }} lg={12} md={12}>
				<div className="mt-4">
					<Link to="/">
						<Image src={ConfigContext.appStats.logo} alt={ConfigContext.appStats.name} />
					</Link>
				</div>
			</Col>
		</Row>
	);
};
export default NavbarBrandOnly;
