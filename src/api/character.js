export const getCharacters = async (pageNum, filter) => {
  let filterQuery = '';
  if (filter) {
    if (filter.alive) {
      filterQuery += '&isAlive=true';
    }
    if (filter.women) {
      filterQuery += '&gender=Female';
    }
  }
  const resp = await fetch(
    `https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=10${filterQuery}`
  );
  let respData = await resp.json();
  if (filter && filter.tvSeries) {
    respData = respData.filter((item) => {
      return item.tvSeries[0] === '';
    });
  }
  return respData;
};
