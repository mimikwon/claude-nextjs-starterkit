import { useState, useCallback } from "react";

interface UseFormSubmitOptions {
  onSuccess?: (message?: string) => void;
  onError?: (error: string) => void;
}

/**
 * 폼 제출 상태를 관리하는 커스텀 훅
 * 로딩 상태, 에러 메시지, 제출 함수를 제공합니다
 */
export function useFormSubmit(options?: UseFormSubmitOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(
    async (
      onSubmit: () => Promise<void> | void,
      resetForm?: () => void
    ) => {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      try {
        await onSubmit();
        setSuccess(true);
        resetForm?.();
        options?.onSuccess?.("요청이 성공했습니다");

        // 3초 후 성공 메시지 제거
        setTimeout(() => setSuccess(false), 3000);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "요청 중 오류가 발생했습니다";
        setError(errorMessage);
        options?.onError?.(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [options]
  );

  return {
    isLoading,
    error,
    success,
    handleSubmit,
    setError,
    clearError: () => setError(null),
  };
}
