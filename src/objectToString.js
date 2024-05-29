export default function objectToString(obj, indent = '') {
  const lines = ['{'];
  const entries = Object.entries(obj);

  entries.forEach(([key, value], index) => {
    if (typeof value === 'object' && value !== null) {
      const nestedIndent = `${indent}    `;
      const nestedLines = objectToString(value, nestedIndent);
      lines.push(`${indent}  ${key}: ${nestedLines}`);
    } else {
      lines.push(`${indent}  ${key}: ${value}`);
    }

    if (index === entries.length - 1) {
      lines.push(`${indent}}`);
    }
  });
  return lines.join('\n');
}
