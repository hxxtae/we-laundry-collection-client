export const queryKey = {
  collect: {
    all: ['/collections'] as const,
    listName: (name: string) => [...queryKey.collect.all, `${name}`] as const,
  }
};
