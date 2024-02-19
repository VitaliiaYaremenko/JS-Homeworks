const string1 = '{"name": "John", "age": 30}';
const string2 = '{"name": "John", "age":';

const isValidJSON = (str) => JSON.parse(str);

try {
  console.log(isValidJSON(string1));
  console.log(isValidJSON(string2));
} catch {
  console.log('"Invalid JSON string"');
  console.dir(Error);
}
