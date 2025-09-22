import React, { useRef, useEffect } from 'react';
import './App.css';
import { DocumentEditorContainerComponent, Ribbon } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Ribbon);

function App() {
 const containerRef = useRef<DocumentEditorContainerComponent | null>(null);
 return (
   <div>
     <DocumentEditorContainerComponent
       id="container"
       ref={containerRef}
       serviceUrl="http://localhost:62869/api/documenteditor/"
       height={'100vh'}
       toolbarMode="Ribbon"
     />
   </div>
 );
}

export default App; 