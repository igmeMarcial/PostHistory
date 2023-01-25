import React,{useState} from 'react'
import ContentApp from '../components/ContentApp'
import createPostStyle from "./createPost.module.css"
import "../components/style.css"
import { useAppContext } from '../tienda/CrudPost';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [image,setImage] = useState("");
    const [intro,setIntro] = useState("");
    const [completed,setCompleted] = useState(false);
    const [description,setDescription] = useState("");

    const post = useAppContext();
    const navigate = useNavigate();


function handleSubmit(e){
    e.preventDefault();
    if(completed){
        const newPost ={
            id: crypto.randomUUID(),
            title,
            author,
            intro,
            image,
            completed,
            description,
    
        }
        // console.log(newPost)
        post.createPost(newPost);
        navigate("/")
    }else{
        alert("Tienes que aceptar los términos")
    }

}
function handleChangeInput(e){
    const nameInput = e.target.name;
    const value = e.target.value;

    switch (nameInput) {
        case "title":
            setTitle(value)
           
            break;
        case "author":
            setAuthor(value)
           
            break;
        case "intro":
            setIntro(value)
            break;  
        case "completed":
            setCompleted(e.target.checked)
            // console.log(e.target.checked);
            break; 
        case "description":
            setDescription(value)
            break;                      
        default:
            
    }
    
}
function handleChangeFile(e){
    const elementImg = e.target;
    const file = elementImg.files[0];
    
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend=function(){
        setImage(reader.result.toString())
    }
    

}

  return (

       <ContentApp>
            <section className={createPostStyle.sectionForm}>
                <div className={createPostStyle.divFormWrapper}>
                    <div className={createPostStyle.headerForm}>
                        <h3 className={createPostStyle.textTitlePostCreate}>Postea tu historia aqui!</h3>
                    </div>
                    <div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className={createPostStyle.formContainerDisplay}>
                                        <div className={createPostStyle.inputContainerField}>
                                            <label htmlFor='title'></label>
                                            <div className={createPostStyle.wrapInput}>
                                                <input minLength="" name='title' onChange={handleChangeInput}  className={createPostStyle.inputText} type="text" placeholder='Tú título*' required={true}/>
                                            </div>
                                        </div>
                                        <div className={createPostStyle.inputContainerField}>
                                            <label htmlFor='author'></label>
                                            <div className={createPostStyle.wrapInput}>
                                                <input name='author' onChange={handleChangeInput}  className={createPostStyle.inputText} type="text" placeholder='Author*' required={true}/>
                                            </div>
                                        </div>
                                        <div className={createPostStyle.inputContainerField}>
                                            <label htmlFor='intro'></label>
                                            <div className={createPostStyle.wrapInput}>
                                                <input name='intro' onChange={handleChangeInput}  className={createPostStyle.inputText} type="text" placeholder='Tú frase celebré*' required={true}/>
                                            </div>
                                        </div>
                                        <div className={createPostStyle.inputContainerField}>
                                            <div className={createPostStyle.imgContainer}>
                                                <div className={createPostStyle.imgContainerWrapper}>
                                                
                                                    <div className={createPostStyle.addMoreButton}>
                                                         <input required={true} className='file-select'  type="file" name='image' onChange={handleChangeFile} />                            
                                                    </div>
                                                    <div>
                                                       <div className={createPostStyle.uploadedImagen}>
                                                            {!!image ? <img className={createPostStyle.imgRadius} width="100%" height="100%" src={image}  alt="PreviewImage"/> : ""}

                                                       </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={createPostStyle.inputContainerField}>
                                            <label htmlFor='description'></label>
                                            <div className={createPostStyle.wrapInput}>
                                                <input name='description' onChange={handleChangeInput}  className={createPostStyle.inputText} type="text" placeholder='Descripción*' required={true}/>
                                            </div>
                                        </div>
                                        <div className={createPostStyle.inputContainerField}>
                                            <div>
                                            <div className={createPostStyle.completedContainer}>
                                                <div className={createPostStyle.completedWrapp}>
                                                     <input className="completedInput" type="checkbox" name='completed' onChange={handleChangeInput} />
                                                    <label className='labelCompleted' htmlFor='completed'>
                                                      "Aceptas los terminos y condiciones"
                                                    </label>                                           
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className={createPostStyle.inputContainerField}>
                                            <div className={createPostStyle.buttonPostContainer}>
                                                <div className={createPostStyle.buttonPost}>
                                                    <input className='inputUploadButton' type="submit"value="Publicar Post" />
                                                </div>
                                            </div>   
                                        </div>
                                         
                                        
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
       </ContentApp>

       
   
  )
}

export default CreatePost