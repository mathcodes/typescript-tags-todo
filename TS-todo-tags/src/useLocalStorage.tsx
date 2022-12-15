import { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue:T | (()=>T)) {
  const [value, setValue ] = useState<T>(()=>{
    const jsonValue = localStorage.getItem(key)

    if(jsonValue ==  null) {
        if(typeof initialValue === "function") {
          return (initialValue as () => T)()
        }else{
          return initialValue
        }
    } else {
      return JSON.parse(jsonValue)
    }
  })

}