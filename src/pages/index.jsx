import React from 'react'
import ContentApp from '../components/ContentApp'
import Post from '../components/Post';
import { useAppContext } from '../tienda/CrudPost'
import itemStyle from "../components/postItem.module.css"

function Index() {
    const postsAll = useAppContext();
    console.log(postsAll)
  return (
    <ContentApp>
        <div className={itemStyle.cardList}>
            {postsAll.posts.map((item)=>{
                return <Post key={item.id} post={item}/>             
            })} 
        </div>
    </ContentApp>
  )
}

export default Index
