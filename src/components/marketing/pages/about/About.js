// import node module libraries
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

// import sub components
import TeamGridRoundImages from './TeamGridRoundImages';
import FeaturesList from './FeaturesList';
import HeroContent from './HeroContent';
import CTAButton from './CTAButton';
import Stat from './Stat';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

// import custom components
import JustifiedGallery from 'components/marketing/common/gallery/JustifiedGallery';

// import media files
import GalleryImage1 from 'assets/images/about/geeksui-img-1.jpg';
import GalleryImage2 from 'assets/images/about/geeksui-img-2.jpg';
import GalleryImage3 from 'assets/images/about/geeksui-img-3.jpg';
import GalleryImage4 from 'assets/images/about/geeksui-img-4.jpg';
import GalleryImage5 from 'assets/images/about/geeksui-img-5.jpg';
import GalleryImage6 from 'assets/images/about/geeksui-img-6.jpg';

const About = () => {
	const GalleryImages = [
		{ id: 1, image: GalleryImage1 },
		{ id: 2, image: GalleryImage2 },
		{ id: 3, image: GalleryImage3 },
		{ id: 4, image: GalleryImage4 },
		{ id: 5, image: GalleryImage5 },
		{ id: 6, image: GalleryImage6 }
	];
	return (
		<Fragment>
			{/* Default Navbar */}
			<NavbarDefault login />

			<main>
				<section className="py-10 bg-white">
					<Container>
						{/* Hero Title */}
						<HeroContent />

						{/* Justified Gallery Section */}
						<JustifiedGallery images={GalleryImages} />

						{/* 4 Columns Stat */}
						<Stat />
					</Container>
				</section>

				{/* Three Columns Features Section */}
				<FeaturesList />

				{/* Team Section in Rounded Image with Grid Layout */}
				<TeamGridRoundImages />

				{/* Hero Call to Action */}
				<CTAButton />
			</main>

			{/* Footer with links */}
			<FooterWithLinks />
		</Fragment>
	);
};

export default About;
