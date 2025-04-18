// import node module libraries
import { Fragment } from 'react';

// import custom components
import HeroFindJobs from 'components/marketing/common/hero-sections/HeroFindJobs';
import LogosTopHeadingOffset2 from 'components/marketing/common/clientlogos/LogosTopHeadingOffset2';

// import sub components
import BrowseJobCategories from './BrowseJobCategories';
import CustomerStories from './CustomerStories';
import HowItWorks from './Process';
import LatestJobOpening from './LatestJobOpening';
import TopCompanies from './TopCompanies';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

const LandingJob = () => {
	return (
		<Fragment>

			{/* Find your dream job section */}
			<HeroFindJobs
				title='Find your dream job that you love to do.'
				description='The largest remote work community in the world. Sign up and post a job or create your developer profile.'
				totalJobs={30642}
				totalCompanies={5717}
			/>

			{/* Logos section  */}
			<section className="py-8 bg-white">
				<LogosTopHeadingOffset2 limit={5} offset={1} logos={LogoList2} />
			</section>

			{/* Latest Job Opening section */}
			<LatestJobOpening />

			{/* How It Works section */}
			<HowItWorks />

			{/* Browse Category section */}
			<BrowseJobCategories />

			{/* Customer stories section */}
			<CustomerStories />

			{/* Top companies hiring section */}
			<TopCompanies />
		</Fragment>
	);
};

export default LandingJob;
