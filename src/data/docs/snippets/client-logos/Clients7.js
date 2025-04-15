// import custom components
import LogosTopHeadingOffset2 from 'components/marketing/common/clientlogos/LogosTopHeadingOffset2';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

export const Clients7 = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeadingOffset2 limit={5} offset={1} logos={LogoList2} />
        </section>
    )
}

export const Clients7Code = `
// import custom components
import LogosTopHeadingOffset2 from 'components/marketing/common/clientlogos/LogosTopHeadingOffset2';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

export const Clients7Example = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeadingOffset2 limit={5} offset={1} logos={LogoList2} />
        </section>
    )
}
`.trim();