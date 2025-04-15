// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import custom components
import GKLightbox from 'components/elements/lightbox/GKLightbox'

// import media files
import GalleryImg1 from 'assets/images/job/jpg/job-gallery-img-1.jpg';
import GalleryImg2 from 'assets/images/job/jpg/job-gallery-img-2.jpg';
import GalleryImg3 from 'assets/images/job/jpg/job-gallery-img-3.jpg';
import GalleryImg4 from 'assets/images/job/jpg/job-gallery-img-4.jpg';
import GalleryImg5 from 'assets/images/job/jpg/job-gallery-img-5.jpg';
import GalleryImg6 from 'assets/images/job/jpg/job-gallery-img-6.jpg';
import GalleryImg7 from 'assets/images/job/jpg/job-gallery-img-7.jpg';
import GalleryImg8 from 'assets/images/job/jpg/job-gallery-img-8.jpg';

export const ImageGrid4 = () => {
    const images = [
        { image: GalleryImg1 },
        { image: GalleryImg2 },
        { image: GalleryImg3 },
        { image: GalleryImg4 },
        { image: GalleryImg5 },
        { image: GalleryImg6 },
        { image: GalleryImg7 },
        { image: GalleryImg8 }
    ];
    return (
        <Row className="mt-6">
            {images.map((item, index) => {
                return (
                    <Col lg={3} md={4} xs={12} key={index}>
                        <div className="mb-4">
                            <GKLightbox image={item.image} />
                        </div>
                    </Col>
                )
            })}
        </Row>
    );
}

export const ImageGrid4Code = `
// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import custom components
import GKLightbox from 'components/elements/lightbox/GKLightbox'

// import media files
import GalleryImg1 from 'assets/images/job/jpg/job-gallery-img-1.jpg';
import GalleryImg2 from 'assets/images/job/jpg/job-gallery-img-2.jpg';
import GalleryImg3 from 'assets/images/job/jpg/job-gallery-img-3.jpg';
import GalleryImg4 from 'assets/images/job/jpg/job-gallery-img-4.jpg';
import GalleryImg5 from 'assets/images/job/jpg/job-gallery-img-5.jpg';
import GalleryImg6 from 'assets/images/job/jpg/job-gallery-img-6.jpg';
import GalleryImg7 from 'assets/images/job/jpg/job-gallery-img-7.jpg';
import GalleryImg8 from 'assets/images/job/jpg/job-gallery-img-8.jpg';

export const ImageGrid4Example = () => {
    const images = [
        { image: GalleryImg1 },
        { image: GalleryImg2 },
        { image: GalleryImg3 },
        { image: GalleryImg4 },
        { image: GalleryImg5 },
        { image: GalleryImg6 },
        { image: GalleryImg7 },
        { image: GalleryImg8 }
    ];
    return (
        <Row className="mt-6">
            {images.map((item, index) => {
                return (
                    <Col lg={3} md={4} xs={12} key={index}>
                        <div className="mb-4">
                            <GKLightbox image={item.image} />
                        </div>
                    </Col>
                )
            })}
        </Row>
    );
}`.trim();