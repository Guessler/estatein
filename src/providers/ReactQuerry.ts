import { useQuery } from '@tanstack/react-query';

interface ExampleResponse {
    message: string;
}

const quaryClient = async (): Promise<ExampleResponse> => {
    const response = await fetch('http://localhost:5000/api/example');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useExampleQuery = () => {
    return useQuery<ExampleResponse, Error>(
        { queryKey: ['example'], queryFn: quaryClient }
    );
};
