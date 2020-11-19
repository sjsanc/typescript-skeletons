interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface ICompanyDetails {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: {
    [key: string]: IAddress;
  };
  phone: string;
  website: string;
  company: {
    [key: string]: ICompanyDetails;
  };
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostList extends Array<IPost> {}

export type endpoint = "users" | "users/1" | "posts";
