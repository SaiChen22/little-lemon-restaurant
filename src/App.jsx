import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout/Layout';
import Home from './pages/Home/Home';
import ReservationSuccess from './pages/ReservationSuccess/ReservationSuccess';
import TableReservation from './pages/TableReservation/TableReservation';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table-reservation" element={<TableReservation />} />
        <Route path="/reservation-success" element={<ReservationSuccess />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Layout>
  );
}

export default App;
