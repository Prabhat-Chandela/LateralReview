import databaseService from "../appwrite/databaseService"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMagazines } from "../store/postSlice";
import { MagazineCard } from "../Components/index";
import { motion as m } from "framer-motion";

function Magazines() {
  const dispatch = useDispatch();
  useEffect(() => {
    databaseService.getMagazines().then((magazines) => {
      if (magazines) {
        dispatch(getAllMagazines({ allMagazines: magazines.documents }))
      }
    })
  }, [])

  const allMagazines = useSelector((state) => state.post.allMagazines)

  return (
    <div className="w-full mt-9 sm:mt-7 flex flex-col gap-7">

      <section className="w-full">
        <div className="overflow-hidden">
          <m.h2
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw]">
            MAGAZINE GALORE
          </m.h2>
        </div>

      </section>


      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}>
        <div>
          <div>
            {allMagazines ? (
              allMagazines.map((magazine) => (
                <div key={magazine.$id}>
                  <MagazineCard {...magazine} />
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </m.section>

    </div>
  );
};

export default Magazines;