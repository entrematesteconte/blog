import styles from './footer.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


export default function Contact() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [disabled, setDisabled] = useState(false);

    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {
        const { nombre, email, asunto, mensaje } = data;

        const userId = "user_Dlthw2iANtPpFLzyFUEYz";
        const serviceId = "entremates_contact";
        const templateId = "template_contact";

        try {
            const templateParams = {
                nombre,
                email,
                asunto,
                mensaje
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                userId
            );
            reset();

            toastifySuccess();

            setDisabled(false);
        } catch (e) {
            console.log(e);
        };
    }
    return (
        <>
            <div className={styles.footer}>
                <div className="container" id="contact">
                    <div className="row">
                        <div className="col-md margin-left">
                            <div className="container">
                                <h2>Contacto</h2><br />
                                <div className="row">
                                    <div className="col-md-3"><i className="far fa-envelope"></i></div>
                                    <div className="col-md-9"><p>entrematesteconte@gmail.com</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3"><i className="fas fa-phone-alt"></i></div>
                                    <div className="col-md-9"><p>+59891241618</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3"><a href="https://www.instagram.com/entrematesteconte/?hl=es-la" target="_blank"><i className="fab fa-instagram"></i></a></div>
                                    <div className="col-md-9"><a href="https://www.instagram.com/entrematesteconte/?hl=es-la" target="_blank"><p>@entrematesteconte</p></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <h2 className="form-title">Dejanos tu mensaje</h2><br />
                            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div className="row">
                                    <input type="text"
                                        name="nombre"
                                        {...register('nombre', {
                                            required: { value: true, message: 'Por favor ingresa tu nombre' },
                                            maxLength: {
                                                value: 20, message: 'Máximo 20 caracteres'
                                            }
                                        })}
                                        placeholder="Nombre"
                                        className='form-control formInput' />
                                    {errors.nombre && <span className='errorMessage'>{errors.nombre.message}</span>}
                                </div>
                                <div className="row">
                                    <input type="email"
                                        name="email"
                                        {...register('email', {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })}
                                        placeholder="Email"
                                        className='form-control formInput' />
                                    {errors.email && (
                                        <span className='errorMessage'>Ingresa un email válido</span>
                                    )}
                                </div>
                                <div className="row">
                                    <input type="text"
                                        name="asunto"
                                        {...register('asunto', {
                                            required: { value: true, message: 'Ingresa un asunto' },
                                            maxLength: {
                                                value: 40,
                                                message: 'Sobrepasado el límite de caracteres'
                                            }
                                        })}
                                        placeholder="Asunto"
                                        className='form-control formInput' />
                                    {errors.asunto && (
                                        <span className='errorMessage'>{errors.asunto.message}</span>
                                    )}
                                </div>
                                <div className="row">
                                    <textarea
                                        name="mensaje"
                                        {...register('mensaje', {
                                            required: true
                                        })}
                                        placeholder="Deje su mensaje aquí."
                                        rows={6}
                                        className='form-control formInput' />
                                    {errors.mensaje && <span className='errorMessage'>Ingresa un mensaje</span>}
                                </div>
                                <div className="row">
                                    <button
                                        id="submit-button"
                                        className="submit-btn"
                                        type="submit">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            
                .col-md h2 {
                    margin-top: 25px;
                    margin-bottom: 25px;
                }
                
                i {
                    font-size: 50px;
                    margin-bottom: 30px;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                .col-md-9 {
                    font-size: 1.5em;
                }

                .form-title {
                    margin-left: 90px;
                }

                #contact-form {
                    width: 70%;
                    margin-left: auto;
                    margin-right: auto;
                }
                #contact-form .row input {
                    border-radius: 35px;
                    margin-bottom: 25px;
                }
                #contact-form .row textarea {
                    border-radius: 35px;
                    margin-bottom: 25px;
                }
                #contact-form .row button {
                    border-radius: 10px;
                    margin-bottom: 25px;
                    width: 30%;
                    margin-left: auto;
                }
        

                @media (max-width: 768px) {
                    .row {
                        width: auto;
                    }
                    i {
                        font-size: 30px;
                    }
                    h2 {
                        text-align: center;
                    }
                    .form-title {
                        margin-left: 0;
                    }
                    .col-md-3 {
                        text-align: center;
                        height: 20px;
                    }
                    p {
                        display: block;
                        text-align: center;
                    }
                    .col-md .margin-left {
                        margin-left: auto;
                        text-align: center;
                    }
                }

            `}</style>
        </>
    )
}