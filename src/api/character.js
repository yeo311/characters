export const getCharacters = async (pageNum, filter) => {
  console.log(pageNum);
  console.log(filter);
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
  const respData = await resp.json();

  console.log(respData);
  return respData;
};
