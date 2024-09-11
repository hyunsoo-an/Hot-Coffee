import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

// Import Pages
import App from './components/App.tsx'
import RateCoffee from './components/RateCoffee.tsx'
import FindCafe from './components/FindCafe.tsx'
import SecondaryRating from './components/SecondaryRating.tsx'
import CafeProfile from './components/CafeProfile.tsx'

// Create Page Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<RateCoffee />} />
      <Route path="/rating/:ratingId" element={<SecondaryRating />} />
      <Route path="/cafes" element={<FindCafe />} />
      <Route path="/cafes/:cafeName" element={<CafeProfile />} />
    </Route>,
  ),
)

// Query Client
const queryClient = new QueryClient()

// Create Root
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>,
  )
})
