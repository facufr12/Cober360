// import node module libraries
import { Row, Col } from "react-bootstrap";

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";;

// import required data files
import { introductionLinks } from "data/docs/SidebarContentLinks";

// import custom components
import PageHeadingDescription from '../common/PageHeadingDescription';

const GeetingStarted = () => {
    return (
        <DocsInnerLayout links={introductionLinks} id="intro">
            <div className="docs-content mx-xxl-9">

                <PageHeadingDescription
                    title="Geeks React"
                    description="Welcome to the Geeks ReactJS version of the original Geeks theme."
                />
                <hr className="mb-5 mt-7" />
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h2 className="fw-bold">Getting Started</h2>
                        <p className="lead">
                            A professional Geeks React Kit that comes with plenty of
                            ready-to-use components that will help you to build more
                            beautiful application (web app) and frontend pages.{' '}
                        </p>

                        <p>
                            Geeks UI Kit is built with the most popular front-end framework{' '}
                            <a
                                href="https://react-bootstrap.github.io/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                React Bootstrap
                            </a>{' '}
                            with react-scripts.
                        </p>
                        <p>
                            This doc will guide you to understand how Geeks-React theme is
                            organized, basics of how to customize, and how to compile from
                            the source code if you want.
                        </p>
                        <div id="setting-up-locally" className='mb-3'></div>
                        <hr className="mb-5 mt-5" />

                        <h2 className="mb-0 mt-5 fw-bold" >Running in Local environment</h2>
                        <p>This project is scaffolded using Create React App.</p>

                        <ol>
                            <li>
                                <h4 className="mb-0 fw-bold">Node.js</h4>
                                <p>
                                    Before proceeding you&apos;ll need to have the latest <b>(&gt;=18.20.x)</b> stable (LTS){' '}
                                    <a
                                        href="https://nodejs.org/en/download/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {' '}
                                        nodejs.
                                    </a>{' '}
                                    Install <code>Node.js</code> or already have it installed on
                                    your machine move to next step.<br />
                                    Here preferable versions are 18.20.4(LTS) or 20.18.0(LTS)
                                </p>
                            </li>
                            <li>
                                {' '}
                                <h4 className="mb-0 fw-bold">Install Geeks React</h4>
                                <p>
                                    Open the <span>"geeks-react” </span>directory with your cmd
                                    or terminal. Open the project folder and install its
                                    dependencies.{' '}
                                </p>
                                <pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
                                    cd geeks-react{' '}
                                </pre>
                                <pre className="prism-code language-jsx mb-2  bg-dark text-white fs-5">
                                    npm install{' '}
                                </pre>
                                <p>
                                    This command will download all the necessary dependencies
                                    for geeks in the node_modules directory.
                                </p>
                            </li>
                            <li>
                                <h4 className="mb-0 fw-bold">Start</h4>
                                <p>
                                    Run <code>npm start</code>. A local web server will start at{' '}
                                    <a
                                        href="http://localhost:3000"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        http://localhost:3000{' '}
                                    </a>
                                    Once the installation is done, you can now start your app by
                                    running.
                                </p>
                                <pre className="prism-code language-jsx  bg-dark text-white fs-5">
                                    npm start
                                </pre>
                            </li>
                        </ol>
                        <hr className="mb-5 mt-5" id="production-build" />
                        <h2 className="mb-0 fw-bold">Creating a Production Build.</h2>
                        <p>Production build of your app.</p>
                        <ol>
                            <li>
                                <div className="mb-4">
                                    <p>
                                        Run <code>npm run build</code> command in your project
                                        directory to make the production build app, this command will create an optimized production build files by compililing, merging and minifying all the source code and will put them in the <code>build</code> folder.
                                    </p>
                                    <pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
                                        npm run build
                                    </pre>
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <p> To run the production build locally follow below commands it will run the app at <code>http://localhost:3000 </code>, and on network you can access it with <code> http://192.168.1.3:3000</code></p>
                                    <pre className="prism-code language-jsx  bg-dark text-white fs-5 mb-2">
                                        npm install -g serve<br />
                                        serve -s build
                                    </pre>
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <p> Open Static Server for the production build</p>
                                    <pre className="prism-code language-jsx  bg-dark text-white fs-5 mb-2">
                                        node server.js
                                    </pre>
                                    <p>
                                        Once you execute above command, the production build run
                                        locally at <code>http://localhost:9000</code>.
                                    </p>
                                </div>
                            </li>
                        </ol>

                    </Col>
                </Row>

            </div>
        </DocsInnerLayout>
    );
};

export default GeetingStarted;
