import React from 'react'

function Button({
    className="",
    bgColor="bg-gradient-to-r from-red-700 to-red-500",
    textColor="text-black",
    type="button",
    children,
    ...props
}) {
  return (
    <button className={`rounded-lg w-fit px-3 py-1 font-robotoBold text-sm transition ease-in-out delay-75 hover:text-white hover:scale-105  duration-300 ${textColor} ${bgColor}`} {...props}>{children}</button>
  )
}

export default Button