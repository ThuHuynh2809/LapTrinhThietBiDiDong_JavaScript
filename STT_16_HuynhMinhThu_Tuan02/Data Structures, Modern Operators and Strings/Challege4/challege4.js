

document.getElementById('convert-button').addEventListener('click', function () {
  const textArea = document.getElementById('text-input');
  const outputDiv = document.getElementById('output');
  const variableNames = textArea.value.split('\n');

  variableNames.forEach(function (variableName) {
      const words = variableName.split('_');
      let camelCaseName = words[0];

      for (let i = 1; i < words.length; i++) {
          camelCaseName += words[i][0].toUpperCase() + words[i].slice(1);
      }

      const checkmarks = '✅'.repeat(words.length - 1);

      const result = `${camelCaseName} ${checkmarks}`;
      outputDiv.innerHTML += result + '<br>';
  });
});