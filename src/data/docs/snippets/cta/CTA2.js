// import custom components
import CTAStartLearning from "components/marketing/common/call-to-action/CTAStartLearning";

export const CTA2 = () => {
    const title = 'Let’s find the right course for you!';
    const subtitle = '…and achieve their learning goals. With our expert tutors, your goals are closer than ever!';
    const btntext = 'Start learning';
    const btnlink = '#';
    return (<CTAStartLearning
        title={title}
        subtitle={subtitle}
        btntext={btntext}
        btnlink={btnlink}
    />)
}

export const CTA2Code = `
// import custom components
import CTAStartLearning from "components/marketing/common/call-to-action/CTAStartLearning";

export const CTA2Example = () => {
    const title = 'Let’s find the right course for you!';
    const subtitle = '…and achieve their learning goals. With our expert tutors, your goals are closer than ever!';
    const btntext = 'Start learning';
    const btnlink = '#';
    return (<CTAStartLearning
        title={title}
        subtitle={subtitle}
        btntext={btntext}
        btnlink={btnlink}
    />)
}
`.trim();