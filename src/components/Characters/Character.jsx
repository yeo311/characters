import React from 'react';

const Character = ({ charactor }) => {
  return (
    <div className="charactor_card">
      <div className="charactor_data">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{charactor.name}</td>
            </tr>
            <tr>
              <th>Aliases</th>
              <td>{charactor.aliases.join(', ')}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{charactor.titles.join(', ')}</td>
            </tr>
            <tr>
              <th>Books</th>
              <td>{charactor.books.length}</td>
            </tr>
            <tr>
              <th>TV Series</th>
              <td>{charactor.tvSeries.length}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{charactor.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="delete_button_area">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Character;
