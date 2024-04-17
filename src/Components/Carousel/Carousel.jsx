
function Carousel({ children }) {
  return (
    <div className="overflow-hidden relative w-full h-full">
      <div className="flex">
        {children}
      </div>
    </div>
  )
}

export default Carousel;