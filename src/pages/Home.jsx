import { ArticleCard, Carousel } from "../Components/index";
import { Newspaper } from "lucide-react";
import { easeInOut, motion as m } from "framer-motion";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import databaseService from "../appwrite/databaseService";
import bucketService from "../appwrite/bucketService";
import { getAllBlogs, getAllMagazines } from "../store/postSlice"

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {

    databaseService.getMagazines().then((magazines) => {
      if (magazines) {
        dispatch(getAllMagazines({ allMagazines: magazines.documents }))
      }
    });

    databaseService.getBlogs().then((blogs) => {
      if (blogs) {
        dispatch(getAllBlogs({ allBlogs: blogs.documents }))
      }
    })

  }, [])

  const allMagazines = useSelector((state) => state.post.allMagazines);
  const allBlogs = useSelector((state) => state.post.allBlogs);


  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeInOut }}
      className="font-robotoBlack flex flex-col sm:p-5 w-full gap-20 lg:gap-32 mt-12 sm:mt-5">

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
        className="w-full bg-transparent p-5 shadow-[0_3px_20px_rgb(255,255,255,0.2)]">
        <Carousel>
          {allMagazines.map((magazine) => (
            <div className="w-full overflow-hidden flex items-center justify-between py-5 px-[7vw]" key={magazine.$id}>
          
              <div className="w-full h-full">
                <img className="overflow-hidden w-full object-fill rounded-md items-center justify-center" src={bucketService.getMagazinePoster(magazine.magazinePoster)} alt={magazine.magazineTitle} />
              </div>

            </div>

          ))}
        </Carousel>
      </m.section>

      <section className="flex flex-col gap-3">
        <h2 className=" bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span> Recent Blogs</h2>

        <div className="flex gap-3 sm:gap-0 flex-wrap">

          {allBlogs.filter((blog) => blog.guestTag == "nonGuest").map((blog) => (
            <div key={blog.$id} className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
              <ArticleCard {...blog} />
            </div>
          ))
          }

        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className=" bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span>Guest Posts</h2>

        <div className="flex gap-3 sm:gap-0 flex-wrap">
          {allBlogs.filter((blog) => blog.guestTag == "guest").map((blog) => (
            <div key={blog.$id} className='py-3 sm:p-2 w-[47%] sm:w-1/4'>
              <ArticleCard {...blog} />
            </div>
          ))

          }
        </div>
      </section>

    </m.div>
  )
}

export default Home;