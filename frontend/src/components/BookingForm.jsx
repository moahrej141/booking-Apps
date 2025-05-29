import { useState, useEffect } from 'react';
import axios from 'axios';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');   
  const [date, setDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await axios.get('http://localhost:3000/api/bookings');
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/bookings', { name, email, date });
    fetchBookings();
    alert('Réservé avec succès');
    setName('');
    setEmail(''); 
    setDate(new Date());
  };

  return (
    <div>
      <h2>Formulaire de réservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Entrez votre nom"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrez votre email"
          required
        />
        <input
          type="date"
          value={date.toISOString().substring(0, 10)}
          onChange={(e) => setDate(new Date(e.target.value))}
          required
        />
        <button type="submit">réservé</button>
      </form>

      <h3>Rendez-vous réservés:</h3>
      <ul>
        {bookings.map((b) => (
          <li key={b.id}>
            {b.name} - {b.email ? b.email + ' - ' : ''}{new Date(b.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingForm;
