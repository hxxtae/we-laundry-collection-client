export const thisIdExcept = (value: string) => {
  if (value === process.env.REACT_APP_USERS_ID! as string) return true;
  if (value === process.env.REACT_APP_USER_ID! as string) return true;
  if (value === process.env.REACT_APP_MANAGERS_ID! as string) return true;
  if (value === process.env.REACT_APP_MANAGER_ID! as string) return true;
  return false;
}


