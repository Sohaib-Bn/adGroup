import { useQuery } from "@tanstack/react-query";
import { getSystems } from "../../services/ApiCenters";

export function useSystems() {
  const { data: systems, isLoading } = useQuery({
    queryKey: ["systems"],
    queryFn: () => getSystems(),
  });
  return { systems, isLoading };
}
