import { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "회원가입",
  description: "새로운 계정을 만드세요",
};

/**
 * 회원가입 페이지
 */
export default function RegisterPage() {
  return <RegisterForm />;
}
