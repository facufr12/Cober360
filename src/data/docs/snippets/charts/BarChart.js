// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import { OrderColumnChartOptions, OrderColumnChartSeries } from 'data/charts/ChartData';

export const BarChart = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={OrderColumnChartOptions}
                        series={OrderColumnChartSeries}
                        height={287}
                        type="bar"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}

export const BarChartCode = `
// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import { OrderColumnChartOptions, OrderColumnChartSeries } from 'data/charts/ChartData';

export const BarChartExample = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={OrderColumnChartOptions}
                        series={OrderColumnChartSeries}
                        height={287}
                        type="bar"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}
`.trim();