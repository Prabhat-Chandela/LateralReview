import React,{ useId } from "react";

function Input({ label,
  labelbg = "bg-black",
  labelTextCol = "text-red-600",
  type = "text",
  className = "",
  ...props

}, ref) {

  const id = useId()
  return (
    <div className='w-full flex relative flex-col gap-3'>

      {label && <label className={`w-fit absolute -top-3 left-3 ${labelbg} ${labelTextCol} px-3 py-1 text-sm font-semibold rounded-lg tracking-[0.5vw] inline-block mb-1`} htmlFor={id}>{label}</label>}

      <input type={type} className={`p-2 sm:p-3 rounded-lg bg-transparent placeholder:text-white/50 placeholder:text-xs text-red-600 outline-none focus:border-red-600  duration-200 border border-red-700 w-full ${className}`}
        ref={ref} id={id}
        {...props} />

    </div>
  )
}

export default  React.forwardRef(Input);