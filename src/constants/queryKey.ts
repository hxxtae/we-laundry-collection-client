const BASE_PATH_KEYS = {
  login: 'login' as const,
  logout: 'logout' as const,
  auth: 'auth' as const,
  collections: 'collections' as const,
  users: 'users' as const,
}

export const queryKey = {
  collect: {
    all: [`${BASE_PATH_KEYS.collections}`] as const,
    listName: (name: string) => [...queryKey.collect.all, `${name}`] as const,
  },
  auth: {
    me: [`/${BASE_PATH_KEYS.auth}/me`] as const,
  },
  user: {
    all: [`/${BASE_PATH_KEYS.users}`] as const,
    listName: (name: string) => [...queryKey.user.all, `${name}`] as const,
  },
};

export const mutateKey = {
  collect: {
    all: [`/${BASE_PATH_KEYS.collections}`] as const,
  },
  user: {
    all: [`/${BASE_PATH_KEYS.users}`] as const,
  },
  login: [`/${BASE_PATH_KEYS.login}`] as const,
  logout: [`/${BASE_PATH_KEYS.logout}`] as const,
}
