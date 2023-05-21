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
        const splitIndex = trimmedLine.indexOf(' ');
        node.tag = trimmedLine.slice(0, splitIndex);
        node.text = trimmedLine.slice(splitIndex + 1);
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

const generateHTML = (node: HTMLNode, indentationLevel: number = 0): string => {
  const { tag, children, text } = node;
  const indent = '  '.repeat(indentationLevel);

  let html = `${indent}<${tag}>`;

  if (text) {
    html += text;
  }

  if (children.length > 0) {
    html += '\n';
  }

  for (const child of children) {
    html += generateHTML(child, indentationLevel + 1);
  }

  if (children.length > 0) {
    html += indent;
  }

  html += `</${tag}>\n`;

  return html;
};

const template = `
html
  head
    title Test test test
  body
    h1 Test test
    p Test
      div
        p Test test test test
    p Test test test test test
`;

const parsedTemplate = parse(template);
console.log(generateHTML(parsedTemplate));