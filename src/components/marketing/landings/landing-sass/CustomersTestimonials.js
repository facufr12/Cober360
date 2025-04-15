// import node module libraries
import { Col, Row, Image } from 'react-bootstrap';

// import custom components
import TestimonialCardWithLogo from 'components/marketing/common/testimonials/TestimonialCardWithLogo';

// import data files
import CustomersTestimonialsData from 'data/marketing/landing-sass/CustomersTestimonialsData';

const CustomersTestimonials = () => {
	return (
		<Row>
			{CustomersTestimonialsData.map((item, index) => {
				return (
					<Col lg={{ offset: 1, span: 5 }} md={6} xs={12} key={index}>
						<TestimonialCardWithLogo item={item} />
					</Col>
				);
			})}
		</Row>
	);
};

export default CustomersTestimonials;
