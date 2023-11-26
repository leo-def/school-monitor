import { useForm } from "react-hook-form";

export interface SignupFormData {

}

export function SignupForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: SignupFormData) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

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