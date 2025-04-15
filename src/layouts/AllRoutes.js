import { Route, Routes, Navigate } from 'react-router-dom';
import 'assets/scss/theme.scss';

// Layouts
import DashboardIndex from 'layouts/dashboard/DashboardIndex';
import AuthLayout from 'layouts/dashboard/AuthLayout';
import HelpCenterLayout from 'layouts/marketing/HelpCenterLayout';
import DashboardIndexCompact from 'layouts/dashboard/DashboardIndexCompact';
import DashboardIndexTop from 'layouts/dashboard/DashboardIndexTop';
import JobListingLayout from 'layouts/marketing/JobListingLayout';
import MailLayout from './dashboard/MailLayout';
import ChatLayout from './dashboard/ChatLayout';
import TaskKanbanLayout from './dashboard/TaskKanbanLayout';
import HelpCenterTransparentLayout from 'layouts/marketing/HelpCenterTransparentLayout';
import EcommerceLayout from './dashboard/EcommerceLayout';
import DefaultDocsLayout from './docs/DefaultDocsLayout';
import DefaultLayout from 'layouts/marketing/DefaultLayout';
import LayoutFooterLinks from 'layouts/marketing/LayoutFooterLinks';
import BlankLayout from 'layouts/marketing/BlankLayout';
import NotFound from 'layouts/marketing/NotFound';
import AcademyLayout from 'layouts/marketing/AcademyLayout';

// Componentes de autenticación
import SignIn from 'components/dashboard/authentication/SignIn';
import SignUp from 'components/dashboard/authentication/SignUp';
import ForgetPassword from 'components/dashboard/authentication/ForgetPassword';
import Notifications from 'components/dashboard/authentication/Notifications';

// Componentes del dashboard
import Overview from 'components/dashboard/overview/Overview';
import Analytics from 'components/dashboard/analytics/Analytics';
import AllCourses from 'components/dashboard/courses/all-courses/AllCourses';
import CoursesCategory from 'components/dashboard/courses/CoursesCategory';
import CategorySingle from 'components/dashboard/courses/CategorySingle';
import Instructor from 'components/dashboard/user/Instructor';
import Students from 'components/dashboard/user/Students';
import CMSDashboard from 'components/dashboard/cms/CMSDashboard';
import AllPosts from 'components/dashboard/cms/all-posts/AllPosts';
import AddNewPost from 'components/dashboard/cms/AddNewPost';
import Category from 'components/dashboard/cms/Category';
import General from 'components/dashboard/settings/General';
import Google from 'components/dashboard/settings/Google';
import Social from 'components/dashboard/settings/Social';
import SocialLogin from 'components/dashboard/settings/SocialLogin';
import Payment from 'components/dashboard/settings/Payment';
import SMTPServer from 'components/dashboard/settings/SMTPServer';
import ProjectGrid from 'components/dashboard/projects/grid/ProjectGrid';
import ProjectList from 'components/dashboard/projects/list/ProjectList';
import CreateProject from 'components/dashboard/projects/create-project/CreateProject';
import ProjectBudget from 'components/dashboard/projects/single/budget/ProjectBudget';
import ProjectFiles from 'components/dashboard/projects/single/files/ProjectFiles';
import ProjectOverview from 'components/dashboard/projects/single/overview/ProjectOverview';
import ProjectSummary from 'components/dashboard/projects/single/summary/ProjectSummary';
import ProjectTask from 'components/dashboard/projects/single/task/ProjectTask';
import ProjectTeam from 'components/dashboard/projects/single/team/ProjectTeam';
import Mail from 'components/dashboard/mail-app/mail/Mail';
import MailDraft from 'components/dashboard/mail-app/mail-draft/MailDraft';
import MailDetails from 'components/dashboard/mail-app/mail-details/MailDetails';
import TaskKanban from 'components/dashboard/task-kanban/Kanban';
import Chat from 'components/dashboard/chat/Chat';
import Calendar from 'components/dashboard/calendar/Calendar';
import ProductGrid from 'components/dashboard/ecommerce/products/ProductGrid';
import ProductGridWithSidebar from 'components/dashboard/ecommerce/products/ProductGridWithSidebar';
import ProductsList from 'components/dashboard/ecommerce/products/product-list/ProductsList';
import ProductSingle from 'components/dashboard/ecommerce/products/ProductSingle';
import ProductSingleV2 from 'components/dashboard/ecommerce/products/ProductSingleV2';
import AddProduct from 'components/dashboard/ecommerce/products/AddProduct';
import Checkout from 'components/dashboard/ecommerce/checkout/Checkout';
import ShoppingCart from 'components/dashboard/ecommerce/cart/ShoppingCart';
import Orders from 'components/dashboard/ecommerce/orders/orders/Orders';
import OrderSingle from 'components/dashboard/ecommerce/orders/OrderSingle';
import OrderSummary from 'components/dashboard/ecommerce/orders/OrderSummary';
import OrderHistory from 'components/dashboard/ecommerce/orders/OrderHistory';
import CustomersList from 'components/dashboard/ecommerce/customers/CustomersList';
import CustomerSingle from 'components/dashboard/ecommerce/customers/CustomerSingle';
import AddCustomer from 'components/dashboard/ecommerce/customers/AddCustomer';

// Componentes de marketing
import CourseIndex from 'components/marketing/pages/courses/course-index/CourseIndex';
import CourseCategory from 'components/marketing/pages/courses/course-category/CourseCategory';
import CourseSingle from 'components/marketing/pages/courses/course-single/CourseSingle';
import CourseSingle2 from 'components/marketing/pages/courses/course-single2/CourseSingle2';
import CourseResume from 'components/marketing/pages/courses/course-resume/CourseResume';
import CourseCheckout from 'components/marketing/pages/courses/course-checkout/CourseCheckout';
import CourseFilterPage from 'components/marketing/pages/courses/course-filter-page/CourseFilterPage';
import AddNewCourse from 'components/marketing/pages/courses/add-new-course/AddNewCourse';
import CoursePath from 'components/marketing/pages/courses/course-path/CoursePath';
import CoursePathSingle from 'components/marketing/pages/courses/course-path-single/CoursePathSingle';
import About from 'components/marketing/pages/about/About';
import Pricing from 'components/marketing/pages/pricing/Pricing';
import ComparePlan from 'components/marketing/pages/compare-plan/ComparePlan';
import Contact from 'components/marketing/pages/contact/Contact';
import HelpCenter from 'components/marketing/pages/help-center/help-center/HelpCenter';
import HelpCenterFAQ from 'components/marketing/pages/help-center/help-center-faq/HelpCenterFAQ';
import HelpCenterGuide from 'components/marketing/pages/help-center/help-center-guide/HelpCenterGuide';
import HelpCenterGuideSingle from 'components/marketing/pages/help-center/help-center-guide-single/HelpCenterGuideSingle';
import HelpCenterSupport from 'components/marketing/pages/help-center/help-center-support/HelpCenterSupport';
import BlogListing from 'components/marketing/blog/BlogListing';
import BlogArticleSingle from 'components/marketing/blog/BlogArticleSingle';
import BlogCategory from 'components/marketing/blog/BlogCategory';
import BlogSidebar from 'components/marketing/blog/BlogSidebar';
import Career from 'components/marketing/pages/career/career/Career';
import CareerList from 'components/marketing/pages/career/career-list/CareerList';
import CareerSingle from 'components/marketing/pages/career/career-single/CareerSingle';
import ComingSoon from 'components/marketing/pages/specialty/ComingSoon';
import Error404 from 'components/marketing/pages/specialty/Error404';
import MaintenanceMode from 'components/marketing/pages/specialty/MaintenanceMode';
import TermsAndConditions from 'components/marketing/pages/specialty/TermsAndConditions';
import LandingCourses from 'components/marketing/landings/landing-courses/LandingCourses';
import CourseLead from 'components/marketing/landings/course-lead/CourseLead';
import RequestAccess from 'components/marketing/landings/request-access/RequestAccess';
import LandingSass from 'components/marketing/landings/landing-sass/LandingSass';
import HomeAcademy from 'components/marketing/landings/home-academy/HomeAcademy';
import LandingJob from 'components/marketing/landings/landing-job/LandingJob';
import LandingEducation from 'components/marketing/landings/landing-education/LandingEducation';
import JobsList from 'components/marketing/pages/jobs/listing/JobsList';
import JobSingle from 'components/marketing/pages/jobs/listing/JobSingle';
import CompanyList from 'components/marketing/pages/jobs/company-list/CompanyList';
import CompanyAbout from 'components/marketing/pages/jobs/company/About';
import CompanyReviews from 'components/marketing/pages/jobs/company/Reviews';
import CompanyJobs from 'components/marketing/pages/jobs/company/Jobs';
import CompanyBenifits from 'components/marketing/pages/jobs/company/Benifits';
import CompanyPhotos from 'components/marketing/pages/jobs/company/Photos';
import PostAJob from 'components/marketing/pages/jobs/post-a-job/PostAJob';
import UploadResume from 'components/marketing/pages/jobs/upload-resume/UploadResume';
import InstructorDashboard from 'components/marketing/instructor/Dashboard';
import InstructorMyCourses from 'components/marketing/instructor/MyCourses';
import InstructorReviews from 'components/marketing/instructor/Reviews';
import Earnings from 'components/marketing/instructor/Earnings';
import InstructorOrders from 'components/marketing/instructor/Orders';
import InstructorStudents from 'components/marketing/instructor/Students';
import ViewProfile from 'components/marketing/instructor/ViewProfile';
import InstructorQuiz from 'components/marketing/instructor/Quiz';
import InstructorQuizSingle from 'components/marketing/instructor/QuizSingle';
import InstructorQuizResult from 'components/marketing/instructor/QuizResult';
import StudentDashboard from 'components/marketing/student/Dashboard';
import DeleteProfile from 'components/marketing/account-settings/DeleteProfile';
import EditProfile from 'components/marketing/account-settings/EditProfile';
import LinkedAccounts from 'components/marketing/account-settings/LinkedAccounts';
import AccountNotifications from 'components/marketing/account-settings/Notifications';
import StudentPayment from 'components/marketing/account-settings/Payment';
import ProfilePrivacy from 'components/marketing/account-settings/ProfilePrivacy';
import Security from 'components/marketing/account-settings/Security';
import SocialProfiles from 'components/marketing/account-settings/SocialProfiles';
import Subscriptions from 'components/marketing/account-settings/Subscriptions';
import StudentQuiz from 'components/marketing/student/Quiz';
import StudentQuizStart from 'components/marketing/student/quiz-start/QuizStart';
import StudentQuizAttempt from 'components/marketing/student/QuizAttempt';
import StudentQuizResult from 'components/marketing/student/QuizResult';
import BillingInfo from 'components/marketing/account-settings/BillingInfo';
import Payouts from 'components/marketing/account-settings/Payouts';
import Invoice from 'components/marketing/account-settings/Invoice';
import InvoiceDetails from 'components/marketing/account-settings/InvoiceDetails';
import PortfolioList from 'components/marketing/pages/portfolio/PortfolioList';
import PortfolioSingle from 'components/marketing/pages/portfolio/PortfolioSingle';
import Mentor from 'components/marketing/landings/mentor/Mentor';
import MentorList from 'components/marketing/pages/mentor/list/MentorList';
import MentorSingle from 'components/marketing/pages/mentor/single/MentorSingle';

// Componentes de documentación
import Introduction from 'components/docs/getting-started/Introduction';
import EnvironmentSetUp from 'components/docs/getting-started/EnvironmentSetUp';
import GeetingStarted from 'components/docs/getting-started/GeetingStarted';
import CustomizeTheme from 'components/docs/getting-started/CustomizeTheme';
import APIIntegration from 'components/docs/getting-started/APIIntegration';
import ResourcesAssets from 'components/docs/getting-started/ResourcesAssets';
import FileStructure from 'components/docs/getting-started/FileStructure';
import ChangeLog from 'components/docs/getting-started/changelog/Changelog';
import Colors from 'components/docs/foundation/Colors';
import Shadows from 'components/docs/foundation/Shadows';
import Typography from 'components/docs/foundation/Typography';
import AccordionsSnippets from 'components/docs/snippet/AccordionsSnippets';
import CardsSnippets from 'components/docs/snippet/CardsSnippets';
import ChartsSnippets from 'components/docs/snippet/ChartsSnippets';
import ClientLogosSnippets from 'components/docs/snippet/ClientLogosSnippets';
import CTAsSnippets from 'components/docs/snippet/CTAsSnippets';
import FeaturesSnippets from 'components/docs/snippet/FeaturesSnippets';
import FootersSnippets from 'components/docs/snippet/FootersSnippets';
import HeadersSnippets from 'components/docs/snippet/HeadersSnippets';
import HeroSectionsSnippets from 'components/docs/snippet/HeroSectionsSnippets';
import ImageGridSnippets from 'components/docs/snippet/ImageGridSnippets';
import IntegrationsSnippets from 'components/docs/snippet/IntegrationsSnippets';
import PricingSnippets from 'components/docs/snippet/PricingSnippets';
import ReviewsSnippets from 'components/docs/snippet/ReviewsSnippets';
import SlidersSnippets from 'components/docs/snippet/SlidersSnippets';
import SnippetIntroduction from 'components/docs/snippet/SnippetIntroduction';
import StatsSnippets from 'components/docs/snippet/StatsSnippets';
import TablesSnippets from 'components/docs/snippet/TablesSnippets';
import TeamsSnippets from 'components/docs/snippet/TeamsSnippets';
import TestimonialsSnippets from 'components/docs/snippet/TestimonialsSnippets';
import UserProfilesSnippets from 'components/docs/snippet/UserProfilesSnippets';
import ChecksRadios from 'components/docs/forms/ChecksRadios';
import FloatingLabels from 'components/docs/forms/FloatingLabels';
import FormControls from 'components/docs/forms/FormControls';
import FormText from 'components/docs/forms/FormText';
import BSInputGroup from 'components/docs/forms/BSInputGroup';
import Layouts from 'components/docs/forms/Layouts';
import Range from 'components/docs/forms/Range';
import BSSelect from 'components/docs/forms/BSSelect';
import Validation from 'components/docs/forms/Validation';
import Accordions from 'components/docs/bs-components/Accordions';
import Alerts from 'components/docs/bs-components/Alerts';
import AvatarStyles from 'components/docs/bs-components/AvatarStyles';
import Badges from 'components/docs/bs-components/Badges';
import Breadcrumbs from 'components/docs/bs-components/Breadcrumbs';
import Buttons from 'components/docs/bs-components/Buttons';
import ButtonGroup from 'components/docs/bs-components/ButtonGroup';
import Cards from 'components/docs/bs-components/Cards';
import Carousels from 'components/docs/bs-components/Carousels';
import CloseButtons from 'components/docs/bs-components/CloseButtons';
import Collapses from 'components/docs/bs-components/Collapses';
import Dropdowns from 'components/docs/bs-components/Dropdowns';
import Listgroups from 'components/docs/bs-components/Listgroups';
import Navbars from 'components/docs/bs-components/Navbars';
import Navs from 'components/docs/bs-components/Navs';
import BSOffcanvas from 'components/docs/bs-components/BSOffcanvas';
import Overlays from 'components/docs/bs-components/Overlays';
import Paginations from 'components/docs/bs-components/Paginations';
import Popovers from 'components/docs/bs-components/Popovers';
import Progress from 'components/docs/bs-components/Progress';
import Spinners from 'components/docs/bs-components/Spinners';
import Modals from 'components/docs/bs-components/Modals';
import Tables from 'components/docs/bs-components/Tables';
import Toasts from 'components/docs/bs-components/Toasts';
import Tooltips from 'components/docs/bs-components/Tooltips';
import BasicTables from 'components/docs/tables/basic/BasicTables';
import Datatables from 'components/docs/tables/Datatables';

const AllRoutes = () => {
  return (
    <Routes>
      {/* Rutas de autenticación (punto de entrada principal) */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/authentication/sign-in" element={<SignIn />} />
        <Route path="/authentication/sign-up" element={<SignUp />} />
        <Route path="/authentication/forget-password" element={<ForgetPassword />} />
        <Route path="/authentication/notifications" element={<Notifications />} />
      </Route>

      {/* Rutas del dashboard */}
      <Route element={<DashboardIndex />}>
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/courses/all-courses" element={<AllCourses />} />
        <Route path="/courses/courses-category" element={<CoursesCategory />} />
        <Route path="/courses/category-single" element={<CategorySingle />} />
        <Route path="/user/instructor" element={<Instructor />} />
        <Route path="/user/students" element={<Students />} />
        <Route path="/cms/cms-dashboard" element={<CMSDashboard />} />
        <Route path="/cms/all-posts" element={<AllPosts />} />
        <Route path="/cms/add-new-post" element={<AddNewPost />} />
        <Route path="/cms/category" element={<Category />} />
        <Route path="/settings/general" element={<General />} />
        <Route path="/settings/google" element={<Google />} />
        <Route path="/settings/social" element={<Social />} />
        <Route path="/settings/social-login" element={<SocialLogin />} />
        <Route path="/settings/payment" element={<Payment />} />
        <Route path="/settings/smtp-server" element={<SMTPServer />} />
        <Route path="/dashboard/projects/grid" element={<ProjectGrid />} />
        <Route path="/dashboard/projects/list" element={<ProjectList />} />
        <Route path="/dashboard/projects/create-project" element={<CreateProject />} />
        <Route path="/dashboard/projects/single/budget" element={<ProjectBudget />} />
        <Route path="/dashboard/projects/single/files" element={<ProjectFiles />} />
        <Route path="/dashboard/projects/single/overview" element={<ProjectOverview />} />
        <Route path="/dashboard/projects/single/summary" element={<ProjectSummary />} />
        <Route path="/dashboard/projects/single/task" element={<ProjectTask />} />
        <Route path="/dashboard/projects/single/team" element={<ProjectTeam />} />
        <Route path="/dashboard/calendar" element={<Calendar />} />
        <Route path="/dashboard/layouts/layout-vertical" element={<Overview />} />
      </Route>

      {/* Rutas con EcommerceLayout */}
      <Route element={<EcommerceLayout />}>
        <Route path="/dashboard/ecommerce/products/product-grid" element={<ProductGrid />} />
        <Route path="/dashboard/ecommerce/products/product-grid-with-sidebar" element={<ProductGridWithSidebar />} />
        <Route path="/dashboard/ecommerce/products" element={<ProductsList />} />
        <Route path="/dashboard/ecommerce/products/product-single" element={<ProductSingle />} />
        <Route path="/dashboard/ecommerce/products/product-single-v2" element={<ProductSingleV2 />} />
        <Route path="/dashboard/ecommerce/products/add-product" element={<AddProduct />} />
        <Route path="/dashboard/ecommerce/shopping-cart" element={<ShoppingCart />} />
        <Route path="/dashboard/ecommerce/checkout" element={<Checkout />} />
        <Route path="/dashboard/ecommerce/orders" element={<Orders />} />
        <Route path="/dashboard/ecommerce/order-single" element={<OrderSingle />} />
        <Route path="/dashboard/ecommerce/order-summary" element={<OrderSummary />} />
        <Route path="/dashboard/ecommerce/order-history" element={<OrderHistory />} />
        <Route path="/dashboard/ecommerce/customers" element={<CustomersList />} />
        <Route path="/dashboard/ecommerce/customer/:id" element={<CustomerSingle />} />
        <Route path="/dashboard/ecommerce/add-customer" element={<AddCustomer />} />
      </Route>

      {/* Rutas con MailLayout */}
      <Route element={<MailLayout />}>
        <Route path="/dashboard/mail" element={<Mail />} />
        <Route path="/dashboard/mail-draft" element={<MailDraft />} />
        <Route path="/dashboard/mail-details" element={<MailDetails />} />
      </Route>

      {/* Rutas con ChatLayout */}
      <Route element={<ChatLayout />}>
        <Route path="/dashboard/chat" element={<Chat />} />
      </Route>

      {/* Rutas con TaskKanbanLayout */}
      <Route element={<TaskKanbanLayout />}>
        <Route path="/dashboard/task-kanban" element={<TaskKanban />} />
      </Route>

      {/* Rutas con DashboardIndexTop */}
      <Route element={<DashboardIndexTop />}>
        <Route path="/dashboard/layouts/layout-horizontal" element={<Overview />} />
      </Route>

      {/* Rutas con DashboardIndexCompact */}
      <Route element={<DashboardIndexCompact />}>
        <Route path="/dashboard/layouts/layout-compact" element={<Overview />} />
      </Route>

      {/* Rutas de marketing con DefaultLayout */}
      <Route element={<DefaultLayout />}>
        <Route path="/marketing/course-category/" element={<CourseCategory />} />
        <Route path="/marketing/courses/course-checkout/" element={<CourseCheckout />} />
        <Route path="/marketing/courses/course-filter-page/" element={<CourseFilterPage />} />
        <Route path="/marketing/instructor/add-new-course/" element={<AddNewCourse />} />
        <Route path="/marketing/courses/course-path/" element={<CoursePath />} />
        <Route path="/marketing/courses/course-path-single/" element={<CoursePathSingle />} />
        <Route path="/marketing/courses/course-single/" element={<CourseSingle />} />
        <Route path="/marketing/courses/course-single2/" element={<CourseSingle2 />} />
        <Route path="/marketing/pages/pricing/" element={<Pricing />} />
        <Route path="/marketing/blog/article-single/:id" element={<BlogArticleSingle />} />
        <Route path="/marketing/blog/category/" element={<BlogCategory />} />
        <Route path="/marketing/blog/listing/" element={<BlogListing />} />
        <Route path="/marketing/instructor/dashboard/" element={<InstructorDashboard />} />
        <Route path="/marketing/instructor/instructor-my-courses/" element={<InstructorMyCourses />} />
        <Route path="/marketing/instructor/instructor-reviews/" element={<InstructorReviews />} />
        <Route path="/marketing/instructor/instructor-earnings/" element={<Earnings />} />
        <Route path="/marketing/instructor/instructor-orders/" element={<InstructorOrders />} />
        <Route path="/marketing/instructor/instructor-students/" element={<InstructorStudents />} />
        <Route path="/marketing/instructor/instructor-payouts/" element={<Payouts />} />
        <Route path="/marketing/instructor/instructor-edit-profile/" element={<EditProfile />} />
        <Route path="/marketing/instructor/instructor-profile/" element={<ViewProfile />} />
        <Route path="/marketing/instructor/instructor-security/" element={<Security />} />
        <Route path="/marketing/instructor/instructor-social-profiles/" element={<SocialProfiles />} />
        <Route path="/marketing/instructor/instructor-notifications/" element={<AccountNotifications />} />
        <Route path="/marketing/instructor/instructor-profile-privacy/" element={<ProfilePrivacy />} />
        <Route path="/marketing/instructor/instructor-delete-profile/" element={<DeleteProfile />} />
        <Route path="/marketing/instructor/quiz/" element={<InstructorQuiz />} />
        <Route path="/marketing/instructor/quiz/single/" element={<InstructorQuizSingle />} />
        <Route path="/marketing/instructor/quiz/result/" element={<InstructorQuizResult />} />
        <Route path="/marketing/student/dashboard/" element={<StudentDashboard />} />
        <Route path="/marketing/student/student-subscriptions/" element={<Subscriptions />} />
        <Route path="/marketing/student/student-billing-info/" element={<BillingInfo />} />
        <Route path="/marketing/student/student-payment/" element={<StudentPayment />} />
        <Route path="/marketing/student/student-invoice/" element={<Invoice />} />
        <Route path="/marketing/student/student-invoice-details/" element={<InvoiceDetails />} />
        <Route path="/marketing/student/student-edit-profile/" element={<EditProfile />} />
        <Route path="/marketing/student/student-security/" element={<Security />} />
        <Route path="/marketing/student/student-social-profiles/" element={<SocialProfiles />} />
        <Route path="/marketing/student/student-notifications/" element={<AccountNotifications />} />
        <Route path="/marketing/student/student-profile-privacy/" element={<ProfilePrivacy />} />
        <Route path="/marketing/student/student-delete-profile/" element={<DeleteProfile />} />
        <Route path="/marketing/student/student-linked-accounts/" element={<LinkedAccounts />} />
        <Route path="/marketing/student/quiz/" element={<StudentQuiz />} />
        <Route path="/marketing/student/quiz/attempt/" element={<StudentQuizAttempt />} />
        <Route path="/marketing/student/quiz/start/" element={<StudentQuizStart />} />
        <Route path="/marketing/student/quiz/result/" element={<StudentQuizResult />} />
      </Route>

      {/* Rutas con BlankLayout */}
      <Route element={<BlankLayout />}>
        <Route path="/marketing/landings/landing-education/" element={<LandingEducation />} />
        <Route path="/marketing/landings/landing-courses/" element={<LandingCourses />} />
        <Route path="/marketing/landings/course-lead/" element={<CourseLead />} />
        <Route path="/marketing/landings/request-access/" element={<RequestAccess />} />
        <Route path="/marketing/landings/landing-sass/" element={<LandingSass />} />
        <Route path="/marketing/pages/about/" element={<About />} />
        <Route path="/marketing/courses/course-resume/" element={<CourseResume />} />
        <Route path="/marketing/pages/contact/" element={<Contact />} />
        <Route path="/marketing/blog/sidebar/" element={<BlogSidebar />} />
        <Route path="/marketing/specialty/terms-and-conditions/" element={<TermsAndConditions />} />
        <Route path="/marketing/landings/mentor" element={<Mentor />} />
        <Route path="/marketing/mentor/list" element={<MentorList />} />
        <Route path="/marketing/mentor/single" element={<MentorSingle />} />
      </Route>

      {/* Rutas con NotFound */}
      <Route element={<NotFound />}>
        <Route path="/marketing/specialty/coming-soon/" element={<ComingSoon />} />
        <Route path="/marketing/specialty/404-error/" element={<Error404 />} />
        <Route path="/marketing/specialty/maintenance-mode/" element={<MaintenanceMode />} />
      </Route>

      {/* Rutas con JobListingLayout */}
      <Route element={<JobListingLayout />}>
        <Route path="/marketing/landings/landing-job/" element={<LandingJob />} />
        <Route path="/marketing/jobs/listing/job-list/" element={<JobsList />} />
        <Route path="/marketing/jobs/listing/:slug" element={<JobSingle />} />
        <Route path="/marketing/jobs/company-list/" element={<CompanyList />} />
        <Route path="/marketing/jobs/company/about/" element={<CompanyAbout />} />
        <Route path="/marketing/jobs/company/reviews/" element={<CompanyReviews />} />
        <Route path="/marketing/jobs/company/jobs/" element={<CompanyJobs />} />
        <Route path="/marketing/jobs/company/benifits/" element={<CompanyBenifits />} />
        <Route path="/marketing/jobs/company/photos/" element={<CompanyPhotos />} />
        <Route path="/marketing/jobs/post-a-job/" element={<PostAJob />} />
        <Route path="/marketing/jobs/upload-resume/" element={<UploadResume />} />
      </Route>

      {/* Rutas con LayoutFooterLinks */}
      <Route element={<LayoutFooterLinks />}>
        <Route path="/marketing/portfolio/list/" element={<PortfolioList />} />
        <Route path="/marketing/portfolio/single/" element={<PortfolioSingle />} />
        <Route path="/marketing/pages/compare-plan/" element={<ComparePlan />} />
        <Route path="/marketing/pages/career/" element={<Career />} />
        <Route path="/marketing/pages/career-list/" element={<CareerList />} />
        <Route path="/marketing/pages/career-single/" element={<CareerSingle />} />
      </Route>

      {/* Rutas con AcademyLayout */}
      <Route element={<AcademyLayout />}>
        <Route path="/marketing/landings/home-academy/" element={<HomeAcademy />} />
      </Route>

      {/* Rutas con HelpCenterTransparentLayout */}
      <Route element={<HelpCenterTransparentLayout />}>
        <Route path="/marketing/help-center/" element={<HelpCenter />} />
      </Route>

      {/* Rutas con HelpCenterLayout */}
      <Route element={<HelpCenterLayout />}>
        <Route path="/marketing/help-center/faq/" element={<HelpCenterFAQ />} />
        <Route path="/marketing/help-center/guide/" element={<HelpCenterGuide />} />
        <Route path="/marketing/help-center/guide-single/:categoryslug/:articleslug" element={<HelpCenterGuideSingle />} />
        <Route path="/marketing/help-center/support/" element={<HelpCenterSupport />} />
      </Route>

      {/* Rutas con DefaultDocsLayout */}
      <Route element={<DefaultDocsLayout />}>
        <Route path="/docs/getting-started/introduction" element={<Introduction />} />
        <Route path="/docs/getting-started/environment-setup" element={<EnvironmentSetUp />} />
        <Route path="/docs/getting-started/getting-started" element={<GeetingStarted />} />
        <Route path="/docs/getting-started/customize-theme" element={<CustomizeTheme />} />
        <Route path="/docs/getting-started/api-integration" element={<APIIntegration />} />
        <Route path="/docs/getting-started/file-structure" element={<FileStructure />} />
        <Route path="/docs/getting-started/resources-assets" element={<ResourcesAssets />} />
        <Route path="/docs/getting-started/changeLog" element={<ChangeLog />} />
        <Route path="/docs/foundation/colors" element={<Colors />} />
        <Route path="/docs/foundation/shadows" element={<Shadows />} />
        <Route path="/docs/foundation/typography" element={<Typography />} />
        <Route path="/docs/snippet/introduction" element={<SnippetIntroduction />} />
        <Route path="/docs/snippet/accordions" element={<AccordionsSnippets />} />
        <Route path="/docs/snippet/cards" element={<CardsSnippets />} />
        <Route path="/docs/snippet/charts" element={<ChartsSnippets />} />
        <Route path="/docs/snippet/client-logos" element={<ClientLogosSnippets />} />
        <Route path="/docs/snippet/cta" element={<CTAsSnippets />} />
        <Route path="/docs/snippet/features" element={<FeaturesSnippets />} />
        <Route path="/docs/snippet/footers" element={<FootersSnippets />} />
        <Route path="/docs/snippet/headers" element={<HeadersSnippets />} />
        <Route path="/docs/snippet/hero-sections" element={<HeroSectionsSnippets />} />
        <Route path="/docs/snippet/images" element={<ImageGridSnippets />} />
        <Route path="/docs/snippet/integrations" element={<IntegrationsSnippets />} />
        <Route path="/docs/snippet/pricing" element={<PricingSnippets />} />
        <Route path="/docs/snippet/reviews" element={<ReviewsSnippets />} />
        <Route path="/docs/snippet/sliders" element={<SlidersSnippets />} />
        <Route path="/docs/snippet/stats" element={<StatsSnippets />} />
        <Route path="/docs/snippet/tables" element={<TablesSnippets />} />
        <Route path="/docs/snippet/team" element={<TeamsSnippets />} />
        <Route path="/docs/snippet/testimonials" element={<TestimonialsSnippets />} />
        <Route path="/docs/snippet/user-profile" element={<UserProfilesSnippets />} />
        <Route path="/docs/forms/checks-and-radios" element={<ChecksRadios />} />
        <Route path="/docs/forms/floating-labels" element={<FloatingLabels />} />
        <Route path="/docs/forms/form-controls" element={<FormControls />} />
        <Route path="/docs/forms/form-text" element={<FormText />} />
        <Route path="/docs/forms/input-group" element={<BSInputGroup />} />
        <Route path="/docs/forms/layouts" element={<Layouts />} />
        <Route path="/docs/forms/range" element={<Range />} />
        <Route path="/docs/forms/select" element={<BSSelect />} />
        <Route path="/docs/forms/validation" element={<Validation />} />
        <Route path="/docs/components/accordions" element={<Accordions />} />
        <Route path="/docs/components/alerts" element={<Alerts />} />
        <Route path="/docs/components/avatar" element={<AvatarStyles />} />
        <Route path="/docs/components/badges" element={<Badges />} />
        <Route path="/docs/components/breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/docs/components/buttons" element={<Buttons />} />
        <Route path="/docs/components/button-group" element={<ButtonGroup />} />
        <Route path="/docs/components/cards" element={<Cards />} />
        <Route path="/docs/components/carousels" element={<Carousels />} />
        <Route path="/docs/components/close-button" element={<CloseButtons />} />
        <Route path="/docs/components/collapse" element={<Collapses />} />
        <Route path="/docs/components/dropdowns" element={<Dropdowns />} />
        <Route path="/docs/components/list-group" element={<Listgroups />} />
        <Route path="/docs/components/modal" element={<Modals />} />
        <Route path="/docs/components/navs" element={<Navs />} />
        <Route path="/docs/components/offcanvas" element={<BSOffcanvas />} />
        <Route path="/docs/components/overlays" element={<Overlays />} />
        <Route path="/docs/components/navbar" element={<Navbars />} />
        <Route path="/docs/components/pagination" element={<Paginations />} />
        <Route path="/docs/components/popovers" element={<Popovers />} />
        <Route path="/docs/components/progress" element={<Progress />} />
        <Route path="/docs/components/spinners" element={<Spinners />} />
        <Route path="/docs/components/tables" element={<Tables />} />
        <Route path="/docs/components/toasts" element={<Toasts />} />
        <Route path="/docs/components/tooltips" element={<Tooltips />} />
        <Route path="/docs/tables/basic-tables" element={<BasicTables />} />
        <Route path="/docs/tables/datatables" element={<Datatables />} />
      </Route>

      {/* Redirección para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AllRoutes;