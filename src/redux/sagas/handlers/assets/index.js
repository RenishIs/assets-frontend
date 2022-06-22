import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import openNotificationWithIcon from "../../../../Helper/Notification";
import { addAssetError, addAssetSuccess, deleteAssetError, deleteAssetSuccess, editAssetError, editAssetSuccess, getSingleAssetError, getSingleAssetSuccess, getAssets, getAssetsSuccess } from "../../../actions/assets/index";
import { addAssetRequest, deleteAssetRequest, editAssetRequest, getAssetsRequest } from "../../requests/assets/index";
import { getSingleAssetRequest } from "../../requests/assets/index";

export function* handlerGetAssets(){
    try{
        const { data } = yield call(getAssetsRequest)
        yield put(getAssetsSuccess(data))
    }
    catch(err){

    }
}

export function* handlerGetSingleAsset({payload}){
    console.log(payload,'single payload handler')
    try{
        const { data } = yield call(getSingleAssetRequest, payload)
        console.log(data,'d')
        yield put(getSingleAssetSuccess(data))
    }
    catch(err){
        console.log(err,'err single handler')
        openNotificationWithIcon('error', err.message)
        yield put(getSingleAssetError(err.message, err.data || {}))
    }
}

export function* handlerEditAsset({payload}){
    try{
        const data = yield call(editAssetRequest, payload)
        yield put(editAssetSuccess(data))
        yield put(push('/assets'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(editAssetError(err.message, err.data || {}))
    }
}

export function* handlerAddAsset({payload}){
    try{
        const data = yield call(addAssetRequest, payload)
        yield put(addAssetSuccess(data))
        yield put(push('/assets'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(addAssetError(err.message, err.data || {}))
    }
}

export function* handlerDeleteAsset({payload}){
    console.log(payload, 'payload in handler')
    try{
        const data = yield call(deleteAssetRequest, payload)
        console.log(data, 'data handler')
        yield put(deleteAssetSuccess(data))
        yield put(getAssets())
    }
    catch(err){
        console.log(err,'err')
        openNotificationWithIcon('error', err.message)
        yield put(deleteAssetError(err.message, err.data || {}))
    }
}