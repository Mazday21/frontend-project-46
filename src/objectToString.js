export default function objectToString(obj, indent = '', closeIndent = '') {
  const lines = ['{'];
  const entries = Object.entries(obj);

  entries.forEach(([key, value], index) => {
    if (typeof value === 'object' && value !== null) {
      let nestedIndent = `${indent}    `;
      if (key.startsWith('+') || key.startsWith('-')) {
        nestedIndent = `${indent}      `;
      }
      const nestedCloseIndent = `${closeIndent}    `;
      const nestedLines = objectToString(value, nestedIndent, nestedCloseIndent);
      lines.push(`${indent}  ${key}: ${nestedLines}`);
    } else {
      lines.push(`${indent}  ${key}: ${value}`);
    }

    if (index === entries.length - 1) {
      lines.push(`${closeIndent}}`);
    }
  });

  return lines.join('\n');
}
