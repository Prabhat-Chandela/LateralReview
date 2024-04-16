import { motion as m } from "framer-motion"

function Blogs() {
  return (
    <div className="mt-9 sm:mt-7 w-full flex flex-col gap-7">
      <section className="w-full">
        <div className="overflow-hidden">
          <m.h2
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw]">
            BLOGPOST SHELF
          </m.h2>
        </div>

      </section>


      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}>
        <div>
        </div>
      </m.section>
    </div>
  )
}

export default Blogs;