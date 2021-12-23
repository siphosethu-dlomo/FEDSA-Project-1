// fetching data
const fetchedData =  fetch('https://fedsa-project-1.herokuapp.com/project-1/products');
const root = document.getElementById('root');

function render() {
  const div = document.createElement('div');
  div.textContent = 'this was generated with JS';
  root.appendChild(div);
}

render();