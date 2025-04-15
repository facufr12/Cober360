// import node module libraries
import { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Navbar, Nav, Container } from 'react-bootstrap';

// import custom components
import DocumentMenu from 'layouts/marketing/navbars/DocumentMenu';
import NavDropdownMain from 'layouts/marketing/navbars/NavDropdownMain';
import DarkLightMode from 'layouts/DarkLightMode';

// import data files
import NavbarDefaultRoutes from 'routes/marketing/NavbarDefault';

// import context file
import { AppConfigContext } from 'context/Context';

const NavbarLanding = ({ transparent = false, center }) => {
	const ConfigContext = useContext(AppConfigContext);
	const [expandedMenu, setExpandedMenu] = useState(false);
	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className={`navbar navbar-default shadow-none ${transparent ? 'navbar-transparent' : ''}`}
			>
				<Container className="px-0">
					<Navbar.Brand as={Link} to="/">
						<Image src={ConfigContext.appStats.logo} alt={ConfigContext.appStats.name} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className={`${center ? 'mx-auto' : ''}`}>
							{NavbarDefaultRoutes.slice(1, 4).map((item, index) => {
								if (item.children === undefined) {
									return (
										<Nav.Link key={index} as={Link} to={item.link}>
											{item.menuitem}
										</Nav.Link>
									);
								} else {
									return (
										<NavDropdownMain
											item={item}
											key={index}
											onClick={(value) => setExpandedMenu(value)}
										/>
									);
								}
							})}
							<DocumentMenu />
						</Nav>
						<Nav
							className={`${center ? 'd-flex align-items-center order-lg-3 flex-row' : 'navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap'}`} >
							<DarkLightMode className="me-3" />
							<div className={`mt-3 mt-lg-0`}>
								<Nav.Link
									href="https://themes.getbootstrap.com/store/codescandy/"
									target="_blank"
									bsPrefix="btn"
									className="btn btn-outline-primary"
								>
									Buy Now
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};


// Typechecking With PropTypes
NavbarLanding.propTypes = {
	transparent: PropTypes.bool
};

export default NavbarLanding;
