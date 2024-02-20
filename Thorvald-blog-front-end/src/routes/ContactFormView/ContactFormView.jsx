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

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="">Name</label>
                <input defaultValue="test" {...register("name", { required: true })} />

                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="">Surname</label>
                <input {...register("Surname", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className='submit-button' />
            </form>
        </div>
    )
}