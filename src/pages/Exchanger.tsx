import React, { useState, useEffect} from 'react';
import { ApiClient } from 'mini-apiclient';
import { API_KEYS } from '../env-values';
import Navbar from '../components/Navbar';
import { Footer, FooterCopyright } from '../components/Footer';

const Exchanger = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    ApiClient.GET("https://shota-folio.microcms.io/api/v1/img_objects", [["X-MICROCMS-API-KEY", API_KEYS.microCMSKey]])
    .then((data: any) => {
      setImages(data.contents);
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar>@shotastage</Navbar>
      <h2>Exchanger</h2>
      { images.map((value) => {
        return <img alt={value['object_id']} src={value['img_compressed_file']['url']} />;
      })}
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default Exchanger;
