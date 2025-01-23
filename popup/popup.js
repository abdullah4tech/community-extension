document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('resources').addEventListener('click', () => {
    const resources = ['Resource 1', 'Resource 2', 'Resource 3'];
    document.getElementById('output').innerHTML = resources.join('<br>');
  });
});
