import axios from 'axios';
import { UserDesignApiData } from '../types';
import { API_URL } from '../../constants';

export const postUserDesign = async (userDesign: UserDesignApiData) => {
    const response = await axios.post(`${API_URL}/api/user-designs`, userDesign);
    return response.data;
};