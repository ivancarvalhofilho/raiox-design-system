import { useEffect, useRef } from 'react'

export const handleOutsideDivClick = callbackAction => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          callbackAction()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  return wrapperRef
}
