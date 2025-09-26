import { useRef, useState } from "react";

const SearchView = () => {
  // 검색어: 상태(state)로 관리 -> 사용자에게 즉각적으로 UI를 보여주기 위해
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef("");

  const getSearchValue = (e) => {
    // console.log(inputRef.current.value);
    setSearchText(inputRef.current.value);
  };

  return (
    <>
      <h2>OZ 코딩스쿨</h2>
      <p>검색할 키워드를 입력한 후 검색 버튼을 클릭하세요.</p>
      <div className="search-input">
        <input type="text" ref={inputRef} />
        <button onClick={getSearchValue}>검색</button>
      </div>
      {searchText && (
        <div>
          🔎 <b>{searchText}</b> 에 대해 검색합니다 . . .
        </div>
      )}
    </>
  );
};

export default SearchView;
