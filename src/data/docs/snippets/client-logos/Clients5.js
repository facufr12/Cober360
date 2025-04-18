// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import LogosTopHeading3 from 'components/marketing/common/clientlogos/LogosTopHeading3';

// import data files
import LogoList1 from 'data/marketing/clientlogos/LogoList1';

export const Clients5 = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <LogosTopHeading3
                    title="TRUSTED BY OVER 12,500 GREAT TEAMS"
                    logos={LogoList1}
                    limit={5}
                />
            </Card>
        </section>
    )
}

export const Clients5Code = `
// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import LogosTopHeading3 from 'components/marketing/common/clientlogos/LogosTopHeading3';

// import data files
import LogoList1 from 'data/marketing/clientlogos/LogoList1';

export const Clients5Example = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <LogosTopHeading3
                    title="TRUSTED BY OVER 12,500 GREAT TEAMS"
                    logos={LogoList1}
                    limit={5}
                />
            </Card>
        </section>
    )
}
`.trim();