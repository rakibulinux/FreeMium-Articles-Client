import React, { useState } from "react";

const ImportStory = () => {
  const [storyUrl, setStoryUrl] = useState("");
  const [importStatus, setImportStatus] = useState("");

  const importStory = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/import-story`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: storyUrl }),
        }
      );
      const result = await response.json();
      setImportStatus(result.message);
    } catch (error) {
      setImportStatus("Failed to import story");
    }
  };

  return (
    <div>
      <input
        value={storyUrl}
        onChange={(e) => setStoryUrl(e.target.value)}
        placeholder="Story URL"
      />
      <button onClick={importStory}>Import Story</button>
      {importStatus && <div>{importStatus}</div>}
    </div>
  );
};

export default ImportStory;
