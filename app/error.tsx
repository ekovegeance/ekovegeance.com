'use client';
import React from 'react';
import Link from "next/link";
import {useEffect} from "react";
import {Button} from "@/components/ui/button";

export default function Error({error, reset}: {error: Error, reset: () => void}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center">
                {/*<FrownIcon className="w-12 h-12 mx-auto text-primary" />*/}
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Something went wrong!</h1>
                <div className="mt-6">
                  <Button onClick={() => reset()}>Try again</Button>
                </div>
            </div>
        </div>
    );
}