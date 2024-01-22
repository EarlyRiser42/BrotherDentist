import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isMobileState } from '@/atoms/atoms';

export function useIsMobile() {
    const [isMobile, setIsMobile] = useRecoilState(isMobileState);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        // 클라이언트 사이드에서만 이벤트 리스너 등록
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            handleResize();
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [setIsMobile]);

    return isMobile;
}
