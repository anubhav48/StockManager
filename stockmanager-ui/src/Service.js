import axios from "axios";
import {usequery} from "@tanstack/react-query";

export const useTrendingStocks = () => {
    console.log("Fetching trending stocks...");
    return usequery({
        queryKey: ['trending-stocks'],
        queryFn: async () => await axios.get("http://localhost:8080/indianapi-trending"),
        refetchOnWindowFocus: false,
    });
}
