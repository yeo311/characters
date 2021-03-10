import React from 'react';

const Character = ({ character, handleDelete }) => {
  let tvSeriesLen = character.tvSeries.length;
  if (character.tvSeries.length < 2 && character.tvSeries[0] === '') {
    tvSeriesLen = 0;
  }

  return (
    <div className="character_card">
      <div className="character_data">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{character.name}</td>
            </tr>
            <tr>
              <th>Aliases</th>
              <td>{character.aliases.join(', ')}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{character.titles.join(', ')}</td>
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
