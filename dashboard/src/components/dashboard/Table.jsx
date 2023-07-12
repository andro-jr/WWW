import React, { useState } from 'react';

const Table = ({ headData, bodyData, renderHead, renderBody, limit }) => {
  const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;
  const [dataShow, setDataShow] = useState(initDataShow);
  const [currPage, setCurrPage] = useState(0);

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / Number(limit));
    pages = bodyData.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);

    setDataShow(bodyData.slice(start, end));
    setCurrPage(page);
  };

  return (
    <div className="overflow-hidden rounded-lg">
      <div className="table-wrapper overflow-x-auto">
        <table className="min-w-full bg-white shadow-md">
          {headData && renderHead && (
            <thead>
              <tr className="bg-gray-200">
                {headData.map((item, index) => renderHead(item, index))}
              </tr>
            </thead>
          )}
          {bodyData && renderBody && (
            <tbody>
              {dataShow.map((item, index) => renderBody(item, index))}
            </tbody>
          )}
        </table>
      </div>
      {pages > 1 && (
        <div className="flex justify-end mt-4">
          <nav className="inline-flex rounded-md shadow">
            <div className="flex">
              {range.map((item, index) => (
                <button
                  key={index}
                  className={`px-3 py-2 rounded-md ${currPage === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  onClick={() => selectPage(index)}
                >
                  {item + 1}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Table;
