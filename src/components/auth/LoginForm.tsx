"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Mail, AlertCircle, CheckCircle, Loader } from "lucide-react";
import { loginSchema, type LoginFormData } from "@/lib/validation";
import { useFormSubmit } from "@/hooks/useFormSubmit";

/**
 * 로그인 폼 컴포넌트
 * React Hook Form + Zod를 사용한 폼 검증 포함
 */
export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { isLoading, error, success, handleSubmit: submitForm } = useFormSubmit();

  const onSubmit = async (data: LoginFormData) => {
    await submitForm(async () => {
      // 실제 로그인 로직은 여기에 구현
      // 예: await loginAPI(data);
      console.log("로그인 시도:", data);
      // 서버 액션 또는 API 호출 예시
      // await signIn("credentials", data);
    }, reset);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>
          계정에 로그인하여 시작하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 에러 메시지 */}
        {error && (
          <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}

        {/* 성공 메시지 */}
        {success && (
          <div className="flex items-center gap-2 rounded-md bg-green-50 px-4 py-2 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
            <CheckCircle className="h-4 w-4" />
            로그인이 완료되었습니다
          </div>
        )}

        {/* 이메일/비밀번호 폼 */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* 이메일 입력 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              aria-invalid={!!errors.email}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">비밀번호</Label>
              <Link
                href="#"
                className="text-xs text-primary hover:underline"
              >
                비밀번호 찾기
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              aria-invalid={!!errors.password}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-xs text-destructive">{errors.password.message}</p>
            )}
          </div>

          {/* 로그인 버튼 */}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "로그인 중..." : "로그인"}
          </Button>
        </form>

        {/* 구분선 */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">또는</span>
          </div>
        </div>

        {/* 소셜 로그인 */}
        <div className="space-y-2">
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
            disabled={isLoading}
          >
            <Mail className="h-4 w-4" />
            Google로 로그인
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
            disabled={isLoading}
          >
            <GitBranch className="h-4 w-4" />
            GitHub로 로그인
          </Button>
        </div>

        {/* 가입 유도 */}
        <p className="text-center text-sm text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link href="/register" className="text-primary hover:underline">
            회원가입
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
