interface HTMLNode {
  tag: string;
  children: HTMLNode[];
  text?: string;
}

const parse = (input: string): HTMLNode => {
  const stack: HTMLNode[] = [];

  // TODO: implement parser

  return stack[0];
};

const template = `
html
  head
    title Test
  body
    h1 Test
`;

const parsedTemplate = parse(template);
console.log(parsedTemplate);