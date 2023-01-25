import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ContentApp from '../components/ContentApp'
import { useAppContext } from '../tienda/CrudPost';
import styleView from "./viewPost.module.css"

function ViewPost() {
  const[post,setPost]=useState(null);
  const params = useParams();
  const posts = useAppContext();

  useEffect(()=>{
      const p =posts.getPost(params.postId)
      setPost(p)
  },[])
  if(!post){
    return <ContentApp>Error 404 Perro!!</ContentApp>
  }

  return (
    <ContentApp>
      <div className={styleView.pContainer}>
      <div className={styleView.postContainer}>
        <div className={styleView.gridItemPost}>
            <div>
              <div className={styleView.imagePostTemplate}>
                <div className={styleView.postMediaList}>
                  <div className={styleView.slideTemplate}>
                    <div className={styleView.slideTemplateContent}>
                      <div className={styleView.imgItemView}>
                         {post?.image?<img src={post.image} className={styleView.imgPost}/>: ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className={styleView.gridItemInfo}>
            <div className={styleView.postInfoContainer}>
              <div>
                <h4 className={styleView.titlePost}>
                {post?.title}
                </h4>
              </div>
              <div className={styleView.introTextDes}>
                <h1 className={styleView.postText}>
                  {post?.description}
                </h1>
              </div>
              <div className={styleView.introText}>
                <h6 className={styleView.postIntro}>
                  {post?.intro}
                </h6>
              </div>
              <div style={{"textAlign":"end"}}>
                <h6 className={styleView.postAuthor}>{post?.author}</h6>
              </div>
              
            </div>
        </div>
      </div>
      </div>
    </ContentApp>
  )
}

export default ViewPost