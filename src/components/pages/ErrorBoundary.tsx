import { Component, ErrorInfo, ReactNode } from 'react';
import { FadeIn, SlideUp } from '../animation';

// TypeScript interfaces
interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // Call custom error handler if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }

        this.setState({
            error,
            errorInfo
        });
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    };

    render() {
        if (this.state.hasError) {
            // Use custom fallback if provided
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default error UI
            return (
                <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div className="text-center max-w-md mx-auto px-6">
                        <FadeIn delay={0.2}>
                            <div className="mb-8">
                                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    Something went wrong
                                </h1>
                            </div>
                        </FadeIn>

                        <SlideUp delay={0.4}>
                            <div className="mb-8">
                                <p className="text-gray-600 mb-4">
                                    We're sorry, but something unexpected happened. Please try refreshing the page.
                                </p>

                                {typeof window !== 'undefined' && window.location.hostname === 'localhost' && this.state.error && (
                                    <details className="text-left bg-gray-100 p-4 rounded-lg text-sm">
                                        <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                                            Error Details (Development)
                                        </summary>
                                        <pre className="text-red-600 whitespace-pre-wrap">
                                            {this.state.error.toString()}
                                        </pre>
                                    </details>
                                )}
                            </div>
                        </SlideUp>

                        <SlideUp delay={0.6}>
                            <div className="space-y-4">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 font-medium mr-4"
                                >
                                    Refresh Page
                                </button>

                                <button
                                    onClick={this.handleRetry}
                                    className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-200 hover:scale-105 font-medium"
                                >
                                    Try Again
                                </button>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
