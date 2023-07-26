"use client";

import { Alert, Button, Input } from "@/components/ui";
import { InputAuth, schemaAuthInput } from "@/z/z.login";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<InputAuth>({
    resolver: zodResolver(schemaAuthInput),
    mode: "onChange",
  });

  const onSubmit = async (data: InputAuth) => {
    const res = await signIn("credentials", data);

    if (res?.error) toast.error(res.error);
    if (res?.ok) {
      toast.success("success");
      route.push("/hub");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 rounded-sm bg-slate-800 px-12 py-8"
    >
      <div className="relative">
        <label className="flex flex-col gap-2 leading-3">
          Direccion de correo electronico
          <Input
            name="email"
            type="text"
            className={`outline-none ${
              errors?.email &&
              "border-red-400 focus:border-red-600 dark:border-red-400 dark:focus:border-red-600"
            }`}
            register={register}
          />
        </label>
        <Alert
          variant="error"
          hidden={!!errors?.email}
          className="absolute -bottom-8"
        >
          {errors.email?.message}
        </Alert>
      </div>
      <div className="relative">
        <label className="flex flex-col gap-2 leading-3">
          Contrasena
          <Input
            name="password"
            type="password"
            register={register}
            className={`outline-none ${
              errors?.password &&
              "border-red-500 focus:border-red-600 dark:border-red-500 dark:focus:border-red-600"
            }`}
          />
        </label>
        <Alert
          variant="error"
          hidden={!!errors?.password}
          className="absolute -bottom-9"
        >
          {errors.password?.message}
        </Alert>
      </div>

      <Button type="submit" className="bg-blue-500">
        Inisiar session
      </Button>
    </form>
  );
};
