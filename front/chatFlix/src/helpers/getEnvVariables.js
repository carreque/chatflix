export const getEnvVariables = () => {
    return {
        VITE_MODE: import.meta.env.VITE_MODE,
        VITE_API:  import.meta.env.VITE_API
    }
}