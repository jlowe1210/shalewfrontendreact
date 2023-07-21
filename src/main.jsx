import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//PAGES
import HomePage from "./Pages/homePage.jsx";
import AboutPage from "./Pages/aboutPage.jsx";
import PageNotFound from "./Pages/404notFoundPage.jsx";
import ContactPage from "./Pages/contactPage.jsx";
import axios from "axios";
import PhotoGalleryPage from "./Pages/PhotoGalleryPage.jsx";

const queryClient = new QueryClient();

export const photoQuery = (category) => {
  return {
    queryKey: ["photo", category],
    queryFn: async () => {
      return (await axios.get(`/api/photos/${category}`)).data;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
  };
};

export const photoLoader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url).pathname.slice(1);

    const query = photoQuery(url);

    let data;

    try {
      data =
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query));
    } catch {
      throw new Response("Not Found", { status: 404 });
    }

    return data;
  };
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/404" element={<PageNotFound />}></Route>
      <Route
        path="/:gallery"
        loader={photoLoader(queryClient)}
        element={<PhotoGalleryPage />}
        errorElement={<h1>Unable to load photos</h1>}
      />
      <Route
        path="*"
        element={<Navigate to={"/404"} replace={false} />}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
);
