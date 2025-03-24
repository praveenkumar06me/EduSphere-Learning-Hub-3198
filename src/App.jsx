import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="mt-16 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/classroom" element={<div>Classroom Coming Soon</div>} />
              <Route path="/assignments" element={<div>Assignments Coming Soon</div>} />
              <Route path="/progress" element={<div>Progress Coming Soon</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;