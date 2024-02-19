import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useOcr } from "./useOcr";

export const useImageToText = () => {
    const [image, setImage] = useState<string | undefined>(undefined);
    const { performOcr, isLoading, extractedText } = useOcr();

    const pickImage = async (source: 'camera' | 'gallery') => {
        let result = await (source === 'camera' ? ImagePicker.launchCameraAsync : ImagePicker.launchImageLibraryAsync)({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            allowsMultipleSelection: false,
        });

        if (!result.canceled && result.assets && result.assets.length) {
            const firstAsset = result.assets[0];
            await performOcr(firstAsset);
            setImage(firstAsset.uri);

            return firstAsset;
        }

        return null;
    };

    return { image, pickImage, isLoading, extractedText };
};