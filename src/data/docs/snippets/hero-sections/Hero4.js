// import custom components
import HeroFindJobs from "components/marketing/common/hero-sections/HeroFindJobs";

export const Hero4 = () => {
    return <HeroFindJobs
        title='Find your dream job that you love to do.'
        description='The largest remote work community in the world. Sign up and post a job or create your developer profile.'
        totalJobs={30642}
        totalCompanies={5717}
    />
}

export const Hero4Code = `
// import custom components
import HeroFindJobs from "components/marketing/common/hero-sections/HeroFindJobs";

export const Hero4Example = () => {
    return <HeroFindJobs
        title='Find your dream job that you love to do.'
        description='The largest remote work community in the world. Sign up and post a job or create your developer profile.'
        totalJobs={30642}
        totalCompanies={5717}
    />
}`.trim();