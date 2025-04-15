// import node module libraries
import { Fragment, useEffect } from 'react';
import { Container } from 'react-bootstrap';

// import sub components
import Features4Columns from './Features4Columns';
import AppIntegration from './AppIntegration';
import CustomersTestimonials from './CustomersTestimonials';
import SimplePricingPlans from './SimplePricingPlans';
import HeroLeftImage from './HeroLeftImage';
import HeroRightImage from './HeroRightImage';

// import custom components
import HeroGradient from 'components/marketing/common/hero-sections/HeroGradient';
import CTAFreeTrial from "components/marketing/common/call-to-action/CTAFreeTrial";

// import layouts
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import FooterCenter from 'layouts/marketing/footers/FooterWithLinks';

// import required data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

const LandingSass = () => {
	useEffect(() => {
		document.body.className = 'bg-white';
	});

	return (
		<Fragment>
			{/* Landing Page Navbar */}
			<NavbarLanding transparent />

			<main>
				{/* hero gradient */}
				<HeroGradient
					title='Modern web apps shipped faster'
					bulletArray={['Simple to use, beautiful UI design', 'Complete complex project with ease', 'An intuitive admin app for developers']}
					buttonText='Get started for Free'
					buttonLink='#'
					hrefText='Questions? Talk to an expert'
					hrefLink='#'
					logos={LogoList2}
				/>

				{/* features */}
				<Features4Columns />

				{/* image sections */}
				<section className="pb-lg-16 pb-8">
					<Container>
						{/* hero with left side image */}
						<HeroLeftImage />

						{/* divider */}
						<hr className="my-lg-12 my-8" />

						{/* hero with right side image */}
						<HeroRightImage />
					</Container>
				</section>

				{/* integrate with the apps */}
				<AppIntegration />

				<section className="pt-lg-16 pb-lg-14 pt-8 pb-8">
					<Container>
						{/* customer's testimonials  */}
						<CustomersTestimonials />

						{/* divider  */}
						<hr className="my-lg-12 my-8" />

						{/* simple pricing plans */}
						<SimplePricingPlans />
					</Container>
				</section>

				{/* cta with bg color  */}

				<CTAFreeTrial
					title='Just try it out! You’ll fall in love'
					subtitle='Get things done'
					description='Designed for modern companies looking to launch a simple, premium and modern website and apps.'
					btntext='Try For Free'
					btnlink='#'
				/>

			</main>

			{/* Footer with center alignment */}
			<FooterCenter />
		</Fragment>
	);
};

export default LandingSass;
