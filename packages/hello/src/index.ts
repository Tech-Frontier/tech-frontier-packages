interface HelloOptions {
  name: string;
}

export function hello({ name }: HelloOptions) {
  console.log(`hello ${name}!`);

  return `hello ${name}!`;
}
