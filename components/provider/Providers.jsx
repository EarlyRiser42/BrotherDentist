'use client';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <RecoilRoot>{children}</RecoilRoot>
        </ThemeProvider>
    );
}
