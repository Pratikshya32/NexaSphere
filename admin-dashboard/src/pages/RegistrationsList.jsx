import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';

export default function RegistrationsList() {
  const [registrations, setRegistrations] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/registrations?page=${page}&limit=25`)
      .then(res => res.json())
      .then(data => {
        setRegistrations(data.items || []);
        setTotalPages(data.totalPages || 1);
      })
      .catch(err => console.error(err));
  }, [page]);

  return (
    <div>
      <h1>Registrations</h1>
      <ul>
        {registrations.map(reg => (
          <li key={reg.id}>{reg.name}</li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
