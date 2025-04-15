// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import LogosTopHeadingInverseDark from 'components/marketing/common/clientlogos/LogosTopHeadingInverseDark';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

export const Clients3 = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className='pb-10'>
                <LogosTopHeadingInverseDark
                    title="TRUSTED BY MILLIONS OF DEVELOPERS & THOUSANDS OF ENTERPRISE TEAMS"
                    logos={LogoList2}
                    limit={5}
                    inverse={false}
                />
            </Card>
        </section>
    )
}

export const Clients3Code = `
// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import LogosTopHeadingInverseDark from 'components/marketing/common/clientlogos/LogosTopHeadingInverseDark';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

export const Clients3Example = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className='pb-10'>
                <LogosTopHeadingInverseDark
                    title="TRUSTED BY MILLIONS OF DEVELOPERS & THOUSANDS OF ENTERPRISE TEAMS"
                    logos={LogoList2}
                    limit={5}
                    inverse={false}
                />
            </Card>
        </section>
    )
}
`.trim();