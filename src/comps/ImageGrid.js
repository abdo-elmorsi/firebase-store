import React, { useContext } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

import { ImageSelected } from '../App';
const ImageGrid = () => {
  const [, setSelectedImage] = useContext(ImageSelected);
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <div className="img-grid">
      {!Object.keys(docs).length ? <div>loaing...</div> : (docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id}
          layout
          whileHover={{ opacity: 1 }} s
          onClick={() => setSelectedImage(doc?.url)}
        >
          <motion.img src={doc?.url ? doc.url : 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg'} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      )))}
    </div>
  )
}

export default ImageGrid;