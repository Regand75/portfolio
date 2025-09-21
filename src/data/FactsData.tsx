import {ReactNode} from "react";
import {ColoredSpan} from "./ColoredSpan.tsx";

export type FactsDataType = {
    text: ReactNode,
};

export const myFunFacts: FactsDataType[] = [
    {text: <>I like winter more than summer</>},
    {text: <>I often bike with my friends</>},
    {text: <>I like <ColoredSpan>pizza</ColoredSpan> and <ColoredSpan>pasta</ColoredSpan></>},
    {text: <>I was in <ColoredSpan>Egypt</ColoredSpan>, <ColoredSpan>Poland</ColoredSpan> and <ColoredSpan>Turkey</ColoredSpan></>},
    {text: <>My favorite movie is <ColoredSpan>The Green Mile</ColoredSpan></>},
    {text: <>I am still in school</>},
    {text: <>I don’t have any siblings</>},
];
