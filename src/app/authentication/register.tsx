"use client";

import { Button, Input, Alert } from "@/components/ui";
import { InputAuth, schemaAuthInput } from "@/z/z.login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<InputAuth>({
    resolver: zodResolver(schemaAuthInput),
  });

  const onSubmit = async (data: InputAuth) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => res.json());
      if (res.ok) {
        router.push("/login");
      }
    } catch (error) {
      reset();
      toast.error(
        "Some error has occurred in the registry, please refresh the page and try again."
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-sm bg-slate-800 p-6"
    >
      <div>
        <label className="flex flex-col gap-2">
          Direccion de correo electronico
          <Input
            name="email"
            type="email"
            register={register}
            // onBlur={() => trigger("email")}
          />
        </label>
        <Alert variant="error" hidden={!!errors?.email}>
          {errors.email?.message}
        </Alert>
      </div>
      <div>
        Contrasena
        <label className="flex flex-col gap-2">
          <Input name="password" type="password" register={register} />
        </label>
        {!!errors?.password && <span>{errors.password?.message}</span>}
      </div>

      <Button type="submit" className="bg-blue-500">
        Registrarse
      </Button>
    </form>
  );
};
