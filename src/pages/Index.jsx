import { Box, Flex, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ViewNotes from './ViewNotes';
import CreateNote from './CreateNote';
import CreateTag from './CreateTag';

const Index = () => {
  return (
    <Router>
      <Box p={4}>
        <Flex as="nav" mb={4}>
          <Link as={NavLink} to="/" px={2}>Home</Link>
          <Link as={NavLink} to="/view-notes" px={2}>View Notes</Link>
          <Link as={NavLink} to="/create-note" px={2}>Create Note</Link>
          <Link as={NavLink} to="/create-tag" px={2}>Create Tag</Link>
        </Flex>
        <Routes>
          <Route path="/" element={<Box>Welcome to the Notes App!</Box>} />
          <Route path="/view-notes" element={<ViewNotes />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/create-tag" element={<CreateTag />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Index;