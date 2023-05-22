import fs from 'fs';

interface HTMLNode {
  tag: string;
  children: HTMLNode[];
  text?: string;
  id?: string;
  className?: string;
  attributes?: string[];
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

      if(node.tag.includes('[')) {
        const startIndex = trimmedLine.indexOf('[');
        const endIndex = trimmedLine.indexOf(']');
        const attributes = trimmedLine.slice(startIndex + 1, endIndex);
        node.attributes = attributes.split(',');
        node.tag = node.tag.slice(0, startIndex);
      }

      if(node.tag.includes('#')) {
        const tagSplit = node.tag.split('#');
        node.tag = tagSplit[0];
        node.id = tagSplit[1];
      }
      else if(node.tag.includes('.')) {
        const tagSplit = node.tag.split('.');
        node.tag = tagSplit[0];
        node.className = tagSplit[1];
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
  const { tag, children, text, id, className, attributes } = node;
  const indent = '  '.repeat(indentationLevel);

  let html = `${indent}<${tag}`;
  if(id) {
    html += ` id="${id}"`;
  }
  if(className) {
    html += ` class="${className}"`;
  }

  for(const attribute of attributes || []) {
    html += ` ${attribute}`;
  }

  html += '>';

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

const inputFile = 'input.txt';
const outputFile = 'output.html';

fs.readFile(inputFile, 'utf8', (err: any, data: string) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  const parsedTemplate = parse(data);
  const htmlOutput = generateHTML(parsedTemplate);

  fs.writeFile(outputFile, htmlOutput, 'utf8', (err: any) => {
    if (err) {
      console.error('Error writing output file:', err);
      return;
    }
    console.log(`HTML generated and saved to ${outputFile}`);
  });
});