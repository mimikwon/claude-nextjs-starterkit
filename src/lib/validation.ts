import { z } from "zod";

/**
 * 로그인 폼 검증 스키마
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력하세요")
    .email("유효한 이메일을 입력하세요"),
  password: z
    .string()
    .min(1, "비밀번호를 입력하세요")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * 회원가입 폼 검증 스키마
 */
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "이름을 입력하세요")
      .min(2, "이름은 최소 2자 이상이어야 합니다"),
    email: z
      .string()
      .min(1, "이메일을 입력하세요")
      .email("유효한 이메일을 입력하세요"),
    password: z
      .string()
      .min(1, "비밀번호를 입력하세요")
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다"),
    confirmPassword: z.string().min(1, "비밀번호 확인을 입력하세요"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

/**
 * 연락처 폼 검증 스키마
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "이름을 입력하세요")
    .min(2, "이름은 최소 2자 이상이어야 합니다"),
  email: z
    .string()
    .min(1, "이메일을 입력하세요")
    .email("유효한 이메일을 입력하세요"),
  message: z
    .string()
    .min(1, "메시지를 입력하세요")
    .min(10, "메시지는 최소 10자 이상이어야 합니다"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * 설정 폼 검증 스키마
 */
export const settingsSchema = z.object({
  fullName: z
    .string()
    .min(1, "이름을 입력하세요")
    .min(2, "이름은 최소 2자 이상이어야 합니다"),
  email: z
    .string()
    .min(1, "이메일을 입력하세요")
    .email("유효한 이메일을 입력하세요"),
  bio: z
    .string()
    .max(500, "자소서는 최대 500자까지 작성 가능합니다")
    .optional(),
  emailNotifications: z.boolean().default(true),
  pushNotifications: z.boolean().default(true),
  marketing: z.boolean().default(false),
});

export type SettingsFormData = z.infer<typeof settingsSchema>;
