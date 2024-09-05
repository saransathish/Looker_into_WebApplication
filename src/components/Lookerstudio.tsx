import React from 'react';

interface LookerStudioEmbedProps {
  embedUrl: string;
}

const LookerStudioEmbed: React.FC<LookerStudioEmbedProps> = ({ embedUrl }) => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
      <iframe
        src={embedUrl}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        allowFullScreen
        title="Looker Studio Report"
      ></iframe>
    </div>
  );
};

export default LookerStudioEmbed;
