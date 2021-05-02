export let accessToken = "";

export const setAccessToken = (x) => {
  accessToken = x;
};

export const getAccessToken = () => {
  return accessToken;
};
