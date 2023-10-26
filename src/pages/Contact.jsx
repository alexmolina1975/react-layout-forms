import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
	// NO se utiliza este estado ya...
	const [formValues, setFormValues] = useState({
		nombre: '',
		email: ''
	});

	const { handleSubmit, register } = useForm();

	console.log(formValues);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<br></br>
				<label htmlFor='nombre'>Nombre</label>
				<input type='text' {...register('nombre')} />
				<br></br>
				<br></br>
				<label htmlFor='email'>Email</label>
				<input type='email' {...register('email')} />
				<br></br>
				<br></br>

				<input type='submit' value='ENVIAR' />
			</form>
		</>
	);
};

const handleChange = (event, formValues, setFormValues) => {
	setFormValues({ ...formValues, [event.target.name]: event.target.value });
};

/*
const handleSubmit = event => {
	event.preventDefault();
};
*/

/*
 
const handleName = (event, formValues, setFormValues) => {
	setFormValues({ ...formValues, nombre: event.target.value });
};

const handleEmail = (event, formValues, setFormValues) => {
	setFormValues({ ...formValues, email: event.target.value });
};
*/

const onSubmit = (data, event) => {
	console.log(data);
	console.log(event);
};

export default Contact;
