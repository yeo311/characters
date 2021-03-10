import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItem,
  increasePage,
  initCharacters,
  setPage,
} from '../../modules/characterList';
import Character from './Character';

const CharacterList = () => {
  const { charList } = useSelector((state) => ({
    charList: state.characterList.list,
  }));

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteItem(id));
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('page')) {
      const pageParam = Number(params.get('page'));
      if (!isNaN(pageParam)) {
        dispatch(setPage(pageParam));
      } else {
        dispatch(initCharacters());
      }
    } else {
      dispatch(initCharacters());
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log('GET More');
        dispatch(increasePage());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <section>
      {charList.map((item) => {
        return item.isDeleted ? null : (
          <Character
            character={item}
            key={item.url}
            handleDelete={handleDelete}
          />
        );
      })}
    </section>
  );
};

export default CharacterList;
