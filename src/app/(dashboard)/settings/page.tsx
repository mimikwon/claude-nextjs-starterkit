"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Loader } from "lucide-react";
import { settingsSchema, type SettingsFormData } from "@/lib/validation";
import { useFormSubmit } from "@/hooks/useFormSubmit";

/**
 * 설정 페이지
 * React Hook Form + Zod를 사용한 폼 검증
 * 프로필, 알림, 계정 관리 설정을 포함합니다
 */
export default function SettingsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      fullName: "김대한",
      email: "user@example.com",
      emailNotifications: true,
      pushNotifications: true,
      marketing: false,
    },
  });

  const { isLoading, handleSubmit: submitForm } = useFormSubmit();

  const onSubmit = async (data: SettingsFormData) => {
    await submitForm(async () => {
      // 실제 저장 로직은 여기에 구현
      // 예: await updateSettingsAPI(data);
      console.log("설정 저장:", data);
    });
  };

  // 체크박스 값 감시
  const emailNotifications = watch("emailNotifications");
  const pushNotifications = watch("pushNotifications");
  const marketing = watch("marketing");

  return (
    <div className="space-y-8">
      {/* 페이지 제목 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
        <p className="mt-2 text-muted-foreground">
          계정 설정과 환경 설정을 관리하세요
        </p>
      </div>

      {/* 프로필 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>
            개인 정보를 업데이트하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 이름 */}
            <div className="space-y-2">
              <Label htmlFor="fullName">이름</Label>
              <Input
                id="fullName"
                placeholder="이름을 입력하세요"
                {...register("fullName")}
                aria-invalid={!!errors.fullName}
                disabled={isLoading}
              />
              {errors.fullName && (
                <p className="text-xs text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* 자소서 */}
            <div className="space-y-2">
              <Label htmlFor="bio">자소서</Label>
              <textarea
                id="bio"
                placeholder="자신에 대해 소개해주세요 (선택사항)"
                rows={4}
                {...register("bio")}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              />
              {errors.bio && (
                <p className="text-xs text-destructive">{errors.bio.message}</p>
              )}
            </div>

            {/* 저장 버튼 */}
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "저장 중..." : "변경사항 저장"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림</CardTitle>
          <CardDescription>
            어떤 알림을 받을지 선택하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 이메일 알림 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">이메일 알림</p>
              <p className="text-sm text-muted-foreground">
                중요한 업데이트를 이메일로 받습니다
              </p>
            </div>
            <label htmlFor="emailNotifications" className="flex items-center cursor-pointer">
              <input
                id="emailNotifications"
                type="checkbox"
                checked={emailNotifications}
                {...register("emailNotifications")}
                className="h-4 w-4 cursor-pointer"
                aria-label="이메일 알림 활성화"
              />
            </label>
          </div>

          <Separator />

          {/* 푸시 알림 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">푸시 알림</p>
              <p className="text-sm text-muted-foreground">
                디바이스에서 푸시 알림을 받습니다
              </p>
            </div>
            <label htmlFor="pushNotifications" className="flex items-center cursor-pointer">
              <input
                id="pushNotifications"
                type="checkbox"
                checked={pushNotifications}
                {...register("pushNotifications")}
                className="h-4 w-4 cursor-pointer"
                aria-label="푸시 알림 활성화"
              />
            </label>
          </div>

          <Separator />

          {/* 마케팅 이메일 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">마케팅 이메일</p>
              <p className="text-sm text-muted-foreground">
                새로운 기능과 프로모션 정보를 받습니다
              </p>
            </div>
            <label htmlFor="marketing" className="flex items-center cursor-pointer">
              <input
                id="marketing"
                type="checkbox"
                checked={marketing}
                {...register("marketing")}
                className="h-4 w-4 cursor-pointer"
                aria-label="마케팅 이메일 활성화"
              />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* 위험 영역 */}
      <Card className="border-destructive/50 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            위험 영역
          </CardTitle>
          <CardDescription>
            돌이킬 수 없는 작업입니다. 주의하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 계정 삭제 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">계정 삭제</p>
              <p className="text-sm text-muted-foreground">
                이 계정을 영구적으로 삭제합니다. 이 작업은 되돌릴 수 없습니다.
              </p>
            </div>
            <Button variant="destructive">계정 삭제</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
