import { useState, useEffect } from 'react'

const useFetch = (url, initialState = []) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(initialState)
    const [error, setError] = useState(null)

    const getData = () => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setLoading(false)
                setData(response)
            })
            .catch((error) => {
                setError(error)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        loading,
        data,
        error
    }
}

export default useFetch