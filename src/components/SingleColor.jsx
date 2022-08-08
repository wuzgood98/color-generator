import { useState, useEffect } from "react";
import rgbToHex from "./utils";

function SingleColor({ weight, rgb, index }) {
  const [alert, setAlert] = useState(false)
  const hexColor = rgbToHex(...rgb)

  const handleCopy = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexColor)
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article onClick={handleCopy} style={{ backgroundColor: hexColor }} className="relative w-full px-8 py-4 cursor-pointer text-base normal-case">
      <p className={`mb-0  ${index > 7 ? 'text-clrWhite' : 'text-clrGrey1'}`}>{weight}%</p>
      <p className={`mb-0 ${index > 7 ? 'text-clrWhite' : 'text-clrGrey1'}`}>{hexColor}</p>
      {alert && <p className="absolute top-[35%] left-32 uppercase text-sm mt-2 md:left-12 md:top-1/2">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor