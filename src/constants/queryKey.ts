export const queryKey = {
  collect: {
    all: ['/collections'] as const,
    listName: (name: string) => [...queryKey.collect.all, `${name}`] as const,
  },
  auth: {
    me: ['/auth/me'] as const,
  },
  user: {
    all: ['/users'] as const,
    listName: (name: string) => [...queryKey.user.all, `${name}`] as const,
  },
};

export const mutateKey = {
  collect: {
    all: ['/collections'] as const,
  },
  user: {
    all: ['/users'] as const,
  },
  login: ['/login'] as const,
  logout: ['/logout'] as const,
}