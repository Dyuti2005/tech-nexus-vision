-- Update event highlights
UPDATE events 
SET highlights = ARRAY[
  'Registrations - 9:30 AM - 10:00 AM',
  'Keynote - 10:00 - 10:30 AM',
  'GitHub Copilot CLI Multi Agent SDLC Development',
  'Accelerate PostgreSQL Database Development with GitHub Copilot',
  'AI Evals in Action: Validating Copilot Agent Behavior at Scale',
  'Building Intelligent Enterprise Assistants with Azure AI Studio and RAG',
  'Break - 12:45 - 1:00 PM (Refreshments and Networking)'
]
WHERE id = '2842ef3a-1bc3-4f00-95e4-9f279dceee10';

-- Add speakers
INSERT INTO speakers (event_id, name, topic, time) VALUES
('2842ef3a-1bc3-4f00-95e4-9f279dceee10', 'Mohamed Azarudeen Z', 'Keynote', '10:00 - 10:30 AM'),
('2842ef3a-1bc3-4f00-95e4-9f279dceee10', 'Manoj Jha', 'Github Copilot CLI Multi Agent SDLC Development', '10:30 - 11:15 AM'),
('2842ef3a-1bc3-4f00-95e4-9f279dceee10', 'Daniel Melchizedek Arockia Thomas Samuel', 'Accelerate PostgreSQL Database Development with GitHub Copilot', '11:15 AM - 12:45 PM'),
('2842ef3a-1bc3-4f00-95e4-9f279dceee10', 'Jawahar Govindaraj', 'AI Evals in Action: Validating Copilot Agent Behavior at Scale', '1:00 - 1:30 PM'),
('2842ef3a-1bc3-4f00-95e4-9f279dceee10', 'Rachel J', 'Building Intelligent Enterprise Assistants with Azure AI Studio and RAG', '1:30 - 2:00 PM');