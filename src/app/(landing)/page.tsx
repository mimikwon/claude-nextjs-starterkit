import { Metadata } from "next";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CTASection } from "@/components/landing/CTASection";

export const metadata: Metadata = {
  title: "ModernKit - 빠르게 시작하는 웹 개발",
  description: "Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 구성된 모던 스타터킷",
};

/**
 * 랜딩 페이지
 * Hero 섹션, 기능 소개, CTA 섹션으로 구성됩니다
 */
export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
