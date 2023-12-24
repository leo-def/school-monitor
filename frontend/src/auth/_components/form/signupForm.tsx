import { useForm } from "react-hook-form";

export interface SignupFormData {

}

export function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: SignupFormData) => console.log(data);

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}