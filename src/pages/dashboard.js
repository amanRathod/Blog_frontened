import React, { useEffect } from 'react';
import Header from '../components/header';
import Timeline from '../components/Posts';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard - Blog';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <Timeline />
    </div>
  );
};
export default Dashboard;
