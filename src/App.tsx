import React, { useRef, useEffect } from 'react';
import './App.css';
import { DocumentEditorContainerComponent, Ribbon, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Ribbon, Toolbar);

function App() {
 const containerRef = useRef<DocumentEditorContainerComponent | null>(null);

 useEffect(() => {
   const container = containerRef.current;
   if (container) {
     // Document to load from the server's App_Data folder
     const documentToLoad = 'Getting Started.docx';
     const loadDocumentUrl = container.serviceUrl + 'LoadDocument';
     
     const httpRequest = new XMLHttpRequest();
     httpRequest.open('POST', loadDocumentUrl, true);
     httpRequest.onreadystatechange = () => {
       if (httpRequest.readyState === 4 && (httpRequest.status === 200 || httpRequest.status === 304)) {
           container.documentEditor.open(httpRequest.responseText);
       }
     };
     
     const formData = new FormData();
     formData.append('DocumentName', documentToLoad);
     httpRequest.send(formData);
   }
 }, []);

 return (
   <div>
     <DocumentEditorContainerComponent
       id="container"
       ref={containerRef}
       height={'100vh'}
       serviceUrl="http://localhost:62869/api/documenteditor/"
       enableToolbar={true}
       toolbarMode="Ribbon"
     />
   </div>
 );
}

export default App;