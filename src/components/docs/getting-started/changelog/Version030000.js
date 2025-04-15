/* eslint-disable */
// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version030000 = () => {

	const NewMediaFiles = [
		'/src/assets/images/docs/*.*',
		'/src/assets/images/snippets/*.*'
	];
	const NewReactFiles = [
		'/src/components/docs/*.*',
		'/src/layouts/marketing/navbars/NavbarBoxCenterMenu.js',
		'/src/layouts/marketing/footers/GoToTop.js, FooterCenterLinks.js, FooterWithLanguageSelection.js',
		'/src/components/marketing/common/gallery/*.*',
		'/src/components/marketing/common/hero-sections/*.*',
		'/src/components/marketing/common/ratings/RatingProgressBar.js',
		'/src/components/marketing/common/tables/GKPositionListTable.js',
		'/src/components/marketing/common/testimonials/TestimonialCardWithLogo.js, TestimonialCard4.js',
		'/src/components/marketing/common/call-to-action/CTAStartLearning.js, <br/>CTABecomeAnInstructor.js, CTAFreeTrial.js, CTAEarlyAccess.js',
		'/src/components/marketing/common/cards/CategoryCard.js, ReviewCard.js, <br/>StudentEnrolledCard.js, StudentInstructorInfoCard.js, InstructorProfileSummaryCard.js',
	]
	const NewDataFiles = [
		'/src/data/docs/*.*',
		'/src/data/docs/snippets/integrations/*.*'
	]
	const UpdatedDataFiles = [
		'/src/data/code/BreadcrumbCode.js',
		'/src/data/code/CollapsesCode.js',
		'/src/data/marketing/CoursePathData.js',
	]
	const UpdatedReactFiles = [
		'/src/AppConfig.js',
		'/src/components/dashboard/authentication/Notifications.js',
		'/src/components/dashboard/chat/sidebar/*.*',
		'/src/components/dashboard/chat/chatbox/ChatHeader.js, Message.js',
		'/src/components/dashboard/cms/all-posts/PostsTable.js',
		'/src/components/dashboard/cms/AddNewPost.js, CMSDashboard.js',
		'/src/components/dashboard/courses/all-courses/CoursesTable.js',
		'/src/components/dashboard/ecommerce/checkout/steps/PaymentSelection.js',
		'/src/components/dashboard/ecommerce/products/product-list/ProductsTable.js',
		'/src/components/dashboard/mail-app/mail-details/MailDetailsBody.js',
		'/src/components/dashboard/projects/grid/ProjectCard.js',
		'/src/components/dashboard/projects/list/ProjectListTable.js',
		'/src/components/dashboard/projects/single/files/FilesTable.js',
		'/src/components/dashboard/projects/single/summary/Assignee.js',
		'/src/components/dashboard/projects/single/CommonHeaderTabs.js',
		'/src/components/dashboard/task-kanban/KanbanTask.js',
		'/src/components/marketing/blog/*.*',
		'/src/components/marketing/account-settings/InvoiceDetails.js',
		'/src/components/marketing/common/cards/MentorSummaryCard.js',
		'/src/components/marketing/common/features/FeatureTopIconCard.js',
		'/src/components/marketing/courses/course-path-single/AuthorTab.js',
		'/src/components/marketing/landings/course-lead/CourseDescriptionSection.js',
		'/src/components/marketing/landings/home-academy/HomeAcademy.js',
		'/src/components/marketing/landings/landing-education/LandingEducation.js',
		'/src/components/marketing/landings/landing-job/LandingJob.js',
		'/src/components/marketing/landings/landing-sass/LandingSass.js,<br/> SimplePricingPlans.js, CustomersTestimonials.js',
		'/src/components/marketing/landings/landing-courses/LandingCourses.js, <br/>CoursesTabSlider.js, WorldClassInstructors.js',
		'/src/components/marketing/landings/mentor/TestimonialsByMentees.js, Mentor.js',
		'/src/components/marketing/landings/request-access/RequestAccess.js',
		'/src/components/marketing/navbars/DocumentMenu.js',
		'/src/components/marketing/pages/about/About.js, FeaturesList.js',
		'/src/components/marketing/pages/career/career-list/HeroCollage.js, CareerPositions.js',
		'/src/components/marketing/pages/career/career/Collage.js',
		'/src/components/marketing/pages/compare-plan/DeveloperGeeks.js',
		'/src/components/marketing/pages/courses/course-path/CoursePath.js',
		'/src/components/marketing/pages/courses/course-checkout/CourseCheckout.js',
		'/src/components/marketing/pages/courses/course-single/ReviewsTab.js',
		'/src/components/marketing/pages/courses/course-index/CourseIndex.js',
		'/src/components/marketing/pages/pricing/Pricing.js',
		'/src/components/elements/highlight-code/HighlightCode.js',
		'/src/components/elements/editor/ReactQuillEditor.js',
		'/src/context/providers/AppProvider.js',
		'/src/layouts/docs/*.*',
		'/src/layouts/AllRoutes.js',
		'/src/layouts/marketing/navbars/DarkLightMode.js',
		'/src/layouts/marketing/navbars/mega-menu/NavbarMegaMenu.js',
		'/src/layouts/marketing/navbars/help-center/NavbarHelpCenter.js',
		'/src/layouts/marketing/navbars/NavbarBrandOnly.js, NavbarDefault.js,<br/> NavbarJobPages.js, NavbarLanding.js, NavbarMentorPages.js',
		'/src/layouts/marketing/footers/Footer.js, FooterCenter.js, FooterDark.js, FooterWithLinks.js',
		'/src/layouts/dashboard/DashboardIndexTop.js, DashboardIndexTop.js, NavbarVertical.js',
		'/src/layouts/dashboard/navbars/NavbarCompact.js',
		'/src/routes/docs/NavSidebar.js',
		'/src/routes/dashboard/DashboardRoutes.js',
	]

	const UpdatedSass = [
		'/src/assets/scss/theme.scss',
		'/src/assets/scss/theme/components/_breadcrumb.scss',
		'/src/assets/scss/theme/components/_docs.scss',
		'/src/assets/scss/theme/components/_reboot.scss',
		'/src/assets/scss/theme/vendor/range-slider-input/_range-slider-input.scss',
	]

	const MovedReactFiles = [
		'/src/components/dashboard/tables/*.*  ->  /src/docs/tables/*.*',
		'/src/components/dashboard/changelog/*.*  ->  /src/docs/getting-started/changelog/*.*',
		'/src/components/elements/bootstrap/forms/*.*  ->  /src/docs/forms/*.*',
		'/src/components/elements/bootstrap/*.*  ->  /src/docs/bootstrap-components/*.*',
		'/src/components/marketing/blog/BlogCard.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/blog/BlogCardFullWidth.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/landings/mentor/HeroTypedMentors.js -> /src/components/marketing/common/hero-sections/',
		'/src/components/marketing/landings/home-academy/BecomeAnInstructor.js -><br/>/src/components/marketing/common/call-to-action/CTABecomeAnInstructor.js (renamed)',
		'/src/components/marketing/landings/home-academy/HeroAcademy.js -><br/>/src/components/marketing/common/hero-sections/',
		'/src/components/marketing/landings/landing-sass/HeroGradient.js -><br/>/src/components/marketing/common/hero-sections/',
		'/src/components/marketing/landings/request-access/HeroFormLeft.js  -><br/>/src/components/marketing/common/call-to-action/CTAEarlyAccess.js (renamed)',
		'/src/components/marketing/landings/request-access/HeroFormCenter.js  -><br/>/src/components/marketing/common/hero-sections/',
		'/src/components/marketing/landings/course-lead/CourseDescriptionCard.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/landings/course-lead/HeroFormRight.js -><br/>/src/components/marketing/common/hero-sections/',
		'/src/components/marketing/landings/landing-courses/HeroTyped.js -><br/>/src/components/marketing/common/hero-sections/HeroTypedCourses.js  (renamed)',
		'/src/components/marketing/landings/landing-courses/InstructorCard -> /src/components/marketing/common/cards/',
		'/src/components/marketing/landings/landing-education/HeroRightImage.js -><br/>/src/components/marketing/common/hero-sections/HeroEducationRightImage.js  (renamed)',
		'/src/components/marketing/landings/landing-sass/SimplePricingCard.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/landings/mentor/TestimonialsByMentees/TestimonialModalPopup.js -><br/>/src/components/marketing/common/modal-popup/TestimonialModalPopup.js',
		'/src/components/marketing/pages/about/JustifiedGallery.js -> /src/components/marketing/common/gallery/',
		'/src/components/marketing/pages/courses/ProfileCard.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/pages/courses/CourseCard.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/pages/courses/course-index/HeroHeader.js -><br/>/src/components/marketing/common/hero-sections/HeroHeaderDefault.js  (renamed)',
		'/src/components/marketing/pages/courses/course-path/CoursePathCard.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/pages/pricing/PricingCard.js -> /src/components/marketing/common/cards/',
		'/src/components/marketing/pages/courses/CourseSlider.js -> /src/components/marketing/common/sliders/',
	]

	const DeletedReactFiles = [
		'/src/components/elements/range-slider/RangeSlider.js',
		'/src/components/marketing/common/call-to-action/CTADarkBG.js',
		'/src/components/marketing/common/call-to-action/CTALightBG.js',
		'/src/components/marketing/landings/landing-education/FindRightCourse.js',
		'/src/components/marketing/landings/landing-job/FindYourDreamJob.js',
	]

	return (
		<Row>
			<Col lg={12} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v3.0.0</code> - Nov 11, 2024
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks ReactJS Update{' '}
										[ <span className="text-danger">Breaking Update</span> ]</h4>
									<ul>
										<li>Added <code>bootstrap-icons, axios, react-quill-new, @react-input/mask</code> packages</li>
										<li>Removed <code>nouislider-react, react-table, react-quill, react-input-mask</code> packages</li>
										<li>Added <code>'Auto'</code> mode with light and dark theme mode</li>
										<li>Required packages are updated.</li>
										<li>Fixed a few bugs</li>
									</ul>
								</div>
								<div className="mb-3">
									<h4>New Components / Layout / Hook / React Files:</h4>
									<ul>
										{NewReactFiles.map((item, index) => {
											return (<li key={index}><code dangerouslySetInnerHTML={{ __html: item }} /></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>New Media Files:</h4>
									<ul>
										{NewMediaFiles.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>New Data Files:</h4>
									<ul>
										{NewDataFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated Components / Layout / Hook / React Files:</h4>
									<ul>
										{UpdatedReactFiles.map((item, index) => {
											return (<li key={index}><code dangerouslySetInnerHTML={{ __html: item }} /></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated SCSS Files:</h4>
									<ul>
										{UpdatedSass.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>


								<div className="mb-3">
									<h4>Updated Data Files:</h4>
									<ul>
										{UpdatedDataFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Moved Components / Layout / Hook / React Files:</h4>
									<ul>
										{MovedReactFiles.map((item, index) => {
											return (<li key={index}><code dangerouslySetInnerHTML={{ __html: item }} /></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Deleted Components / Layout / Hook / React Files:</h4>
									<ul>
										{DeletedReactFiles.map((item, index) => {
											return (<li key={index}><code dangerouslySetInnerHTML={{ __html: item }} /></li>)
										})}
									</ul>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version030000;
