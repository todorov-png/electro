'use strict';

async function getDataBD(url, data) {
  const res = await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
  return await res.json();
};

function formToJSON(form) {
  const formData = new FormData(form),
        json = JSON.stringify(Object.fromEntries(formData.entries()));

  return json;
}

function getNewDate() {
  const date = new Date(),
        options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timezone: 'UTC'
        };

return date.toLocaleString("ru", options);
}


function removeOldElement() {
  const oldElement = document.querySelectorAll('.content-page');
    if (oldElement.length !== 0) {
      oldElement.forEach(item => item.remove());
    }
}

function closeBurgerMenu() {
  document.querySelector(".menu-burger__header").classList.remove("open-menu");
  document.querySelector(".header__nav").classList.remove("open-menu");
}

function transitionPage(url) {
  switch (url[0]) {
    case '#mb':
        if (url[1] === undefined) {
            new Categories('.wrapper', 'mb').render();
        } else if (url[2] === undefined) {
            renderElement('description', 'mb'+url[1]);
        } else {
            renderElement(url[2], 'mb'+url[1]);
        }
    break;
    case '#cp':
        if (url[1] === undefined) {
            new Categories('.wrapper', 'cp').render();
        } else if (url[2] === undefined) {
            renderElement('characteristic', 'cp'+url[1]);
        } else {
            renderElement(url[2], 'cp'+url[1]);
        }
    break;
    case '#gc':
        if (url[1] === undefined) {
            new Categories('.wrapper', 'gc').render();
        } else if (url[2] === undefined) {
            renderElement('characteristic', 'gc'+url[1]);
        } else {
            renderElement(url[2], 'gc'+url[1]);
        }
    break;
    case '#rm':
        if (url[1] === undefined) {
            new Categories('.wrapper', 'rm').render();
        } else if (url[2] === undefined) {
            renderElement('description', 'rm'+url[1]);
        } else {
            renderElement(url[2], 'rm'+url[1]);
        }
    break;
    case '#comparison':
      new ComparisonPage('.wrapper').render();
    break;
    default:  
      new IndexPage('.wrapper').render();
    break;
  }
}

window.addEventListener('hashchange', function(e) {
  const index = e.newURL.indexOf('#');
  let url;
  if (index != -1) {
    url = e.newURL.slice(index).split('/');
    transitionPage(url);
  } else {
    transitionPage('');
  }
});