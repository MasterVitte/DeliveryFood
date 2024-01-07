import Restaurant1PreviewImage from "../../shared/images/restaurant1_preview.png";
import Restaurant1DetailImage from "../../shared/images/restaurant1_detail.png";
import MenuItem1Image from "../../shared/images/menu_item1.png";
import {StoreProviderType} from "../StoreProvider";

export const mockStore: StoreProviderType = {
    restaurants: [
        {
            id: '1',
            name: 'Secret Kitchen',
            imagePreview: Restaurant1PreviewImage,
            imageDetail: Restaurant1DetailImage,
            rating: 4.7,
            feedBackCount: 200,
            menu: [
                {
                    id: '11',
                    name: 'Dream Team',
                    image: MenuItem1Image,
                    price: 1830,
                    weight: 715
                }
            ]
        },
    ],
    cart: {
        restaurantId: null,
        items: [],
        total: 0
    },
    orders: [],
    activeOrderOnView: null
}