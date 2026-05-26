"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Mail, AlertCircle, CheckCircle, Loader } from "lucide-react";
import { registerSchema, type RegisterFormData } from "@/lib/validation";
import { useFormSubmit } from "@/hooks/useFormSubmit";

/**
 * 회원가입 폼 컴포넌트
 * React Hook Form + Zod를 사용한 폼 검증 포함
 * 비밀번호 일치 확인 로직 포함
 */
export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { isLoading, error, success, handleSubmit: submitForm } = useFormSubmit();

  const onSubmit = async (data: RegisterFormData) => {
    await submitForm(async () => {
      // 실제 가입 로직은 여기에 구현
      // 예: await registerAPI(data);
      console.log("회원가입 시도:", data);
      // 서버 액션 또는 API 호출 예시
      // await signUp(data);
    }, reset);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>
          새 계정을 만들고 시작하세요
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
            회원가입이 완료되었습니다
          </div>
        )}

        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* 이름 입력 */}
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              type="text"
              placeholder="홍길동"
              {...register("name")}
              aria-invalid={!!errors.name}
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

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
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              aria-invalid={!!errors.password}
              disabled={isLoading}
            />
            {errors.password ? (
              <p className="text-xs text-destructive">{errors.password.message}</p>
            ) : (
              <p className="text-xs text-muted-foreground">
                최소 8자 이상이어야 합니다
              </p>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
              aria-invalid={!!errors.confirmPassword}
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* 회원가입 버튼 */}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "가입 중..." : "회원가입"}
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
            Google으로 가입
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
            disabled={isLoading}
          >
            <GitBranch className="h-4 w-4" />
            GitHub으로 가입
          </Button>
        </div>

        {/* 로그인 유도 */}
        <p className="text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-primary hover:underline">
            로그인
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
