import { Box, Text, Input, Button } from '@chakra-ui/react';

const CreateTag = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Create New Tag</Text>
      <Input placeholder="Tag name" mb={4} />
      <Button colorScheme="blue">Save Tag</Button>
    </Box>
  );
};

export default CreateTag;