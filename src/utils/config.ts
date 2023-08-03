export const colors = {
  bgColor: '#121925',
  boxColor: '#212937',
  light: '#ffffff',
  secondary: '#687790',
  tertiary: '#898c92',
  green: '#3bd671',
  blue: '#0883b9',
  red: '#df484a',
};

export const mediaSize = {
  BREAKE_POINT_TL_S: "768px",
  BREAKE_POINT_TL_L: "992px",
  BREAKE_POINT_PC_S: "1200px",
  BREAKE_POINT_PC_L: "1600px",
};

export const thisIdExcept = (value: string) => {
  if (value === process.env.REACT_APP_USERS_ID! as string) return true;
  if (value === process.env.REACT_APP_USER_ID! as string) return true;
  if (value === process.env.REACT_APP_MANAGERS_ID! as string) return true;
  if (value === process.env.REACT_APP_MANAGER_ID! as string) return true;
  return false;
}


