import databaseService from "../appwrite/databaseService"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllMagazines} from "../store/postSlice";
import {MagazineCard} from "../Components/index";
import {motion as m} from "framer-motion";

function Magazines() {
  const dispatch = useDispatch();
  useEffect(()=>{
    databaseService.getMagazines().then((magazines)=>{
      if(magazines){
        dispatch(getAllMagazines({allMagazines:magazines.documents}))
      }
    })
  },[])

  const allMagazines = useSelector((state)=>state.post.allMagazines)

  return (
    <m.div 
    initial={{opacity:0, x:"100%"}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.7 , ease:"backInOut"}}>
      <section>
        <div>
          {allMagazines ? (
            allMagazines.map((magazine)=>(
              <div key={magazine.$id}>
                <MagazineCard {...magazine}/>
              </div>
            ))
          )  :  (
            <div>Loading...</div>
        )}
        </div>
      </section>
    </m.div>
  );
};

export default Magazines;