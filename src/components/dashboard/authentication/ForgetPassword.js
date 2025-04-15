// import node module libraries
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import DarkLightMode from 'layouts/DarkLightMode';
// import media files
import Logo from 'assets/images/coberimages/logo-cober.svg'

const ForgetPassword = () => {
	return (
		<Fragment>
			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={5} md={5} className="py-8 py-xl-0">
					<Card>
					<Card.Body className="p-6">
					<div className="d-flex justify-content-end mb-3">
			<DarkLightMode />
		  </div>
  <div className="mb-4 text-center">
    <Link to="/">
      <Image
        src={Logo}
        className="mb-4 mx-auto d-block"
        alt="Logo Cober"
        style={{ width: '160px' }}
      />
    </Link>
    <h1 className="mb-1 fw-bold">Recuperar Contraseña</h1>
  </div>

							{/* Form */}
							<Form>
								<Row>
									<Col lg={12} md={12} className="mb-3">
										{/*  email */}
										<Form.Label>Correo Electrónico</Form.Label>
										<Form.Control
											type="email"
											id="email"
											placeholder="Ingresa tu correo registrado"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3 d-grid gap-2">
										{/* Button */}
										<Button variant="primary" type="submit">
											Enviar Instructivo de recuperacion
										</Button>
									</Col>
								</Row>
								<span>
									Volver a incio de sesión <Link to="/">Inicio</Link>
								</span>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default ForgetPassword;
