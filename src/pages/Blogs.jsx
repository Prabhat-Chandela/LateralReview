import { motion as m } from "framer-motion";
import { useSelector } from "react-redux";
import { ArticleCard } from "../Components/index";

function Blogs() {
  const allBlogs = useSelector((state) => state.post.allBlogs);

  return (
    <div className="mt-9 sm:mt-7 w-full flex flex-col gap-7">
      <section className="w-full flex flex-col gap-5">
        <div className="overflow-hidden">
          <m.h2
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw]">
            BLOGPOST SHELF
          </m.h2>
        </div>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          className="text-white font-robotoRegular text-xs sm:text-sm sm:w-[60%] lg:w-[47%]">Step into the realm of global leadership with our blog, where we explore the profound insights and inspiration from the experiences of influential figures worldwide.</m.p>

      </section>


      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}>
        <div className="grid grid-cols-4 sm:gap-3">
          {allBlogs ? (
            allBlogs.map((blog) => (
              <div key={blog.$id} className='py-3 w-full col-span-4 sm:col-span-2 lg:col-span-1'>
                <ArticleCard {...blog} />
              </div>
            ))
          ) :
            (
              <div> Loading.....</div>
            )}
        </div>
      </m.section>
    </div>
  )
}

export default Blogs;