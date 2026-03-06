import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type AdminSummary = {
  message: string;
  users: number;
  admins: number;
  restaurants: number;
};

const AdminDashboardPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchSummary = async (): Promise<AdminSummary> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/admin/summary`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch admin summary");
    }

    return response.json();
  };

  const seedRestaurantsRequest = async () => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/admin/seed-restaurants`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to seed restaurants");
    }

    return response.json();
  };

  const { data, isLoading, isError, refetch } = useQuery(
    "adminSummary",
    fetchSummary
  );

  const { mutate: seedRestaurants, isLoading: isSeeding } = useMutation(
    seedRestaurantsRequest,
    {
      onSuccess: () => {
        toast.success("Mock restaurants seeded successfully");
        refetch();
      },
      onError: () => {
        toast.error("Unable to seed mock restaurants");
      },
    }
  );

  if (isLoading) return <div>Loading admin dashboard...</div>;
  if (isError || !data) return <div>Unable to load admin dashboard.</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-sm text-gray-600">{data.message}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Users</p>
          <p className="text-2xl font-semibold">{data.users}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Admins</p>
          <p className="text-2xl font-semibold">{data.admins}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Restaurants</p>
          <p className="text-2xl font-semibold">{data.restaurants}</p>
        </div>
      </div>

      <button
        type="button"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
        onClick={() => seedRestaurants()}
        disabled={isSeeding}
      >
        {isSeeding ? "Seeding..." : "Seed Mock Kaggle-style Restaurants"}
      </button>
    </div>
  );
};

export default AdminDashboardPage;
