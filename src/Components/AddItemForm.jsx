import { useForm } from "react-hook-form";

export default function AddItemForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (

        
        <form onSubmit={handleSubmit(onSubmit)}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input  type="email" class="form-control" id="exampleInputEmail1"  {...register("example", { required: true })} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  id="form12"  class="form-control" {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Upload Image</label>
    <input  type="file" class="form-control" id="exampleInputEmail1"  {...register("example", { required: true })} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input  id="form12"  class="form-control" {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    );
}