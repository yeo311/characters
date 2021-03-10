import React from 'react';

const Character = ({ character, handleDelete }) => {
  let tvSeriesLen = character.tvSeries.length;
  if (character.tvSeries.length < 2 && character.tvSeries[0] === '') {
    tvSeriesLen = 0;
  }
  const aliases = character.aliases.join(', ');
  const titles = character.titles.join(', ');

  return (
    <div className="character_card">
      <div className="character_data">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td title={character.name}>
                {character.name ? character.name : '-'}
              </td>
            </tr>
            <tr>
              <th>Aliases</th>
              <td title={aliases}>{aliases ? aliases : '-'}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td title={titles}>{titles ? titles : '-'}</td>
            </tr>
            <tr>
              <th>Books</th>
              <td>{character.books.length}</td>
            </tr>
            <tr>
              <th>TV Series</th>
              <td>{tvSeriesLen}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="delete_button_area">
        <button
          className="delete_button"
          onClick={() => handleDelete(character.url)}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default Character;
