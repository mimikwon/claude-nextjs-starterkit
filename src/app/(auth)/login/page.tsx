import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "로그인",
  description: "계정에 로그인하세요",
};

/**
 * 로그인 페이지
 */
export default function LoginPage() {
  return <LoginForm />;
}
