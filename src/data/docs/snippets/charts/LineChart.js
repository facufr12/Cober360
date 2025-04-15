// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import { EarningsChartOptions, EarningsChartSeries } from 'data/charts/ChartData';

export const LineChart = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={EarningsChartOptions}
                        series={EarningsChartSeries}
                        type="line"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}

export const LineChartCode = `
// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import { EarningsChartOptions, EarningsChartSeries } from 'data/charts/ChartData';

export const LineChartExample = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={EarningsChartOptions}
                        series={EarningsChartSeries}
                        type="line"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}
`.trim();