import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../Layouts/DefaultLayout";
import { Dashboard } from "../pages/Dashboard";

import { Register } from "../pages/Register";
import { SignIn } from "../pages/SignIn";

export function Router() {
  return (
    <Routes>
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/register' element={<Register />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
