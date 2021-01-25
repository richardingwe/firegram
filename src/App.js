import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from "./comps/Title";
import UploadForm from './comps/UploadForm';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal setSelectedImage={setSelectedImage} selectedImage={selectedImage} />}
    </div>
  );
}

export default App;
