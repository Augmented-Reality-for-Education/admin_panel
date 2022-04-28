import axios from 'axios';
import { UserDesign, UserDesignSequence } from '../types';
import { API_URL } from '../constants';

export const postUserDesign = async (userDesign: UserDesign) => {
    try {
        const response = await axios.post<UserDesign>(`${API_URL}/Image`, userDesign);
        return response.data || [];
    }
    catch (error) {
        throw new Error(`Error while posting user design: ${error}`);
    }
};

export const postUserDesignSequence = async (userDesignSequence: UserDesignSequence) => {
    try {
        const response = await axios.post<UserDesignSequence>(`${API_URL}/Sequence`, userDesignSequence);
        return response.data || [];
    }
    catch (error) {
        throw new Error(`Error while posting user design: ${error}`);
    }
};