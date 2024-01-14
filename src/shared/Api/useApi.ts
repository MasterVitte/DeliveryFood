import {LocalStorageApi} from "../../api/LocalStorageApi"

export const useApi = () => {
    return LocalStorageApi.getInstance()
}