import api from "./api";

export const fetchFeedbacks = async () => {
    try {
        const response = await api.get("/feedbacks");
        return response.data;
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        throw error;
    }
};

export const createFeedback = async (feedbackData: {
    starCount: number;
    heading: string;
    description: string;
    icon: string;
    userName: string;
    userLocation: string;
}) => {
    try {
        const response = await api.post("/feedbacks", feedbackData);
        return response.data;
    } catch (error) {
        console.error("Error creating feedback:", error);
        throw error;
    }
};

export const updateFeedback = async (feedbackId: string, feedbackData: {
    starCount?: number;
    heading?: string;
    description?: string;
    icon?: string;
    userName?: string;
    userLocation?: string;
}) => {
    try {
        const response = await api.put(`/feedbacks/${feedbackId}`, feedbackData);
        return response.data;
    } catch (error) {
        console.error("Error updating feedback:", error);
        throw error;
    }
};

export const deleteFeedback = async (feedbackId: string) => {
    try {
        await api.delete(`/feedbacks/${feedbackId}`);
    } catch (error) {
        console.error("Error deleting feedback:", error);
        throw error;
    }
};