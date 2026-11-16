import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({item}) => {
  const bookId = item._id || item.id;
  const navigate = useNavigate();

  const openBuyPage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/buy/${bookId}`, { state: { book: item } });
  };

  return (
    <>
    <div className='mt-2 mb-4 px-2'>
      <Link
        to={`/book/${bookId}`}
        state={{ book: item }}
        className="card block w-full shadow-2xl inset-shadow-2xs h-full hover:scale-105 duration-200"
        aria-label={`View details for ${item.name}`}
      >
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <button
        type="button"
        onClick={openBuyPage}
        className="cursor-pointer rounded-full px-2 py-1 hover:bg-pink-500 hover:text-white duration-200"
      >
        Buy now
      </button>
    </div>
  </div>
      </Link>
  </div>
    </>
  )
}

export default Card
