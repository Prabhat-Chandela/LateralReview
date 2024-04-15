import { ArticleCard, Button } from "../Components";
import { Newspaper } from "lucide-react";
import { easeInOut, motion as m } from "framer-motion";
function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeInOut }}
      className="font-robotoBlack flex flex-col sm:p-5 w-full gap-20 lg:gap-32 mt-5">

      <section className="w-full flex flex-col gap-7 items-center justify-center mt-5 sm:mt-10">

        <div className="w-full overflow-hidden">
          <m.h1
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="font-robotoBlack bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent text-[7vw] sm:text-[6vw] flex flex-col items-center tracking-[1.5vw] ">LATERAL REVIEW <span className="text-sm sm:text-lg font-robotoMedium text-white  bg-red-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 w-fit px-1 sm:px-3 py-1">Creating Brands</span></m.h1>

        </div>

      </section>

      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full h-[50vh] bg-gradient-to-r from-red-700 to-red-500 ">

      </m.section>

      <section className="flex flex-col gap-3">
        <h2 className="text-red-700 font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span> Recent Blogs</h2>

        <div className="flex gap-3 sm:gap-0 flex-wrap">

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-red-700 font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span>Guest Posts</h2>

        <div className="flex gap-3 sm:gap-0 flex-wrap">

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

          <div className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
            <ArticleCard />
          </div>

        </div>
      </section>

    </m.div>
  )
}

export default Home;