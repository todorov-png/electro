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