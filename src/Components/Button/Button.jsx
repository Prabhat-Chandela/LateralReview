import React from 'react'

function Button({
    className="",
    bgColor="bg-black",
    textColor="text-red-700",
    type="button",
    children,
    ...props
}) {
  return (
    <button className={`rounded-lg w-fit px-3 py-1 font-robotoMedium text-sm hover:bg-white ${textColor} ${bgColor}`} {...props}>{children}</button>
  )
}

export default Button