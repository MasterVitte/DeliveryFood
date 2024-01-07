import {useCallback} from "react";
import {Restaurant} from "../../entities/Resturant/model";

interface Props {
    restaurants: Restaurant[]
}

export const useRestaurantStore = ({ restaurants }: Props) => {
    const getRestaurantById = useCallback((id: string) => restaurants.find(restaurant => restaurant.id === id), [restaurants])

    return { getRestaurantById }
}