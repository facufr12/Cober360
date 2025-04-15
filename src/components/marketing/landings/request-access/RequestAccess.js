// import node module libraries
import { Fragment } from 'react';

// import custom components
import LogosTopHeadingOffset from 'components/marketing/common/clientlogos/LogosTopHeadingOffset';
import CTAEarlyAccess from 'components/marketing/common/call-to-action/CTAEarlyAccess';
import HeroFormCenter from 'components/marketing/common/hero-sections/HeroFormCenter';

// import sub components
import Features2Columns from './Features2Columns';
import TestimonialSection from './TestimonialSection';

// import layouts
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import FooterCenter from 'layouts/marketing/footers/FooterCenter';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

const RequestAccess = () => {
	return (
		<Fragment>
			{/* Landing Page Navbar */}
			<NavbarLanding />

			<main>
				{/* Hero section with center form */}
				<HeroFormCenter
					badgeText='<span class="fw-bold">Beta-v2.0.0 </span> - Just shipped version'
					title='Request Access for Product'
					description='Geeks is a customizable, Bootstrap based UI Kits and Templates for Developers.'
					promotionalText='Rated 5 Stars <span class="text-muted">by over</span> <span class="text-primary"> 100+ Users</span>'
				/>

				{/* Brand logo section */}
				<LogosTopHeadingOffset limit={4} offset={2} logos={LogoList2} />

				{/* Features : Out of the box */}
				<Features2Columns />

				{/* Testimonial slider section */}
				<TestimonialSection />

				{/* Hero section with left form */}
				<CTAEarlyAccess />
			</main>

			{/* Footer with center alignment */}
			<FooterCenter />
		</Fragment>
	);
};
export default RequestAccess;
