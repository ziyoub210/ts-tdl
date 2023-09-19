type Concat<T extends readonly unknown[], K extends readonly unknown[]> = [...T, ...K];

type a = Concat<['1', 2, '3'], [false, boolean, '4']>;
