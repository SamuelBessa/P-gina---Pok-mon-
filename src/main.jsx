import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { register } from 'swiper/element';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();



createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
)
