export default async function getData(url) {

  return fetch(url)
    .then(resp => {

      if (!resp.ok) {
        throw Error("There was a problem fetching data.");
      }

      return resp.json();
    });
}


//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export async function getData2(url) {
  let response = await fetch(url, { method: 'POST', mode: 'cors' });
  if (response.status !== 200) {
    return null
  }
  return response.data()
}

export function createItem(url, item) {
  return fetch(
    url,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }
  ).then(r => {
    if (!r.ok) {
      throw new Error("There was a problem creating the item!");
    }
    return r.json();
  });
}

export function editItem(url, item) {
  return fetch(
    url,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }
  ).then(r => {
    if (!r.ok) {
      throw new Error("There was a problem updating the item!");
    }
    return r.json();
  });
}

export function deleteItem(url) {
  return fetch(
    url,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }
  ).then(r => {
    if (!r.ok) {
      throw new Error("There was a problem deleting the item!");
    }
    return r.json();
  });
}

