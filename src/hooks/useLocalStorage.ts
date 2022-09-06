// to store cart data in local storage so remains when refreshing page:

import { useEffect, useState } from "react"

// only invoke checking local storage once, not every time component rerenders:
export function useLocalStorage<T>(key: string, initialValue:T | (() => T)) { // <T> = generic type
 const [value, setValue] =useState<T>(() => {
  const jsonValue = localStorage.getItem(key)
  if (jsonValue != null) return JSON.parse(jsonValue)

  if (typeof initialValue === "function") {
   return (initialValue as () => T)()
  } else {
   return initialValue
  }
 }) // this gets the value from local storage or the initial value passed in

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value))
 }, [key, value])

 return [value, setValue] as [typeof value, typeof setValue] // first element always value, second setValue
}
