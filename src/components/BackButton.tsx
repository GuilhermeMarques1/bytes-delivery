import { Box, Button } from '@chakra-ui/react'
import { IoChevronBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <Box pos="absolute" left="10">
      <Button p="0" borderRadius="50%" onClick={() => navigate('/')}>
        <IoChevronBackSharp size="24" />
      </Button>
    </Box>
  )
}
