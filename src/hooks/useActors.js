import useData from "./useData"

const useActors = () => {
    return useData('/people/')
};

export default useActors;