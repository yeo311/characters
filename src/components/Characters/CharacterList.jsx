import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItem,
  increasePage,
  initCharacters,
  setPage,
} from '../../modules/characterList';
import Character from './Character';
import _ from 'lodash';

const CharacterList = () => {
  const { charList, loading, isError } = useSelector((state) => ({
    charList: state.characterList.list,
    loading: state.characterList.loading,
    isError: state.characterList.isError,
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
        dispatch(increasePage());
      }
    };

    const throttleScroll = _.throttle(function () {
      handleScroll();
    }, 300);

    window.addEventListener('scroll', throttleScroll, false);
    return () => {
      window.removeEventListener('scroll', throttleScroll, false);
    };
  }, [dispatch]);

  return (
    <section>
      {isError ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          오류가 발생했습니다.
        </div>
      ) : (
        charList.map((item) => {
          return item.isDeleted ? null : (
            <Character
              character={item}
              key={item.url}
              handleDelete={handleDelete}
            />
          );
        })
      )}
      {loading && <div className="loader_container">Loading...</div>}
    </section>
  );
};

export default CharacterList;
