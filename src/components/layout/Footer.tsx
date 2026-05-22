import Link from "next/link";
import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

/**
 * 푸터 컴포넌트
 * 다양한 링크 그룹과 저작권 정보를 포함합니다
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      {/* 푸터 콘텐츠 */}
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 회사 정보 */}
          <div>
            <Link href="/" className="flex items-center space-x-2 font-bold text-lg mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span>{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              빠르게 웹 개발을 시작할 수 있는 모던 Next.js 스타터킷
            </p>
          </div>

          {/* 푸터 링크 그룹 */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 구분선 */}
      <Separator />

      {/* 저작권 정보 */}
      <div className="container mx-auto max-w-screen-2xl px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} {SITE_NAME}. 모든 권리 보유.
        </p>
      </div>
    </footer>
  );
}
