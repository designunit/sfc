import { Context, createContext, useState } from 'react'

export const FormContext: Context<any> = createContext({
    data: {},
    setData: () => null,
    addMode: {},
    setAddMode: () => null,
})

export const FormContextProvider = ({ children }) => {
    const [data, setData] = useState({
        test: null,
    })

    const [addMode, setAddMode] = useState(false)

    return (
        <FormContext.Provider
            value={{
                data,
                setData,
                addMode,
                setAddMode,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}