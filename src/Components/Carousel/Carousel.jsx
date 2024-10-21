import React, {useState,useEffect} from "react";

function Carousel({ children, autoSlideDuration=6000 }) {
  const[current,setCurrent] = useState(0)
  const nextSlide = ()=>{
    setCurrent((current)=> current == children.length - 1 ? 0 : current + 1);
  
  }

  useEffect(()=>{
    const slideInterval = setInterval(nextSlide,autoSlideDuration)

    return ()=> clearInterval(slideInterval) 
  },[children])

  return (
    <div className="overflow-hidden w-full lg:w-1/2 relative ">
      <div className="flex sm:hidden transition-transform ease-out duration-300"  style={{transform:`translateX(-${current*100}%)`}}>
        {children}
      </div>
      <div className="hidden sm:flex transition-transform ease-out duration-300"  style={{transform:`translateX(-${current*50}%)`}}>
        {children}
      </div>
      <div className="absolute bottom-2 left-0 right-0 ">
        <div className="flex items-center justify-center gap-2">
          {children.map((child, index) => (
            <div key={index} className={`transition-all w-2 h-2 rounded-full bg-white ${current===index ? "p-1" : "bg-opacity-50"}`}></div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Carousel;