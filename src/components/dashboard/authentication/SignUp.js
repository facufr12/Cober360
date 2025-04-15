// import node module libraries
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import DarkLightMode from 'layouts/DarkLightMode';
// import media files
import Logo from 'assets/images/coberimages/logo-cober.svg'

const SignUp = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
	  first_name: '',
	  last_name: '',
	  email: '',
	  phone_number: '',
	  password: '',
	  password_confirmation: ''
	});
  
	const [errors, setErrors] = useState({});
  
	const handleChange = (e) => {
	  setFormData({ ...formData, [e.target.name]: e.target.value });
  
	  if (errors[e.target.name]) {
		setErrors({ ...errors, [e.target.name]: null });
	  }
  
	  if (
		e.target.name === 'password_confirmation' ||
		(e.target.name === 'password' && formData.password_confirmation)
	  ) {
		const password = e.target.name === 'password' ? e.target.value : formData.password;
		const confirmation = e.target.name === 'password_confirmation'
		  ? e.target.value
		  : formData.password_confirmation;
  
		if (password && confirmation && password !== confirmation) {
		  setErrors({ ...errors, password_confirmation: 'Las contraseñas no coinciden' });
		} else {
		  setErrors({ ...errors, password_confirmation: null });
		}
	  }
	};
  
	const validateForm = () => {
	  const newErrors = {};
	  if (formData.password !== formData.password_confirmation) {
		newErrors.password_confirmation = 'Las contraseñas no coinciden';
	  }
	  setErrors(newErrors);
	  return Object.keys(newErrors).length === 0;
	};
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
  
	  if (!validateForm()) return;
  
	  const dataToSend = {
		first_name: formData.first_name,
		last_name: formData.last_name,
		email: formData.email,
		phone_number: formData.phone_number,
		password: formData.password
	  };
  
	  try {
		const response = await axios.post('http://localhost:3001/register', dataToSend);
		alert('Registro exitoso: ' + (response.data.message || 'Tu cuenta ha sido creada.'));
		navigate('/');
	  } catch (error) {
		const errorMessage = error.response?.data?.message || 'Error en el registro.';
		alert('Error: ' + errorMessage);
	  }
	};
  
	return (
	  <Row className="align-items-center justify-content-center g-0 min-vh-100">
	  <Col lg={7} md={8} className="py-8 py-xl-0">
		<Card className="shadow-lg">
		  <Card.Body className="p-5"> {/* Más padding interno */}
			<div className="d-flex justify-content-end mb-3">
			  <DarkLightMode />
			</div>
			<div className="mb-4 text-center">
			  <Link to="/">
				<Image src={Logo} className="mb-4" alt="Logo Cober" style={{ width: '160px' }} />
			  </Link>
			  <h1 className="mb-2 fw-bold fs-2">Registro de Usuario</h1>
			  <span className="text-muted">
				¿Ya tienes una cuenta?
				<Link to="/" className="ms-1">
				  Inicia sesión
				</Link>
			  </span>
			</div>
	
			<Form onSubmit={handleSubmit}>
			  <Row className="g-3">
				<Col md={6}>
				  <Form.Label>Nombre</Form.Label>
				  <Form.Control
					size="lg"
					type="text"
					name="first_name"
					value={formData.first_name}
					onChange={handleChange}
					placeholder="Tu nombre"
					required
				  />
				</Col>
				<Col md={6}>
				  <Form.Label>Apellido</Form.Label>
				  <Form.Control
					size="lg"
					type="text"
					name="last_name"
					value={formData.last_name}
					onChange={handleChange}
					placeholder="Tu apellido"
					required
				  />
				</Col>
				<Col md={6}>
				  <Form.Label>Email</Form.Label>
				  <Form.Control
					size="lg"
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="ejemplo@correo.com"
					required
				  />
				</Col>
				<Col md={6}>
				  <Form.Label>Teléfono</Form.Label>
				  <Form.Control
					size="lg"
					type="text"
					name="phone_number"
					value={formData.phone_number}
					onChange={handleChange}
					placeholder="Número de teléfono"
				  />
				</Col>
				<Col md={6}>
				  <Form.Label>Contraseña</Form.Label>
				  <Form.Control
					size="lg"
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					placeholder="Contraseña segura"
					required
				  />
				</Col>
				<Col md={6}>
				  <Form.Label>Confirmar Contraseña</Form.Label>
				  <Form.Control
					size="lg"
					type="password"
					name="password_confirmation"
					value={formData.password_confirmation}
					onChange={handleChange}
					placeholder="Repite tu contraseña"
					isInvalid={!!errors.password_confirmation}
					required
				  />
				  <Form.Control.Feedback type="invalid">
					{errors.password_confirmation}
				  </Form.Control.Feedback>
				</Col>
				<Col lg={12}>
				  <Form.Check type="checkbox" id="check-terms" required>
					<Form.Check.Input type="checkbox" />
					<Form.Check.Label>
					  Acepto los
					  <Link to="/pages/terms-and-conditions"> Términos </Link>
					  y
					  <Link to="/pages/privacy-policy"> Política de Privacidad</Link>
					</Form.Check.Label>
				  </Form.Check>
				</Col>
				<Col lg={12} className="d-grid gap-2">
				  <Button size="lg" variant="primary" type="submit">
					Registrarse
				  </Button>
				</Col>
			  </Row>
			</Form>
		  </Card.Body>
		</Card>
	  </Col>
	</Row>
	
	);
  };
  
  export default SignUp;
  