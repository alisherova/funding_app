import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CardsDetails, CardsPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/:id" element={<CardsDetails />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
