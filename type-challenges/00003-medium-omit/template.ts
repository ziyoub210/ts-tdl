type MyOmit<T, U> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};
