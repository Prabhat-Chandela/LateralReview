import databaseService from "../appwrite/databaseService"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllMagazines} from "../store/postSlice";
import {MagazineCard} from "../Components/index";

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
    <div>
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
    </div>
  );
};

export default Magazines;