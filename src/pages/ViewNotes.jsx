import { Box, Text, Select } from '@chakra-ui/react';

const ViewNotes = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>All Notes</Text>
      <Select placeholder="Filter by tag" mb={4}>
        {/* Options will be dynamically loaded here */}
      </Select>
      {/* Notes will be displayed here */}
    </Box>
  );
};

export default ViewNotes;