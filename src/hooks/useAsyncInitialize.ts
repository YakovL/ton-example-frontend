import { useEffect, useState } from 'react'

// allows to use results of async functions without using await (i.e. state is value, not promise)
export function useAsyncInitialize<T>(func: () => Promise<T>, deps: any[] = []) {
    const [state, setState] = useState<T | undefined>()

    useEffect(() => {
        func().then(result => setState(result))
    }, deps)
  
    return state
}
