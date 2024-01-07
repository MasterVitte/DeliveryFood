import {useStore} from "../../../store/StoreProvider";
import {useEffect, useState} from "react";
import {Order} from "../../../entities/Order/model";

export const useOrderItemFetch = (id: string | null) => {
    const { getOrderById } = useStore()

    const [data, setData] = useState<Order | undefined>(undefined)

    useEffect(() => {
        if (id) {
            setData(getOrderById(id))
        }
    }, [getOrderById, id])

    return data
}