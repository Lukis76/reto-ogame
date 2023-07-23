import { z } from "zod";

export const schemaAuthInput = z.object({
  email: z
    .string()
    // .nonempty("Este campo es requerido")
    .email("Ingesar un Email valido"),
  password: z
    .string()
    // .nonempty("Este campo es requerido")
    .min(6, "El password deve contenes mas 6 characters")
    .max(24, "El password no deve superar los 24 characters"),
});

export type InputAuth = z.infer<typeof schemaAuthInput>;
