'use client';
import React, { useState, useEffect } from 'react';

export default function MapComponent({ page }) {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [isInteractionOn, setInteractionOn] = useState(true);
    const LOCATION = [36.14213, 126.6014];

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
            'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=hwdz66lcsr';
        document.head.appendChild(script);

        script.onload = () => {
            const mapOptions = {
                center: new naver.maps.LatLng(LOCATION[0], LOCATION[1]),
                zoom: 13,
                minZoom: 7,
                maxZoom: 20,
                zoomControl: true,
                zoomControlOptions: {
                    style: naver.maps.ZoomControlStyle.SMALL,
                    position: naver.maps.Position.TOP_RIGHT,
                },
                draggable: true,
                pinchZoom: true,
                scrollWheel: true,
                keyboardShortcuts: true,
                disableDoubleTapZoom: false,
                disableDoubleClickZoom: false,
                disableTwoFingerTapZoom: false,
                tileTransition: true,
            };
            const mapInstance = new naver.maps.Map('map', mapOptions);

            const markerOptions = {
                position: mapOptions.center,
                map: mapInstance,
            };
            const markerInstance = new naver.maps.Marker(markerOptions);

            setMap(mapInstance);
            setMarker(markerInstance);

            naver.maps.Event.addListener(
                mapInstance,
                'zoom_changed',
                (zoom) => {
                    console.log('zoom level changed to:', zoom);
                },
            );
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const toggleInteraction = () => {
        if (!map) return;
        const options = {
            draggable: isInteractionOn,
            pinchZoom: isInteractionOn,
            scrollWheel: isInteractionOn,
            keyboardShortcuts: isInteractionOn,
            disableDoubleTapZoom: !isInteractionOn,
            disableDoubleClickZoom: !isInteractionOn,
            disableTwoFingerTapZoom: !isInteractionOn,
        };
        map.setOptions(options);
        setInteractionOn(!isInteractionOn);
    };

    return (
        <section
            aria-label="Contact Us"
            className="w-full h-auto flex flex-col justify-start items-center mt-16 mb-12 sm:mt-20 lg:mt-24 cxl:mt-28"
        >
            <div className="flex flex-col justify-center w-9/10 mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100">
                <h1 className="text-black dark:text-white font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.mapSection.h1}
                </h1>
            </div>
            <div className="w-9/10 flex flex-col h-auto clg:h-410 cxl:h-490 mb-2 sm:mb-4 clg:flex-row clg:min-w-940 clg:max-w-1250 cxl:h-490 cxl:w-85/100">
                <div className="w-full clg:w-1/2 h-72 sm:h-96 clg:h-full overflow-hidden rounded-3xl mb-2">
                    <div id="map" className="w-full h-full rounded-3xl "></div>
                    <button
                        onClick={toggleInteraction}
                        className={`p-2 text-white ${isInteractionOn ? 'bg-blue-500' : 'bg-gray-500'} rounded-3xl`}
                    >
                        Toggle Interaction
                    </button>
                </div>
                <div className="w-full clg:w-1/2 h-44 cmd:h-72 clg:h-full flex gap-x-2 clg:flex-col items-start justify-between clg:justify-start clg:items-center">
                    <div className="w-1/2 h-full flex flex-col justify-between clg:w-4/5 clg:mb-12">
                        <div className="w-full clg:w-4/5 clg:mb-12">
                            <h3 className="text-lg clg:text-2xl text-black dark:text-white font-bold mb-2">
                                Address
                            </h3>
                            {page.home.mapSection.address
                                .split(' ')
                                .map((part, index) => (
                                    <span
                                        key={index}
                                        className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white"
                                    >
                                        {part}
                                        {index === 2 || index === 3 ? (
                                            <span className="block sm:inline">
                                                {' '}
                                            </span>
                                        ) : (
                                            ' '
                                        )}
                                    </span>
                                ))}
                        </div>
                        <div className="w-full clg:w-4/5 clg:mb-12">
                            <h3 className="text-lg clg:text-2xl text-black dark:text-white font-bold mb-2">
                                Phone
                            </h3>
                            <p className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white">
                                <a className="underline" href="#">
                                    02-0000-0000
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className=" w-1/2 h-full clg:w-4/5">
                        <div className="w-full h-full flex flex-col justify-between clg:w-4/5 clg:mb-12">
                            <h3 className="text-black dark:text-white text-lg clg:text-2xl font-bold mb-2">
                                Business hours
                            </h3>
                            <div className="flex justify-between">
                                <p className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white">
                                    {page.home.mapSection.hours}
                                </p>
                                <p className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white text-right">
                                    9am - 5pm
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white">
                                    {page.home.mapSection.saturday}
                                </p>
                                <p className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white text-right">
                                    10am - 3pm
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white">
                                    {page.home.mapSection.sunday}
                                </p>
                                <p className="text-sm cs:text-base sm:text-lg cxl:text-xl text-black dark:text-white text-right">
                                    Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
