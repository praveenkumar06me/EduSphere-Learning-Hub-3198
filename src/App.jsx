import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import FeedbackButton from './components/FeedbackButton';

function App() {
  return (
    <QuestProvider
      apiKey="k-f33d433d-9326-4a9c-9a0c-44ec00c2b462"
      entityId="e-6d5bf169-8f53-48d7-a611-348588f26f85"
      apiType="PRODUCTION"
    >
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
          <FeedbackButton />
        </div>
      </Router>
    </QuestProvider>
  );
}

export default App;