// import custom components
import LogosTopHeading from "components/marketing/common/clientlogos/LogosTopHeading";

// import data files
import LogoList2 from "data/marketing/clientlogos/LogoList2";

export const Clients4 = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeading title="Featured In" logos={LogoList2} />
        </section>
    )
}

export const Clients4Code = `
// import custom components
import LogosTopHeading from "components/marketing/common/clientlogos/LogosTopHeading";

// import data files
import LogoList2 from "data/marketing/clientlogos/LogoList2";

export const Clients4Example = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeading title="Featured In" logos={LogoList2} />
        </section>
    )
}
`.trim();