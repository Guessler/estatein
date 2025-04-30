import api from "./api";

export const fetchQuestions = async () => {
    try {
        const response = await api.get("/questions");
        return response.data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
};

export const createQuestion = async (questionData: {
    heading: string;
    description: string;
}) => {
    try {
        const response = await api.post("/questions", questionData);
        return response.data;
    } catch (error) {
        console.error("Error creating question:", error);
        throw error;
    }
};

export const updateQuestion = async (questionId: string, questionData: {
    heading?: string;
    description?: string;
}) => {
    try {
        const response = await api.put(`/questions/${questionId}`, questionData);
        return response.data;
    } catch (error) {
        console.error("Error updating question:", error);
        throw error;
    }
};

export const deleteQuestion = async (questionId: string) => {
    try {
        await api.delete(`/questions/${questionId}`);
    } catch (error) {
        console.error("Error deleting question:", error);
        throw error;
    }
};