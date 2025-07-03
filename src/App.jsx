import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import TraverseTree from "./hook/traverseTree";
import "./App.css";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [expandedPath, setExpandedPath] = useState([]);
  const { insertNode } = TraverseTree();

  const handleInsertNode = (folderId, itemName) => {
    const updatedTree = insertNode(explorerData, folderId, itemName);
    setExplorerData(updatedTree);
  };

  return (
    <div className="app">
      <header className="title">Infite Accordian</header>
      <Folder
        explorer={explorerData}
        handleInsertNode={handleInsertNode}
        expandedPath={expandedPath}
        setExpandedPath={setExpandedPath}
        currentPath={[]}
      />
    </div>
  );
}

export default App;
