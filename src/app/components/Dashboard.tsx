// app/components/Dashboard.tsx
import { animal } from '@/types/animal'; // Animal tipi
import React from 'react';

type DashboardProps = {
  animals: animal[];
};

function Dashboard({ animals }: DashboardProps) {
  return (
    <div className="dashboard">
      {animals.length === 0 ? (
        <p>No animals found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.id}</td>
                <td>{animal.name}</td>
                <td>{animal.description}</td>
                <td>{animal.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
