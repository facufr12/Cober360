// import node module libraries
import { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Navbar, Nav, Container, Form } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

// import sub layout components
import NavDropdownMain from 'layouts/marketing/navbars/NavDropdownMain';
import QuickMenu from 'layouts/QuickMenu';
import DocumentMenu from 'layouts/marketing/navbars/DocumentMenu';
import DarkLightMode from 'layouts/DarkLightMode';

// import data files
import NavbarDefaultRoutes from 'routes/marketing/NavbarDefault';

// import context file
import { AppConfigContext } from 'context/Context';

const NavbarDefault = ({ login = false }) => {

	const ConfigContext = useContext(AppConfigContext);

	const isDesktop = useMediaQuery({
		query: '(min-width: 1224px)'
	});
	const isLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	});

	const [expandedMenu, setExpandedMenu] = useState(false);

	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className="navbar p-2 navbar-default py-2"
			>
				<Container fluid className="px-0 ps-2">
					<Navbar.Brand as={Link} to="/">
						<Image src={ConfigContext.appStats.logo} alt={ConfigContext.appStats.name} />
					</Navbar.Brand>
					<div
						className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${login ? (isDesktop || isLaptop ? 'd-none' : 'd-flex') : 'd-none'
							}`}
					>
						<QuickMenu />
					</div>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							{NavbarDefaultRoutes.map((item, index) => {
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
						{/* Search Form */}
						<Form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
							<span className="position-absolute ps-3 search-icon">
								<i className="fe fe-search"></i>
							</span>
							<Form.Control
								type="Search"
								id="formSearch"
								className="ps-6"
								placeholder="Search Courses"
							/>
						</Form>
						{/* Right side quick / shortcut menu  */}
						<Nav className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
							{!login && <DarkLightMode className="mt-2 me-2" />}
							<span className={`ms-auto mt-1  ${login ? 'd-none' : ''}`}>
								<Nav.Link
									as={Link}
									to="#"
									bsPrefix="btn"
									className="btn btn-white shadow-sm me-2"
								>
									Sign In
								</Nav.Link>
								<Nav.Link
									as={Link}
									to="#"
									bsPrefix="btn"
									className="btn btn-primary shadow-sm"
								>
									Sign Up
								</Nav.Link>
							</span>

							<span
								className={`${login
									? isDesktop || isLaptop
										? 'd-flex'
										: 'd-none'
									: 'd-none'
									}`}
							>
								<QuickMenu />
							</span>
						</Nav>
						{/* end of right side quick / shortcut menu  */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};


// Typechecking With PropTypes
NavbarDefault.propTypes = {
	login: PropTypes.bool
};

export default NavbarDefault;
