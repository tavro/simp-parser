interface HTMLNode {
  tag: string;
  children: HTMLNode[];
  text?: string;
}

const parse = (input: string): HTMLNode => {
  const lines = input.trim().split('\n');

  const parseNode = (indentation: number): HTMLNode => {
    const line = lines.shift() || '';
    const node: HTMLNode = {
      tag: '',
      children: [],
      text: undefined
    };

    const trimmedLine = line.trim();
    const lineIndentation = line.length - trimmedLine.length;

    if (lineIndentation === indentation) {
      if (trimmedLine.includes(' ')) {
        const [tag, text] = trimmedLine.split(' ', 2);
        node.tag = tag;
        node.text = text;
      } else {
        node.tag = trimmedLine;
      }

      while (lines.length > 0) {
        const nextLine = lines[0];
        const nextLineIndentation = nextLine.length - nextLine.trimStart().length;

        if (nextLineIndentation > lineIndentation) {
          const childNode = parseNode(lineIndentation + 2);
          node.children.push(childNode);
        } else {
          break;
        }
      }
    }

    return node;
  };

  return parseNode(0);
};

const template = `
html
  head
    title Test
  body
    h1 Test
`;

const parsedTemplate = parse(template);
console.log(parsedTemplate.children);
