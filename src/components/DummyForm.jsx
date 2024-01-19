import { useForm } from "react-hook-form";

export default function DummyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  function onSubmit(Fdata) {
    console.log(Fdata);
  }
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <select {...register("userss")}>
        <option>good</option>
        <option>bad</option>
      </select>
      <hr />
      <select {...register("mannss")}>
        <option>man</option>
        <option>women</option>
      </select>
      <button>ff</button>
    </form>
  );
}
