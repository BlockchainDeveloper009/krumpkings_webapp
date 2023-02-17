
import axios from 'axios'
import React, {useEffect, useState} from 'react'

export function useAxiosGet(url){
    
    const [products, setProducts] = useState({
        loading:false,
        data:null,
        error:false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data:null,
            error: false
        })

        axios.get(url)
            .then(response=> {
                setProducts({
                    loading:false,
                    data: response.data,
                    error:false
                })
            })
            .catch(() => {
                setProducts({
                    loading:false,
                    data: response.data,
                    error:false
                })
            })
    },[Url])

    return products;
}
const id =0
const url = `http://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/${id}`
let products = useAxiosGet(url)
