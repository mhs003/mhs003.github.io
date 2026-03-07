import { type ReactNode, useEffect, useState } from "react";
import { AppDataContext } from "../context/AppDataContext";
import type { Mood } from "../types";

type Props = {
    children: ReactNode;
};

export function AppDataProvider({ children }: Props) {
    const [apiMoods, setApiMoods] = useState<Mood[] | null>(null);
    const [apiPulses, setApiPulses] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [res1, res2] = await Promise.all([
                    fetch(
                        "https://mhs003-github-io-backend.semiware.workers.dev/get-moods",
                    ),
                    fetch(
                        "https://mhs003-github-io-backend.semiware.workers.dev/pulses",
                    ),
                ]);

                const data1 = await res1.json();
                const data2 = await res2.json();

                setApiMoods(data1);
                setApiPulses(data2);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <AppDataContext.Provider
            value={{
                apiMoods,
                apiPulses,
                loading,
            }}
        >
            {children}
        </AppDataContext.Provider>
    );
}
