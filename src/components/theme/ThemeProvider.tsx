"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * next-themes의 ThemeProvider를 래핑한 컴포넌트
 * 클라이언트 측에서 다크모드 테마 전환을 관리합니다
 */
export function ThemeProvider({ children, ...props }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}
