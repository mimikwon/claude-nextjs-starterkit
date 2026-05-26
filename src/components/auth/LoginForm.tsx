"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Mail } from "lucide-react";

/**
 * 로그인 폼 컴포넌트
 * 이메일/비밀번호 입력, 소셜 로그인 옵션을 포함합니다
 */
export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // 실제 로그인 로직은 여기에 구현
    setTimeout(() => setIsLoading(false), 1000);
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
        {/* 이메일/비밀번호 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이메일 입력 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* 로그인 버튼 */}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
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
          >
            <Mail className="h-4 w-4" />
            Google로 로그인
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
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
