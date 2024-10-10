import { useEffect, useState } from "react"
import { apiTypes } from "../Types/TypesApi"
import { Myfetch } from "../MyFetch/MyFetch"


export const useFetch = (url: string) => {
    const [data, setData] = useState<apiTypes>()

    useEffect(() => {
        const wait = async () => {
            console.log("Wait")
            const newData = await Myfetch()
            setData(newData)
        }
        wait()
    }, [url])

    return {
        data
    }
}
