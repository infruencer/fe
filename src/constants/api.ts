export const NETWORK = {
  TIMEOUT: 10000,
} as const;

export const DOMAIN = {
  POST_LOGIN: `/login`,
  POST_USERS_REFRESH: '/users/refresh',
  POST_USERS_LOGOUT: '/users/logout',
  DELETE_USERS: '/users',
  GET_USERS: '/users',
  POST_DIARY: '/diaries',
  GET_DIARY: (id: number) => `/diaries/${id}`,
  PUT_DIARY: (id: number) => `/diaries/${id}`,
  DELETE_DIARY: (id: number) => `/diaries/${id}`,
  GET_DIARY_ALL: '/diaries',
};
