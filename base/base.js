function getResults(page = 1) {
  return fetch([
    `https://unsplash.com/napi/photos/curated`,
    `?page=${page}`,
    `&per_page=50`,
    `&order_by=latest`,
    `&client_id=d69927c7ea5c770fa2ce9a2f1e3589bd896454f7068f689d8e41a25b54fa6042`
  ].join(''))
  .then(res => res.json());
}
