// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import LogosTopHeading2 from 'components/marketing/common/clientlogos/LogosTopHeading2';

// import data files
import LogoList1 from 'data/marketing/clientlogos/LogoList1';

export const Clients2 = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <LogosTopHeading2
                    title="Loved by over 5 million users from companies like"
                    logos={LogoList1}
                />
            </Card>
        </section>
    )
}

export const Clients2Code = `
// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import LogosTopHeading2 from 'components/marketing/common/clientlogos/LogosTopHeading2';

// import data files
import LogoList1 from 'data/marketing/clientlogos/LogoList1';

export const Clients2Example = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <LogosTopHeading2
                    title="Loved by over 5 million users from companies like"
                    logos={LogoList1}
                />
            </Card>
        </section>
    )
}
`.trim();