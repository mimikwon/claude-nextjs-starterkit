"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";

/**
 * 설정 페이지
 * 프로필, 알림, 계정 관리 설정을 포함합니다
 */
export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "김대한",
    email: "user@example.com",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    updates: true,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSave = () => {
    setIsSaving(true);
    // 실제 저장 로직은 여기에 구현
    setTimeout(() => setIsSaving(false), 1000);
  };

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
          {/* 이름 */}
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleProfileChange}
              placeholder="이름을 입력하세요"
            />
          </div>

          {/* 이메일 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={profileData.email}
              onChange={handleProfileChange}
              placeholder="email@example.com"
            />
          </div>

          {/* 저장 버튼 */}
          <Button
            onClick={handleProfileSave}
            disabled={isSaving}
          >
            {isSaving ? "저장 중..." : "변경사항 저장"}
          </Button>
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
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications((prev) => ({ ...prev, email: e.target.checked }))
              }
              className="h-4 w-4"
            />
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
            <input
              type="checkbox"
              checked={notifications.marketing}
              onChange={(e) =>
                setNotifications((prev) => ({
                  ...prev,
                  marketing: e.target.checked,
                }))
              }
              className="h-4 w-4"
            />
          </div>

          <Separator />

          {/* 업데이트 알림 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">업데이트 알림</p>
              <p className="text-sm text-muted-foreground">
                시스템 업데이트 및 유지보수 알림을 받습니다
              </p>
            </div>
            <input
              type="checkbox"
              checked={notifications.updates}
              onChange={(e) =>
                setNotifications((prev) => ({ ...prev, updates: e.target.checked }))
              }
              className="h-4 w-4"
            />
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
