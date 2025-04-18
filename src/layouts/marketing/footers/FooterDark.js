// import node module libraries
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';
import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';

// import required routes
import MentorFooterRoutes from 'routes/marketing/MentorFooterRoutes';

// import app config file
import { settings } from 'AppConfig';

// import requried layout files
import GoToTop from 'layouts/marketing/footers/GoToTop';

const FooterDark = () => {
	const today = new Date();
	const year = today.getFullYear();

	return (
		<footer className="py-lg-8 py-5 footer footer-dark">
			<Container>
				<Row className="gy-4">
					<Col lg={4} sm={12}>
						{/* about company */}
						<div className="d-flex flex-column gap-4">
							<div>
								<Image
									src={settings.theme.mentorLogo}
									alt="Geeks"
									className=""
								/>
							</div>
							<div>
								<p className="mb-0 txet-gray-500">
									Connecting founders and marketers with battle-hardened mentors
									that genuinely enjoy helping people.
								</p>
							</div>

							<div className="fs-4 d-flex flex-row gap-3">
								{/* Instagram */}
								<Link href="#!" className="text-reset">
									<Instagram size={16} />{' '}
								</Link>
								{/* Facebook */}
								<Link href="#!" className="text-reset">
									<Facebook size={16} />{' '}
								</Link>
								{/* Twitter */}
								<Link href="#!" className="text-reset">
									<svg
										className="bi bi-twitter-x"
										fill="currentColor"
										height="16"
										viewBox="0 0 16 16"
										width="16"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
									</svg>
								</Link>
								{/* youtube */}
								<Link href="#!" className="text-reset">
									<Youtube size={16} />{' '}
								</Link>
							</div>
						</div>
					</Col>
					{MentorFooterRoutes.map((item, index) => {
						return (
							<Col key={index} lg={2} md={3} sm={6}>
								<div className="d-flex flex-column gap-2">
									<h5 className="fw-bold text-white-50 text-uppercase mb-0">
										{item.menuitem}
									</h5>
									<ListGroup
										as="ul"
										bsPrefix="list-unstyled"
										className="nav nav-footer flex-column nav-x-0"
									>
										{item.children.map((subItem, subIndex) => {
											return (
												<ListGroup.Item key={subIndex} as="li" bsPrefix=" ">
													<Link href={subItem.link} className="nav-link">
														{subItem.menuitem}
													</Link>
												</ListGroup.Item>
											);
										})}
									</ListGroup>
								</div>
							</Col>
						);
					})}
				</Row>
				<Row className="mt-lg-7 mt-5">
					<Col lg={{ span: 6, offset: 3 }} sm={12}>
						<span className="d-flex justify-content-center">
							©
							<span id="copyright2" className="me-2">
								{year}
							</span>
							Geeks-UI Mentor. All Rights Reserved.
						</span>
					</Col>
				</Row>
			</Container>
			<GoToTop />
		</footer>
	);
};

export default FooterDark;
