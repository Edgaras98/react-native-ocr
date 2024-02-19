import { useState } from "react";
import { ImagePickerAsset } from "expo-image-picker";
import { performOcrApiCall } from "../api/api";

export const useOcr = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [extractedText, setExtractedText] = useState("");
    const [error, setError] = useState<any>(null);

    const performOcr = async (file: ImagePickerAsset) => {
        setIsLoading(true);
        try {
            const response = await performOcrApiCall(file);
            setExtractedText(response.all_text);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        extractedText,
        isLoading,
        performOcr,
        error
    }
};