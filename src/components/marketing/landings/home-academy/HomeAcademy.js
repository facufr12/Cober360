// import node module libraries
import { Fragment } from 'react';

// import sub components
import AcademyStats from './AcademyStats';
import MostPopularCourses from './MostPopularCourses';
import WhatCustomersSay from './WhatCustomersSay';

// import custom components
import CTABecomeAnInstructor from 'components/marketing/common/call-to-action/CTABecomeAnInstructor';
import HeroAcademy from 'components/marketing/common/hero-sections/HeroAcademy';

const HomeAcademy = () => {
	return (
		<Fragment>
			{/* Hero Academy banner section */}
			<HeroAcademy
				bulletArray={['Most trusted education platform']}
				title='Grow your skills and advance career'
				description='Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.'
				buttonText='Join Free Now'
				buttonLink='#'
				youTubeVideoID='JRzWRZahOVU' />

			{/* Various acedamy statistics  */}
			<AcademyStats />

			{/* Most Popular Courses */}
			<MostPopularCourses />

			{/* Call to Action Become an instructor */}
			<CTABecomeAnInstructor
				title='Become an instructor today'
				description='Instructors from around the world teach millions of students on Geeks. We provide the tools and skills to teach what you love.'
				btntext='Start Teaching Today'
				btnlink='#'
			/>

			{/* What our customers say */}
			<WhatCustomersSay />
		</Fragment>
	);
};
export default HomeAcademy;
