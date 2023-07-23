"use client";

import { InformationBubble } from "@/components/informationubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputAuth, schemaAuthInput } from "@/z/z.login";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<InputAuth>({
    resolver: zodResolver(schemaAuthInput),
  });

  const onSubmit = async (data: InputAuth) => {
    const res = await signIn("credentials", data);

    if (res?.error) toast.error(res.error);
    if (res?.ok) {
      toast.success("success");
      route.push('/hub')
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
            type="text"
            register={register}
            onBlur={() => trigger("email")}
          />
        </label>
        <InformationBubble type="error" visible={!!errors?.email}>
          {errors.email?.message}
        </InformationBubble>
      </div>
      <div>
        Contrasena
        <label className="flex flex-col gap-2">
          <Input name="password" type="password" register={register} />
        </label>
        {!!errors?.password && <span>{errors.password?.message}</span>}
      </div>

      <Button type="submit" className="bg-blue-500">
        Inisiar session
      </Button>
    </form>
  );
};
