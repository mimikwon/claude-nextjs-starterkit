"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail } from "lucide-react";

/**
 * 회원가입 폼 컴포넌트
 * 이름, 이메일, 비밀번호, 비밀번호 확인 입력을 포함합니다
 */
export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // 실제 가입 로직은 여기에 구현
    setTimeout(() => setIsLoading(false), 1000);
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
        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이름 입력 */}
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* 이메일 입력 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* 비밀번호 입력 */}
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-muted-foreground">
              최소 8자, 대문자, 숫자를 포함해야 합니다
            </p>
          </div>

          {/* 비밀번호 확인 */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* 회원가입 버튼 */}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
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
          >
            <Mail className="h-4 w-4" />
            Google으로 가입
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
          >
            <Github className="h-4 w-4" />
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
