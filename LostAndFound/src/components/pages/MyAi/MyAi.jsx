import { useEffect } from 'react';

const MyAi = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/05/18/20250505183811-OMDQA5AH.json"
        style={{
          width: "100%", // full width
          height: "100%", // full height
          border: "none", // remove iframe border
        }}
        title="Botpress Chatbot"
      />
    </div>
  );
};

export default MyAi;
