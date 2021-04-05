import React from 'react';
import { motion } from 'framer-motion';
import Router from './services/router';

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Router />
    </motion.div>
  );
}

export default App;
