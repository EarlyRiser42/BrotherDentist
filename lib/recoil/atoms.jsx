import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const toastTextState = atom({
    key: 'toastTextState',
    default: { type: 'notice', text: '' },
});
