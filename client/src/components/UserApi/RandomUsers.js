import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const isSearched = searchUser => each =>
  each.name.first.toLowerCase().includes(searchUser.toLowerCase());

const RandomUsers = () => {
  const [myApi, setMyApi] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then(data => data.json())
      .then(json_result => {
        setData(json_result.results);
        let myApi = renderData(json_result.results);
        setMyApi(myApi);
      });
  }, []);

  const renderData = data => {
    return data.map((item, idx) => {
      return (
        <div key={idx}>
          <img src={item.picture.thumbnail} alt="" /> {item.name.first} <br />
          {item.email}
          <hr />
        </div>
      );
    });
  };

  
  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentPosts = myApi?.slice(indexOfFirstPost, indexOfLastPost); 

  
  const handleSearchInput = event => {
    setSearchUser(event.target.value);
    const newData = renderData(
      data.filter(item =>
        item.name.first.toLowerCase().includes(event.target.value)
      )
    );
    setMyApi(newData);
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Search onChange={handleSearchInput} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={myApi?.length}
        paginate={paginate}
        />
      {currentPosts} 
    
      </div>
  );
};

const Search = ({ onChange }) => {
  return (
    <div>
      <input
        type="text"
        autoFocus={true}
        placeholder="search users"
        onChange={onChange}
      />
    </div>
  );
};

export default RandomUsers;
