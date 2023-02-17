import React, { useState, useEffect } from 'react';
import '../../styles/FilesView.css';
import FileItem from './FileItem';
import FileCard from './FileCard';
import { db, auth } from '../../firebase';

const FilesView = () => {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      // fetch files only if user is authenticated
      const unsubscribe = db
        .collection('myFiles')
        .doc(user.uid)
        .collection('files')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setFiles(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              item: doc.data(),
            }))
          );
        });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const handleDeleteClick = (id) => {
    if (user) {
      db.collection('myFiles')
        .doc(user.uid)
        .collection('files')
        .doc(id)
        .delete()
        .then(() => {
          console.log('File deleted successfully');
        })
        .catch((error) => {
          console.error('Error removing file: ', error);
        });
    }
  };

  return (
    <div className='fileView'>
      <div className='fileView__row'>
        {files.slice(0, 5).map(({ id, item }) => (
          <FileCard name={item.caption} />
        ))}
      </div>

      {files.map(({ id, item }) => (
        <FileItem
          key={id}
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
          handleDelete={handleDeleteClick} // pass the handleDeleteClick function down as a prop
        />
      ))}
    </div>
  );
};

export default FilesView;

