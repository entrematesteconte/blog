import styles from './footer.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { emailjs } from 'emailjs-com';
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
        const { nombre, apellido, email, asunto, mensaje } = data;


        try {
            const templateParams = {
                nombre,
                apellido,
                email,
                asunto,
                mensaje
            };

            await emailjs.send(
                process.env.NEXT_APP_SERVICE_ID,
                process.env.NEXT_APP_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_APP_USER_ID
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
                                    <div className="col-md-9"><p>+59899123123</p></div>
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
                                    <input type="text"
                                        name="lastname"
                                        placeholder="Apellido"
                                        className='form-control formInput' />
                                </div>
                                <div className="row">
                                    <input type="email"
                                        name="email"
                                        placeholder="Email"
                                        className='form-control formInput' />
                                </div>
                                <div className="row">
                                    <input type="text"
                                        name="subject"
                                        placeholder="Asunto"
                                        className='form-control formInput' />
                                </div>
                                <div className="row">
                                    <textarea
                                        name="textarea"
                                        placeholder="Deje su mensaje aquí."
                                        rows="6"
                                        className='form-control formInput' />
                                </div>
                                <div className="row">
                                    <button
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
                    border-radius: 35px;
                    margin-bottom: 25px;
                    width: 25%;
                    margin-left: auto;
                }

                @media (max-width: 992px) {
                    
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