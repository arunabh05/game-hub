import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    //initialData: { count: plaforms.length, results: platforms },
  });

export default usePlatforms;
