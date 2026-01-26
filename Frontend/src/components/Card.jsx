import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div className='mt-2 mb-4 px-2'>
      <div className="card w-92 shadow-2xl inset-shadow-2xs h-full hover:scale-105 duration-200">
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
      <div className="cursor-pointer px-2 py-1 rounded-full hover:bg-pink-500 hover:text-white duration-200 ">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
