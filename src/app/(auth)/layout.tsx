/**
 * 인증 페이지 레이아웃
 * 중앙 정렬된 카드 레이아웃입니다
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}
