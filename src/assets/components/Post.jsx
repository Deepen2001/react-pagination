import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios';

const Post = () => {

  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  

  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((arr) => setData(arr.data))
  }, [pageNo])



  return (
    <div className='container'>
      <div className="post-container">

        {data.map((item, index) => (

          <div className="img-item">
            <img key={index} src={item.download_url} alt="" />
          </div>
        ))}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  )
}

export default Post
