import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import ErrorFallback from '@/components/common/ErrorFallback';

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // use: Logging, reporting errors, analytics, sending errors to server
    console.error('Uncaught Error: ', error);
    console.error('Uncaught ErrorInfo: ', errorInfo);
  }

  public render() {
    if (this.state.hasError) return <ErrorFallback />;

    return this.props.children;
  }
}

export default ErrorBoundary;
