import { createContext } from "react";
import type { Mood } from "../types";

type ApiMoodsType = Mood;
type ApiPulsesType = unknown;

export type AppDataContextType = {
    apiMoods: ApiMoodsType | null;
    apiPulses: ApiPulsesType | null;
    loading: boolean;
};

export const AppDataContext = createContext<AppDataContextType>({
    apiMoods: null,
    apiPulses: null,
    loading: true,
});
