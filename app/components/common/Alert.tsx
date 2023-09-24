import React from 'react';

interface IProps {
    level: 'warning' | 'danger';
    message: string;
    children?: React.ReactNode;
}

const Alert: React.FC<IProps> = ({ level, message, children }) => {
    return (
        <div
            className={`alert alert-${level} relative mx-auto flex max-w-screen-xl items-center justify-between p-4`}
        >
            <div
                className={`alert-container ${
                    level === 'warning'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                }`}
            >
                <div className="message">{message}</div>
                <div className="action">{children}</div>
            </div>
        </div>
    );
};

export default Alert;
