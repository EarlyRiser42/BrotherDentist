import { atom } from 'recoil';

export const NavigationState = atom({
    key: 'NavigationState',
    default: false,
});

export const isMobileState = atom({
    key: 'isMobileState',
    default: false,
});
