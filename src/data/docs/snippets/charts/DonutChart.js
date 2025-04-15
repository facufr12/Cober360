// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import { TrafficChartOptions, TrafficChartSeries } from 'data/charts/ChartData';

export const DonutChart = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={TrafficChartOptions}
                        series={TrafficChartSeries}
                        type="donut"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}

export const DonutChartCode = `
// import node module libraries
import { Card } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import { TrafficChartOptions, TrafficChartSeries } from 'data/charts/ChartData';

export const DonutChartExample = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={TrafficChartOptions}
                        series={TrafficChartSeries}
                        type="donut"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}
`.trim();