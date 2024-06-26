import { Input } from "@mui/material";
import { forwardRef } from "react";
import { Controller, useForm } from "react-hook-form";

const InputText = forwardRef(({ name, type, value, label, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} value={value} ref={ref} {...props} />
    </div>
  );
});

function App() {
  const { handleSubmit, reset, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      age: 0,
    },
  });

  const onValid = (data) => {
    console.log("valid", data);
    reset();
  };

  const onInvalid = (data) => {
    console.log("invalid:", data);
  };

  return (
    <>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
