// import node module libraries
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Image } from 'react-bootstrap';

// import popup youtube video
import ModalVideo from 'react-modal-video';

// import media files
import BGThumb from 'assets/images/background/acedamy-img/bg-thumb.svg';
import GirlImage from 'assets/images/background/acedamy-img/girl-image.png';
import Frame1 from 'assets/images/background/acedamy-img/frame-1.svg';
import Frame2 from 'assets/images/background/acedamy-img/frame-2.svg';
import Target from 'assets/images/background/acedamy-img/target.svg';
import Sound from 'assets/images/background/acedamy-img/sound.svg';
import Trophy from 'assets/images/background/acedamy-img/trophy.svg';
import PlayBtn from 'assets/images/svg/play-btn.svg';

const HeroAcademy = ({
	bulletArray = ['Most trusted education platform'],
	title = 'Grow your skills and advance career',
	description = 'Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.',
	buttonText = 'Join Free Now',
	buttonLink = '#',
	youTubeVideoID = 'JRzWRZahOVU'
}) => {
	const [isOpen, setOpen] = useState(false);
	const [YouTubeURL] = useState(youTubeVideoID);

	return (
		<section className="py-lg-16 py-8 bg-white">
			<Container>
				<Row className="align-items-center">
					<Col lg={6} className="mb-6 mb-lg-0">
						<div className="">
							{bulletArray.map((item, index) => {
								return (
									<h5 className="text-dark mb-4" key={index}>
										<i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2"></i>{item}</h5>
								)
							})
							}

							<h1 className="display-3 fw-bold mb-3">{title}</h1>
							<p className="pe-lg-10 mb-5">{description}</p>
							<Link to={buttonLink} className="btn btn-primary">
								{buttonText}
							</Link>
							<Link
								to="#"
								onClick={() => setOpen(true)}
								className="popup-youtube fs-4 text-inherit ms-3"
							>
								<Image src={PlayBtn} alt="" className="me-2" />
								Watch Demo
							</Link>
							{/* video popup */}
							<ModalVideo
								channel="youtube"
								autoplay
								isOpen={isOpen}
								videoId={YouTubeURL}
								onClose={() => setOpen(false)}
							/>
						</div>
					</Col>
					<Col lg={6} className="d-flex justify-content-center">
						<div className="position-relative">
							<Image src={BGThumb} alt="" className="" />
							<Image
								src={GirlImage}
								alt=""
								className="position-absolute end-0 bottom-0"
							/>
							<Image
								src={Frame1}
								alt=""
								className="position-absolute top-0 ms-lg-n10 ms-n19"
							/>
							<Image
								src={Frame2}
								alt=""
								className="position-absolute bottom-0 start-0 ms-lg-n14 ms-n6 mb-n7"
							/>
							<Image
								src={Target}
								alt=""
								className="position-absolute bottom-0 mb-10 ms-n10 ms-lg-n1 "
							/>
							<Image
								src={Sound}
								alt=""
								className="position-absolute top-0  start-0 mt-18 ms-lg-n19 ms-n8"
							/>
							<Image
								src={Trophy}
								alt=""
								className="position-absolute top-0  start-0 ms-lg-n14 ms-n5"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroAcademy;
