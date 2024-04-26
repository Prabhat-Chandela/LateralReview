import { useSelector } from "react-redux";
import { MagazineCard } from "../Components/index";
import { motion as m } from "framer-motion";

function Magazines() {
  const allMagazines = useSelector((state) => state.post.allMagazines);

  return (
    <div className="w-full mt-9 sm:mt-7 flex flex-col gap-14">

      <section className="w-full flex flex-col gap-5">
        <div className="overflow-hidden">
          <m.h2
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw]">
            MAGAZINE GALORE
          </m.h2>
        </div>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          className="text-white font-robotoRegular text-xs sm:text-sm sm:w-[60%] lg:w-[47%]">Embark on a journey into the minds of global leaders, gaining profound insights and inspiration from their experiences through our magazine. Delve deep and discover the perspectives shaping our world today.</m.p>


      </section>


      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}>
        <div className="w-full grid grid-cols-12 gap-5 lg:gap-7">
          {allMagazines ? (
            allMagazines.map((magazine) => (
              <div className="w-full col-span-12 sm:col-span-6 lg:col-span-3 p-3" key={magazine.$id}>
                <MagazineCard {...magazine} />
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </m.section>

    </div>
  );
};

export default Magazines;