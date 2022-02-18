import { useState, useEffect } from 'react';
import { db } from "../firebase/config";

import {
  collection,
  addDoc,
} from "firebase/firestore";
import { uploadBytesResumable, getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageReference = ref(storage, file.name);
    const gg = uploadBytesResumable(storageReference, file)
    gg.on("state_changed", (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      getDownloadURL(gg.snapshot.ref).then(async (url) => {
        const createdAt = new Date();
        await addDoc(collection(db, "images"), { url, createdAt });
        setUrl(url);
      });
    }
    )
  }, [file]);

  return { progress, url, error };
}

export default useStorage;