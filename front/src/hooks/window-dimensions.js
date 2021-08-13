import {useEffect, useState} from "react";


function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  return { width, height }
}


export default function useWindowDimensions() {
  const [dimensions, setWindowDimensions] = useState({width: undefined, height: undefined})

  useEffect(() => {
    function resize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', resize)
    resize()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return dimensions
}