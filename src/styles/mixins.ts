import { mediaSize } from '.';

export const media = {
  tablet_s: `screen and (min-width: ${mediaSize.BREAKE_POINT_TL_S})`,
  tablet_l: `screen and (min-width: ${mediaSize.BREAKE_POINT_TL_L})`,
  pc_s: `screen and (min-width: ${mediaSize.BREAKE_POINT_PC_S})`,
  pc_l: `screen and (min-width: ${mediaSize.BREAKE_POINT_PC_L})`,
};

export const scroll = {
  bar: (width: number) => `
    &::-webkit-scrollbar {
      width: ${width}px;
    }
  `,
  track: (color?: string) => `
    &::-webkit-scrollbar-track {
      background-color: ${color};
      border-radius: 5px;
    }
  `,
  thumb: (color?: string) => `
    &::-webkit-scrollbar-thumb {
      background-color: ${color};
      border-radius: 5px;
    }
  `
};

export const noDrag = () => `
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`
