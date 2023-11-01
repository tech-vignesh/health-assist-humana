import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === '') return;
    setMessages([...messages, { text: message, sender: 'user' }]);
    setMessage('');
  };

  return (
    <Box
      width="70%"
      border="1px solid #ccc"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2} borderBottom="1px solid #ccc">
        Chat Header
      </Box>
      <Box flex="1" p={2}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              padding: '5px',
              margin: '5px',
              background: msg.sender === 'user' ? 'lightblue' : 'lightgreen',
              borderRadius: '10px',
            }}
          >
            {msg.text}
          </div>
        ))}
      </Box>
      <Box p={2} borderTop="1px solid #ccc">
        <TextField
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          label="Type a message"
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
