// import node module libraries
import React, { Fragment, useEffect } from 'react'

// import sub components
import ExploreSkillCourses from './ExploreSkillCourses';
import BuildingSkills from './BuildingSkills';
import LearnLatestSkills from './LearnLatestSkills';
import FeaturesWithBullets from './FeaturesWithBullets';
import UpcomingWebinars from './UpcomingWebinars';

// import custom components
import LogosTopHeading3 from 'components/marketing/common/clientlogos/LogosTopHeading3';
import CTAStartLearning from 'components/marketing/common/call-to-action/CTAStartLearning';
import HeroEducationRightImage from 'components/marketing/common/hero-sections/HeroEducationRightImage';

// import layouts
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import FooterCenter from 'layouts/marketing/footers/FooterWithLinks';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

const LandingEducation = () => {
  useEffect(() => {
    document.body.className = 'bg-white';
  });

  return (
    <Fragment>
      {/*   Landing Page Navbar */}
      <NavbarLanding center />

      {/*   section  */}
      <main>

        {/*  learn today hero section */}
        <HeroEducationRightImage
          headingPart1='Learn today’s most in-'
          headingPart2='demand-skills'
          description='Classes & Courses website template to start creating your stunning website. All templates are fully customizable.'
          bulletArray={['No credit card required', 'Customer service 24/7', 'No setup fee', 'Cancel any time']}
          buttonText='Explore Online Courses'
          buttonLink='#'
        />

        {/*  trusted */}
        <LogosTopHeading3
          title="TRUSTED BY OVER 12,500 GREAT TEAMS"
          logos={LogoList2}
          limit={5}
        />

        {/*  Explore skill courses */}
        <ExploreSkillCourses />

        {/*  Building strong foundational skills */}
        <BuildingSkills />

        {/*  Learn latest Skills */}
        <LearnLatestSkills />

        {/*  Features With Bullets */}
        <hr className="my-0 bg-transparent text-white" />
        <FeaturesWithBullets />

        {/*  upcoming webinars */}
        <UpcomingWebinars />

        {/*  call to action - find right course */}
        <CTAStartLearning
          title='Let’s find the right course for you!'
          subtitle='…and achieve their learning goals. With our expert tutors, your goals are closer than ever!'
          btntext='Start learning'
          btnlink='#'
        />

      </main>

      {/*   Footer with center alignment */}
      <FooterCenter />

    </Fragment>
  )
}

export default LandingEducation