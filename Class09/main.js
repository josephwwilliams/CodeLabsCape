const savedLinks = JSON.parse(localStorage.getItem('links'));
console.log(savedLinks);
const allLinks = savedLinks || [];

let linkForm = document.querySelector('#link-form');
let titleInput = document.querySelector('#link-title');
let urlInput = document.querySelector('#link-url');
let submitButton = document.querySelector('#submit');

let linkContainer = document.querySelector('#link-container');

linkForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let titleValue = titleInput.value;
  let urlValue = urlInput.value;

  const link = {
    title: titleValue,
    url: urlValue,
  };

  allLinks.push(link);
  saveAndRecreate();
  linkForm.reset();
});

function createLinks(links = []) {
  const allLinksHtml = links.map(function (link, idx) {
    console.log(idx);
    let htmlLink = `
    <li data-index="${idx}">
      <a href="${link.url}" target="_blank">
        ${link.title}
      </a>
      <button class="delete" type="button"></button>
    </li>`;
    return htmlLink;
  });

  let joinedLinks = allLinksHtml.join('');

  linkContainer.innerHTML = joinedLinks;
}

linkContainer.addEventListener('click', (event) => deleteLink(event));

function deleteLink(event) {
  if (!event.target.matches('.delete')) return;

  const linkIdx = event.target.parentNode.dataset['index'];
  allLinks.splice(linkIdx, 1);
  saveAndRecreate();
}

function saveAndRecreate() {
  createLinks(allLinks);
  storeLinks(allLinks);
}

function storeLinks(links = []) {
  localStorage.setItem('links', JSON.stringify(links));
}

createLinks(allLinks);
