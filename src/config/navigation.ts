export const Route = {
  Dashboard: 'Dashboard',
  Sandbox: 'Sandbox',
};

export type NavigationParams = {
  [k in keyof typeof Route]: undefined;
};
