import { md5 } from "js-md5";
const PASSWORD = "Valantis";

export const getToken = (timestamp: string): string => {
  const authString = `${PASSWORD}_${timestamp}`;
  return md5(authString);
};
