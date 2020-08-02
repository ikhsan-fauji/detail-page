import matchesScript from "../js/match.js";
import matchDetailScript from "../js/match-detail.js";

const main = async () => {
  try {
    console.debug('Called')
    let page = window.location.hash.substr(1);
    if(!page) page = 'matches';
    await _loadPage(page);
  } catch (error) {
    console.error(error.message)
  }
}


const _loadPage = async (page, id) => {
  const response = await fetch(`./${page}.html`);
  const template = await response.text();

  _setContent(template);
  _loadScript(page, id);
}

const _setContent = (contentValue) => {
  if (contentValue) {
    const content = document.querySelector('#app');
    content.innerHTML = contentValue;
  }
}

const _loadScript = (page, id) => {
  switch (page) {
    case 'matches':
      matchesScript(_loadPage)
      break;
    case 'match-detail':
      matchDetailScript(id)
      break;
    default:
      matchesScript(_loadPage)
      break;
  }
}

export default main;
