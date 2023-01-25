import React from 'react'
import itemStyle from "./postItem.module.css"
import { Link } from 'react-router-dom'

function Post({post}) {
  return (
    <Link to={`/viewPost/${post.id}`}>
      <div className={itemStyle.card}>
      <img className={itemStyle.cardImage} src={post.image} width="250" alt={post.title}/>
      <div className={itemStyle.titleContent}>
        <p className={itemStyle.cardTitleInfo}>{post.title}</p> 
      </div>
    </div>
    </Link>
    
  )
}

export default Post