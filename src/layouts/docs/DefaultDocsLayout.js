// import node module libraries
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Button, Image } from 'react-bootstrap';

// import sub components
import DocSidebar from './navbars/DocSidebar';
import ScrollToHashElement from './navbars/ScrollToHashElement';

// import requried layout files
import DarkLightMode from 'layouts/DarkLightMode';
import GoToTop from 'layouts/marketing/footers/GoToTop';

// import app config file
import { settings } from 'AppConfig';

const DefaultDocsLayout = (props) => {
	const [showMenu, setShowMenu] = useState(true);
	return (
		<div className="docs-main-wrapper">
			<ScrollToHashElement />
			<div className="docs-header">
				<nav className="navbar navbar-expand-md fixed-top ms-0">
					<Link className="navbar-brand" to="/docs/getting-started/introduction">
						<Image src={settings.theme.logo} alt={settings.app.name} />
					</Link>
					<div className="ms-auto d-flex align-items-center">
						<DarkLightMode />
						<div className="d-flex">
							<div className="me-2 me-lg-0 ms-2">
								<Link className="btn btn-primary" to="https://bit.ly/geeksui">Buy now</Link>
							</div>
							<div>
								<Button bsPrefix='btn-icon' className="btn navbar-toggler" onClick={() => {
									setShowMenu(!showMenu),
										window.scrollTo({ top: 0, behavior: 'smooth' });
								}} type="button" >
									<span className="navbar-toggler-icon"></span>
								</Button>
							</div>
						</div>
					</div>
				</nav>
			</div>

			<DocSidebar showMenu={showMenu} onClick={() => setShowMenu(false)} />

			<main className="docs-wrapper">
				<section className="container-fluid">
					{props.children}
					<Outlet />
				</section>
			</main>
			<GoToTop />
		</div>
	);
};
export default DefaultDocsLayout;
