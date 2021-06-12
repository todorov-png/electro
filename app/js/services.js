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