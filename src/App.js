/**
 * Copyright 2025 Ashutosh Saha
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Route from './features/Route';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Learning from './pages/Learning';
import Navbar from './components/Navbar';
// import useNavigation from './hooks/useNavigation';
import Profile from './pages/Profile';
// import { useEffect } from 'react';

function App() {
  // const { currentPath, navigate } = useNavigation();

  // Check for UUID in localStorage when app loads
  // useEffect(() => {
  //   const authToken = window.localStorage.getItem('authToken')
  //   console.log(authToken)
  //   if (authToken && authToken !== 'null') {
  //     navigate('/dashboard')
  //   }

  // }, [currentPath, navigate]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Route path="/"><Login /></Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/learning">
          <Learning />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </main>
    </div>
  );
}

export default App; 
