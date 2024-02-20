import './ContactFormView.scss'
import { useForm } from "react-hook-form"

export default function ContactFormView() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className='contact-form-container'>
            <h1>Contactez-moi !</h1>
            <form onSubmit={handleSubmit(onSubmit)}>      
                <div className='contact-header-part'>
                    <div className='contact-zone'>
                        <label htmlFor="">Nom</label>
                        <input {...register("name", { required: true })} />
                        {errors.name && <span>C'est bizare de pas avoir de nom !</span>}   
                    </div>
                    <div className='contact-zone'>
                        <label htmlFor="">Prénom</label>
                        <input {...register("Surname", { required: true })} />              
                        {errors.Surname && <span>C'est bizare de pas avoir de prénom !</span>}
                    </div>  
                    <div className='contact-zone'>
                        <label htmlFor="">Genre</label>
                        <select {...register("gender", { required: true })}>
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                            <option value="poney">Poney des Landes</option>
                        </select>
                        {errors.gender && <span>Pas de genre ? Les LGBTQ+ en sueur ...</span>}
                    </div>                 
                </div>  
                <div className='contact-middle-part'>
                    <label htmlFor="">Votre message</label>
                    <textarea {...register("message", { required: true })}></textarea>
                    {errors.message && <span>Vous n'avez pas de message ?</span>}
                </div>  
                <div className='contact-footer-part'>
                    <input type="submit" className='submit-button' />
                </div>               
            </form>
        </div>
    )
}