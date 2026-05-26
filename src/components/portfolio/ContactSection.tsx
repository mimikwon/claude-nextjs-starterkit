'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Share2, Gift, Send } from 'lucide-react';

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
 * - 이메일 주소 표시
 * - 소셜 미디어 링크
 * - 간단한 메시지 폼 (또는 이메일 링크)
 */
export function ContactSection({ email, socialLinks }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 구현 시 이메일 전송 서비스 연동
    // 예: Resend, SendGrid, Nodemailer 등
    await new Promise((resolve) => setTimeout(resolve, 500));

    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
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
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
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
                placeholder="메시지를 입력하세요"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>

            {/* 전송 버튼 */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? '전송 중...' : '메시지 전송'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
