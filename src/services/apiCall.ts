import { IUser, IPostList, endpoint } from "../types/APIInterfaces";

export const fetchApi = async (endpoint: endpoint): Promise<any> => {
  if (endpoint === "users") endpoint = "users/1";
  const result: Response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}`
  );
  const data: IUser | IPostList = await result.json();
  console.log(data);
  return data;
};
