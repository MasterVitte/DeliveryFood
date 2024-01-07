import {useEffect, useState} from "react";
import {useStore} from "../../../store/StoreProvider";
import {Restaurant} from "../../../entities/Resturant/model";

export const useRestaurantFetch = (id: string) => {
    const { getRestaurantById } = useStore()

    const [restaurant, setRestaurant] = useState<Restaurant | undefined>(undefined)

    useEffect(() => {
        setRestaurant(getRestaurantById(id))
    }, [getRestaurantById, id])

    return restaurant
}