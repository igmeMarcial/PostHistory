import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    posts: [],
    createPost: (item) => {},
    getPost: (id) => {},
    updatePost: (item) => {},
})

export default function CrudPost({children}){
    const [posts, setPosts] = useState([
        {
            id: "2ad6b5e2-9c2b-4959-b740-9335c85eed74",
            title: "La iguana soberbio",
            author: "Igme Marcial",
            intro: "La iguana nos enseña que la libertad es esencial para nuestra felicidad y que siempre debemos luchar por ella.",
            image: "https://cdn.discordapp.com/attachments/990816819654852648/1067571245891190915/45749_humanoid_cameleon_designer_artist_reassuring_wrapper_navy_f2424b64-d23c-463b-81e6-e252f03f512f.png",
            completed: true,
            description: "La iguana salvaje vivía en la selva tropical. Escapó de su cautiverio y volvió a su hábitat natural. Ahora es libre y feliz en su hogar selvático.",  
        },
        {
            id: "9942219d-eecc-42b5-a421-2d9b12736b72",
            title: "El Triste Final del León Pequeño",
            author: "Igme Marcial",
            intro: "La importancia de la libertad y el bienestar de los animales",
            image: "https://cdn.discordapp.com/attachments/1041563971301417030/1041565277546098688/147C162F-BF74-4E76-A6A3-100C2CA0E270.jpg",           
            completed: true,
            description: `Un leoncito llamado Leo
            vivía en un jardín zoológico
            siempre triste y solo
            hasta que murió en cautiverio.`,
          },
          {
            id: "9942219d-eecc-42b5-a421-2d9b12736b71",
            title: "El sueño interrumpido del niño ",
            author: "El wey Marcial",
            intro: "El texto nos muestra cómo la vida puede ser dura para aquellos que están en situaciones de pobreza o marginación.",
            image: "https://cdn.discordapp.com/attachments/990816819654852648/1067853491554504856/agnrafael_hyper_realistic_calm_lake_with_a_seated_child_who_is__68be645f-68ea-46d3-83ad-bd85c63f3d84.png",          
            completed: true,
            description: `Un niño huerfano llamado Guille
            vivía junto a una laguna
            pescaba para sobrevivir
            un día la laguna se seco
            y Guille murió de hambre.`,
          },
          {
            id: "9942219d-eecc-42b5-a421-2d9b112736b76",
            title: "El gato villano y el amor incondicional",
            author: "Marcial Igme",
            intro: "La importancia de dar una oportunidad a aquellos que son diferentes o tienen un pasado complicado.",
            image: "https://cdn.discordapp.com/attachments/1041563971301417030/1041571080168554597/762E0E6B-B4E7-40FB-A5CB-6D6DE044EB14.jpg",          
            completed: true,
            description: `Un gato villano llamado Nero
            se dedicaba a robar comida
            un día conoció a una mujer
            que lo adoptó y lo convirtió en su mascota amada.`,
          }
    ]);
    // console.log(posts);

    function createPost(item){
        const aux = [...posts];
        aux.unshift(item)
        setPosts([...aux])
       
    }
    function getPost(id){
        const post = posts.find((item)=>item.id===id);
        return post;
    }
    function updatePost(item){
        const index = posts.findIndex((ind)=>ind.id===item.id);
        const aux = [...posts]
        aux[index]={...item};
        return true;
    }

    return(
        <AppContext.Provider value={{
            posts,
        createPost,
        getPost,
        updatePost,
        }}>
            {children}
        </AppContext.Provider>
    )

}

export function useAppContext(){
    return useContext(AppContext)
}
