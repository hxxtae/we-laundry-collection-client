import { atom } from 'recoil';

export const managerAuth = atom<string | undefined>({
  key: 'managerAuthKey',
  default: undefined,
});
