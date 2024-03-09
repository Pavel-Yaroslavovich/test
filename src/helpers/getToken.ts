import { md5 } from "js-md5";
const PASSWORD = "Valantis";

export const getToken = (timestamp: string): string => {
  const authString = `${PASSWORD}_${timestamp}`;
  const authToken = md5(authString);
  return authToken;
};
