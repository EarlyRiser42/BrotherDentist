"use client";

import { RecoilRoot, atom } from "recoil";

export const NavigationState = atom({
    key: 'NavigationState',
    default: false,
});
export default function RecoilRootProvider({children}) {
    return <RecoilRoot>{children}</RecoilRoot>
}
