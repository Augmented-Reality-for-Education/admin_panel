import axios from 'axios';
import { UserDesign, UserDesignApiData } from '../types';
import { API_URL } from '../constants';

export const postUserDesign = async (userDesign: UserDesign) => {
    try {
        const response = await axios.post<UserDesignApiData>(`${API_URL}`, userDesign);
        return response.data || [];
    }
    catch (error) {
        throw new Error(`Error while posting user design: ${error}`);
    }
};