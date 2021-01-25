export interface User {
  id: string;
  name: string;
  email: string;
  createdOn: string;
  updatedOn: string;
}

export interface Todo {
  title: string;
  desc: string;
  author: string;
  id: string;
  status: boolean;
  createdOn?: string;
  updatedOn?: string;
}

export type TextType = 'Input' | 'Output' | '';

export interface JuicyText {
  id: string;
  text: string;
  type: string;
  createdOn: Date;
  updatedOn: Date;
  lock: boolean;
}

export interface DiffTextPack {
  id: string;
  left: JuicyText;
  right: JuicyText;
  createdOn: Date;
  updatedOn: Date;
}

export type ResponseType<K extends string, V> = Promise<{ [P in K]: V }>;

export type ResponseTypes<T> = Promise<T>;

export type OptionalPick<T, K extends keyof T> = Pick<Partial<T>, K>;

export type Optional<T, K extends keyof T> = OptionalPick<T, K> & Omit<T, K>;

export type CustomErrors = {
  errors: {
    errorName: string[];
  };
};
