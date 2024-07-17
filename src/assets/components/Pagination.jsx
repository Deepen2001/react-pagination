import React from 'react'

const Pagination = ({ pageNo, setPageNo }) => {

  const prevThree = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index).filter((value) => value > 0).reverse()
  const nextThree = Array.from({ length: 4 }, (_, index) => pageNo + index)
  console.log([...prevThree, ...nextThree])
  const paginationArr = [...prevThree, ...nextThree]
  return (
    <div className='pagination-container'>
      <div onClick={() => setPageNo(pageNo === 1 ? 1 : pageNo - 1)} className="page-btn">{"<"}</div>

      {paginationArr.map((value) => (
        <div className={` ${value === pageNo ? 'active page-btn' : 'page-btn'}`}>{value}</div>
      ))}

      <div onClick={() => setPageNo(pageNo + 1)} className="page-btn">{">"}</div>
    </div>
  )
}

export default Pagination
