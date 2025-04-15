// import node module libraries
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import DarkLightMode from 'layouts/DarkLightMode';

// import media files
import Logo from 'assets/images/coberimages/logo-cober.svg';

const SignIn = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({ email: '', password: '' });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Opcional: podrías validar aquí si email y password tienen algo escrito

		// Redirige directamente al dashboard
		navigate("/dashboard/overview");
	};

	return (
		<Fragment>
			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={6} md={8} className="py-8 py-xl-0">
					<Card className="shadow-lg">
						<Card.Body className="p-5">
							<div className="d-flex justify-content-end mb-3">
								<DarkLightMode />
							</div>

							<div className="mb-4 text-center">
								<Link to="/">
									<Image
										src={Logo}
										className="mb-4"
										alt="Logo Cober"
										style={{ width: "160px" }}
									/>
								</Link>

								<h1 className="mb-1 fw-bold fs-2">Inicio de Sesión</h1>
								<span>
									¿No tienes cuenta?
									<Link to="/authentication/sign-up" className="ms-1">
										Crear cuenta
									</Link>
								</span>
							</div>

							<Form onSubmit={handleSubmit}>
								<Row>
									<Col lg={12} className="mb-3">
										<Form.Label>Email</Form.Label>
										<Form.Control
											size="lg"
											type="email"
											id="email"
											placeholder="Ingrese su email"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</Col>
									<Col lg={12} className="mb-3">
										<Form.Label>Contraseña</Form.Label>
										<Form.Control
											size="lg"
											type="password"
											id="password"
											placeholder="**************"
											value={formData.password}
											onChange={handleChange}
											required
										/>
									</Col>
									<Col lg={12} className="mb-3">
										<div className="d-md-flex justify-content-between align-items-center">
											<Form.Group className="mb-3 mb-md-0" controlId="formBasicCheckbox">
												<Form.Check type="checkbox" label="Recordar Contraseña" />
											</Form.Group>
											<Link to="/authentication/forget-password">
												¿Olvidó su contraseña?
											</Link>
										</div>
									</Col>
									<Col lg={12} className="d-grid gap-2">
										<Button size="lg" variant="primary" type="submit">
											Iniciar Sesión
										</Button>
									</Col>
								</Row>
							</Form>

							<hr className="my-4" />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default SignIn;
