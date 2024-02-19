import { ImagePickerAsset } from "expo-image-picker";
import { OCR_API_ENDPOINT } from "./apiEndpoints";

export const performOcrApiCall = async (file: ImagePickerAsset) => {
    const apikey = "qkEhDsdpUcG0ByJ6iu7QTCK3btX7k2UE";

    let myHeaders = new Headers();
    myHeaders.append("apikey", apikey);
    myHeaders.append("Content-Type", "multipart/form-data");

    let requestOptions: RequestInit = {
        method: "POST",
        redirect: "follow",
        headers: myHeaders,
        // @ts-ignore
        body: file,
    };

    const response = await fetch(OCR_API_ENDPOINT, requestOptions);
    const result = await response.json();

    return result;
};
