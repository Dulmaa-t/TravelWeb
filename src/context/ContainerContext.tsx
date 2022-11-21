import { createContext, Dispatch, FunctionComponent, ReactNode, SetStateAction, useState } from "react";

export interface IContainerContext {
    test: string;
    setTest: Dispatch<SetStateAction<string>>
};

const initialState: IContainerContext = {
    test: 'hi',
    setTest: () => {}
}

export const ContainerContext = createContext<IContainerContext>(initialState);
interface IContainerProvider {
    children: ReactNode
}
const ContainerProvider: FunctionComponent<IContainerProvider> = ({ children }) => {
    const [test, setTest] = useState<string>('blabla')
    const values: IContainerContext = {test, setTest}
    return <ContainerContext.Provider value={values}>
        {children}
    </ContainerContext.Provider>
}

export default ContainerProvider