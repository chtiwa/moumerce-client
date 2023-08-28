import { useState, useEffect } from "react"

interface useDebounceProps {
  value: string
  milliSeconds: number
}

// each time we are passing a new value and the hook doesn't return a new value until the timeout is finished
export const useDebounce: React.FC<useDebounceProps> = ({
  value,
  milliSeconds
}) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, milliSeconds)
    return () => clearTimeout(handler)
  }, [value, milliSeconds])
  return debouncedValue
}
