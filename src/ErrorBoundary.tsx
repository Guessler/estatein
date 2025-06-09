import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback: React.ReactNode; // Запасной интерфейс для отображения при ошибке
}

interface ErrorBoundaryState {
    hasError: boolean;
}

// Компонент ErrorBoundary
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // Этот метод будет вызван, если в дочерних компонентах произойдет ошибка
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    // Этот метод будет вызван после того, как компонент будет "размонтирован"
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Ошибка поймана в ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Если произошла ошибка, отображаем запасной интерфейс
            return <>{this.props.fallback}</>;
        }

        // В противном случае отображаем дочерние компоненты
        return this.props.children;
    }
}

export default ErrorBoundary;
