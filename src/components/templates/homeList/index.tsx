import * as React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {getAllHotels} from '../../../services/getHotels';
import HotelCard from '../../organisms/HotelCard';

interface data {
  hotels: [];
}
interface hotel {
  name: any;
  rating: any;
  location: any;
  image: string;
}
interface location {
  latitude: number;
  longitude: number;
}
let ApiKey = '';
const HomeList = () => {
  const [hotels, setHotels] = React.useState<Array<hotel>>([]);
  const [location, setLocation] = React.useState<location>({
    latitude: 0,
    longitude: 0,
  });

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
        console.log('position', position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  React.useEffect(() => {
    getHotel();
  }, [location]);
  const getHotel = async () => {
    let response = await getAllHotels(
      location.latitude,
      location.longitude,
      'Hotel',
      ApiKey,
    );
    let hotels: hotel[] = [];
    response.data.results.map((item: any) => {
      hotels.push({
        name: item.name,
        rating: item.rating,
        location: item.vicinity,
        image:
          item.photos &&
          `https://maps.googleapis.com/maps/api/place/photo
          ?maxwidth=400
          &photo_reference=${item.photos[0].photo_reference}
          &key=${ApiKey}`,
      });
    });
    setHotels(hotels);

    console.log('whate', response);
  };
  return (
    <FlatList
      data={hotels}
      renderItem={({item}) => {
        return <HotelCard item={item} />;
      }}
      horizontal
    />
  );
};

export {HomeList};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
});
