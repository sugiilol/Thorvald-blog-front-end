import './ContactFormView.scss'
import { useForm } from "react-hook-form"

export default function ContactFormView() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        
        console.log(data)
    }
        

    return (
        <div className='contact-form-container'>
            <h1>Contactez-moi !</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='contact-header-part'>
                    <div className='contact-zone'>
                        <label htmlFor="">Nom</label>
                        <input {...register("name", {
                            required: true,
                            maxLength: 20,
                            minLength: 2,
                            pattern: /[A-Za-z]{2,20}/
                        },)} />
                        {errors.name && <span className='error-form'>Nom incorrect</span>}
                    </div>
                    <div className='contact-zone'>
                        <label htmlFor="">Prénom</label>
                        <input {...register("surname", {
                            required: true,
                            maxLength: 20,
                            minLength: 2,
                            pattern: /[A-Za-z]{2,20}/
                        },)} />
                        {errors.surname && <span className='error-form'>Prénom incorrect</span>}
                    </div>
                    <div className='contact-zone'>
                        <label htmlFor="">Genre</label>
                        <select {...register("gender", { required: true })}>
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                            <option value="poney">Poney des Landes</option>
                        </select>
                        {errors.gender && <span className='error-form'>Pas de genre ?</span>}
                    </div>
                </div>
                <div className='mail-zone'>
                    <label htmlFor="">Votre mail</label>
                    <input {...register("mail", {
                        required: true,
                        maxLength: 30,
                        minLength: 4,
                        pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
                    },)} />
                    {errors.mail && <span className='error-form'>Mail incorrect</span>}
                </div>
                <div className='contact-middle-part'>
                    <label htmlFor="">Votre message</label>
                    <textarea {...register("message", {
                        required: true,
                        maxLength: 1000,
                        minLength: 2
                    })}></textarea>
                    {errors.message && <span className='error-form'>Message incorrect</span>}
                </div>
                <div className='contact-footer-part'>
                    <input type="submit" className='submit-button' />
                </div>
            </form>
        </div>
    )
}