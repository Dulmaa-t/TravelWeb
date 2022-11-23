import { FunctionComponent } from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../config/env";

// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export interface CustomMapProps {
    height?: string | number;
    center?: {
        lat: number;
        lng: number;
    };
    pins?: Array<Array<number | string>>;
    showCenter?: boolean;
}

export interface MapParamConfig {
    map: any;
    maps: any;
    ref?: Element | null;
}

const Marker: FunctionComponent<{ lat: number; lng: number }> = ({ lat, lng }) => {
    return (
        <div className="w-3 h-3 rounded-full bg-danger relative">
            <div className="w-full h-full rounded-full animate-ping bg-danger"></div>
        </div>
    );
};

const CustomMap: FunctionComponent<CustomMapProps> = ({ height, pins, center, showCenter }: CustomMapProps): JSX.Element => {
    const defaultProps = {
        center: {
            lat: 37.5665,
            lng: 126.978,
        },
        zoom: 15,
    };

    return (
        <div
            style={{
                width: "100%",
                height:"100%",
            }}
        >
            <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_API_KEY as string }} center={center ? center : defaultProps.center} zoom={defaultProps.zoom}>
                {pins ? pins.filter(pin => pin[0] !== 0 && pin[1] !== 0).map((pin, index) => <Marker key={index} lat={+pin[0]} lng={+pin[1]} />) : null}
                {showCenter && <Marker lat={center?.lat as number} lng={center?.lng as number} />}
            </GoogleMapReact>
        </div>
    );
};

export default CustomMap;
// onGoogleApiLoaded={({ maps, map }) => renderMarkers({ maps, map }, { lat: 37.5665, lng: 126.978 })}
