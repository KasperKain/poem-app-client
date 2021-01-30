import React from 'react';
import { useParams } from 'react-router-dom';
import AddPoem from '../components/AddPoem/AddPoem';
import EditPoem from '../components/EditPoem/EditPoem';

const Creator = () => {
  const { id } = useParams();

  const generateEditOrCreate = () => {
    if (id) {
      return <EditPoem />;
    } else {
      return <AddPoem />;
    }
  };
  return <section className='Creator'>{generateEditOrCreate()}</section>;
};

export default Creator;
