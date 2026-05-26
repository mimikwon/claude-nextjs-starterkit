'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/validation';
import { useFormSubmit } from '@/hooks/useFormSubmit';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface ContactSectionProps {
  email: string;
  socialLinks: SocialLink[];
}

/**
 * 연락처 섹션
 * React Hook Form + Zod를 사용한 폼 검증 포함
 * - 이메일 주소 표시
 * - 소셜 미디어 링크
 * - 메시지 폼
 */
export function ContactSection({ email, socialLinks }: ContactSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const { isLoading, error, success, handleSubmit: submitForm } = useFormSubmit();

  const onSubmit = async (data: ContactFormData) => {
    await submitForm(async () => {
      // 실제 구현 시 이메일 전송 서비스 연동
      // 예: Resend, SendGrid, Nodemailer 등
      // await sendEmailAPI(data);
      console.log('메시지 전송:', data);
    }, reset);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 제목 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            연락하기
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            프로젝트 제안이나 협업 문의는 언제든지 연락주세요.
          </p>
        </motion.div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* 이메일 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  이메일
                </h3>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* 소셜 미디어 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                소셜 미디어
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 메시지 폼 */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
                메시지가 전송되었습니다
              </div>
            )}

            {/* 이름 입력 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                이름
              </label>
              <Input
                id="name"
                type="text"
                placeholder="이름을 입력하세요"
                {...register("name")}
                aria-invalid={!!errors.name}
                disabled={isLoading}
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* 이메일 입력 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                이메일
              </label>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요"
                {...register("email")}
                aria-invalid={!!errors.email}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* 메시지 입력 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                메시지
              </label>
              <textarea
                id="message"
                placeholder="메시지를 입력하세요 (최소 10자)"
                rows={4}
                {...register("message")}
                aria-invalid={!!errors.message}
                disabled={isLoading}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* 전송 버튼 */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? '전송 중...' : '메시지 전송'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
