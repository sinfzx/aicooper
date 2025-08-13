import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useNavigation = () => {
  const router = useRouter();

  const navigateTo = useCallback((path: string) => {
    // 使用setTimeout来避免在渲染过程中直接调用router.push
    setTimeout(() => {
      router.push(path);
    }, 0);
  }, [router]);

  const replace = useCallback((path: string) => {
    setTimeout(() => {
      router.replace(path);
    }, 0);
  }, [router]);

  const back = useCallback(() => {
    setTimeout(() => {
      router.back();
    }, 0);
  }, [router]);

  return {
    navigateTo,
    replace,
    back,
  };
};