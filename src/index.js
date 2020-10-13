module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;

  const issue = [];

  for (let char of str) {
    for (let configElement of bracketsConfig) {
      if (char === configElement[1] && issue[issue.length - 1] === configElement[0]) {
        issue.pop();
      } else if (char === configElement[0]) {
        issue.push(char);
      }
    }
  }

  return issue.length === 0;
};
