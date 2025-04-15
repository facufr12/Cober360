// import node module libraries
import { Fragment } from 'react';

// import sub components
import EasySteps from './EasySteps';
import ExploreMentors from './ExploreMentors';
import FREETrialSession from './FREETrialSession';
import TestimonialsByMentees from './TestimonialsByMentees';

// import custom components
import LogosTopBrands from 'components/marketing/common/clientlogos/LogosTopBrands';
import CTAMentor from 'components/marketing/common/call-to-action/CTAMentor';
import HeroTypedMentors from 'components/marketing/common/hero-sections/HeroTypedMentors';

// import required data files
import BrandLogoList from 'data/marketing/clientlogos/BrandLogoList';
import MentorListData from 'data/marketing/mentor/MentorListData';

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark';

const Mentor = () => {
    return (
        <Fragment>

            {/* Top Navbar */}
            <NavbarMentorPages />

            {/*   section  */}
            <main>

                {/* Hero section */}
                <HeroTypedMentors
                    title='Learn a new skill, launch a project, land your dream career.'
                    typedBefore='1-on-1'
                    typedArray={['Javascript', 'Startup', 'React', 'Marketing', 'Branding']}
                    typedAfter='Mentorship'
                    tags={['Frontend', 'Devops', 'UI/UX designer', 'Data Science', 'Full Stack', 'Backend', 'Data Analyst']}
                    marqueeData={MentorListData}
                />

                {/* Logo section */}
                <LogosTopBrands
                    title="Learn from founders/operators of top brands."
                    logos={BrandLogoList} />

                {/* Explore Mentors by Category */}
                <ExploreMentors />

                {/* FREE trial session */}
                <FREETrialSession />

                {/* Easy Steps */}
                <EasySteps />

                {/* Testimonials By Mentees */}
                <TestimonialsByMentees />

                {/* Call to action  */}
                <CTAMentor />

            </main>

            {/*   Footer with center alignment */}
            <FooterDark />

        </Fragment>
    )
}


export default Mentor