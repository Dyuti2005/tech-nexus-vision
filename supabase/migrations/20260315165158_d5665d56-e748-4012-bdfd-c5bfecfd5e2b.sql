-- Update event highlights
UPDATE events 
SET highlights = ARRAY[
  'The Rise of AI Agents: Why OpenClaw Changes the Game',
  'Engineering Intelligence: LLM Councils, Domain Context and Agentic Control',
  'Break - 11:30 - 12:00 PM (Refreshments and Networking)',
  'Responsible AI in Agentic Applications',
  'Getting Started with GenAI and Agents on Azure'
]
WHERE id = '0bb5c6f6-c611-4b3c-ac8b-952702865dad';

-- Add speakers
INSERT INTO speakers (event_id, name, topic, time) VALUES
('0bb5c6f6-c611-4b3c-ac8b-952702865dad', 'Navaneethan Gopal', 'The Rise of AI Agents: Why OpenClaw Changes the Game', '09:45 - 10:45 AM'),
('0bb5c6f6-c611-4b3c-ac8b-952702865dad', 'Natheem Yousuf', 'The Rise of AI Agents: Why OpenClaw Changes the Game', '09:45 - 10:45 AM'),
('0bb5c6f6-c611-4b3c-ac8b-952702865dad', 'Jagan PS', 'Engineering Intelligence: LLM Councils, Domain Context and Agentic Control', '10:45 - 11:30 AM'),
('0bb5c6f6-c611-4b3c-ac8b-952702865dad', 'Selvi Nandakumar', 'Responsible AI in Agentic Applications', '12:00 - 12:45 PM'),
('0bb5c6f6-c611-4b3c-ac8b-952702865dad', 'Shreyan JD Fernandes', 'Getting Started with GenAI and Agents on Azure', '12:45 - 1:30 PM');