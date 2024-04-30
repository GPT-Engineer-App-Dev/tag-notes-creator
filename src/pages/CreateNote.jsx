import { Box, Text, Input, Button } from '@chakra-ui/react';

const CreateNote = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Create New Note</Text>
      <Input placeholder="Note title" mb={4} />
      <Input placeholder="Note content" mb={4} />
      <Button colorScheme="blue">Save Note</Button>
    </Box>
  );
};

export default CreateNote;