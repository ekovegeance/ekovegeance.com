import React from 'react';

export function LoadingSkeleton() {
    return (
        <div className="animate-pulse mt-12 md:mt-20">
            <div className="mx-6">
                <div className="mx-auto max-w-7xl text-center">
                    <div className="mx-auto max-w-xl h-6 bg-secondary rounded w-2/3"></div>
                    <div className="h-10 bg-secondary mt-6 rounded w-3/4 mx-auto"></div>
                    <div className="mx-auto max-w-7xl mt-6 h-svh bg-secondary rounded w-full"></div>
                </div>
            </div>
        </div>
    );
}