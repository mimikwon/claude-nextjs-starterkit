import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * 랜딩 페이지 레이아웃
 * 헤더 + 콘텐츠 + 푸터 구조입니다
 */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
