import React, {useCallback, useEffect} from "react";
import {Restaurant} from "../../entities/Resturant/model";
import {useApi} from "../../shared/Api/useApi";
import {StoreProviderType} from "../StoreProvider";

interface Props {
    restaurants: Restaurant[]
    setState: React.Dispatch<React.SetStateAction<StoreProviderType>>
}

export const useRestaurantStore = ({ restaurants, setState }: Props) => {
    const api = useApi()

    const getRestaurantById = useCallback((id: string) => restaurants.find(restaurant => restaurant.id === id), [restaurants])

    useEffect(() => {
        const restaurants = api.get('api/restaurants')

        setState(prevState => {
            return {
                ...prevState,
                restaurants
            }
        })
    }, [api, setState])

    return { getRestaurantById }
}