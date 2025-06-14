import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Ошибка поймана в ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <>{this.props.fallback}</>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
