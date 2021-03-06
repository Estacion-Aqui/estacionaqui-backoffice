
import { useState, useEffect } from "react";

export async function deleteRow(object, ids) {
    await fetch(`https://estacion-aqui.herokuapp.com/api/v1/${object}/${ids}`, { method: 'DELETE' });
}


export async function getHistoryData(object, ids) {
  /*  const responseEstab = await fetch("https://estacion-aqui.herokuapp.com/api/v1/places");
    const data = await responseEstab.json();
    data.forEach(function(item){
      estabmap[item.id] = item;
    }, {estabmap});*/
    
}
export async function getAllStaticData() {
    const responseEstab = await fetch(
      "https://estacion-aqui.herokuapp.com/api/v1/spots/place/ff05c862-5048-4413-ab69-1fb8eb81ea9e"
    );
    let data = await responseEstab.json();
    var freeSpotsNumber = 0;
    var spotsNumber = 0;

    data.forEach(function(item){
      if(item.status)
        spotsNumber = spotsNumber+1;
      else 
        freeSpotsNumber = freeSpotsNumber + 1;
    }, {freeSpotsNumber, spotsNumber});

    return { spots: spotsNumber, freeSpots: freeSpotsNumber };
}
export async function insertDataArea(areas){
  areas.place = "ff05c862-5048-4413-ab69-1fb8eb81ea9e";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(areas),
  };
  console.log(JSON.stringify(areas));
  const responseEstab = await fetch(
    "https://estacion-aqui.herokuapp.com/api/v1/areas",
    requestOptions
  ).then((response) => response.json()).then((data) => console.log(data));
}

export async function insertDataSector(areas) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(areas),
  };
  console.log(JSON.stringify(areas));
  const responseEstab = await fetch(
    "https://estacion-aqui.herokuapp.com/api/v1/sectors",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
export async function insertDataSpot(areas) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(areas),
  };
  console.log(JSON.stringify(areas));
  const responseEstab = await fetch(
    "https://estacion-aqui.herokuapp.com/api/v1/spots",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
export async function getAllData(){
    var estabmap = {};
    const responseEstab = await fetch("https://estacion-aqui.herokuapp.com/api/v1/places");
    let data = await responseEstab.json();
    data.forEach(function(item){
      estabmap[item.id] = item;
    }, {estabmap});

    var areamap = {};
    const responseArea = await fetch("https://estacion-aqui.herokuapp.com/api/v1/areas");
    const dataArea = await responseArea.json();
    dataArea.forEach(
      function (item) {
        if (estabmap[item.place]) {
          item.placeData = estabmap[item.place];
        }
        areamap[item.id] = item;
      },
      { estabmap, areamap }
    );
    
    var sectormap = {};
    const responseSector = await fetch("https://estacion-aqui.herokuapp.com/api/v1/sectors");
    const dataSector = await responseSector.json();
    dataSector.forEach(
      function (item) {
        if (areamap[item.area]) {
          item.areaData = areamap[item.area];
          item.placeData = estabmap[item.areaData.place];
        }
        sectormap[item.id] = item;
      },
      { estabmap, areamap, sectormap }
    );
    
    var spotmap = {};
    const responseSpot = await fetch("https://estacion-aqui.herokuapp.com/api/v1/spots");
    const dataSpot = await responseSpot.json();
    dataSpot.forEach(
      function (item) {
        if (sectormap[item.sector]) {
          item.sectorData = sectormap[item.sector];
          item.areaData = areamap[item.sectorData.area];
          item.placeData = estabmap[item.areaData.place];
        }
        spotmap[item.id] = item;
      },
      { estabmap, areamap, sectormap, spotmap }
    );

    return getFormattedData(estabmap, areamap, sectormap, spotmap);
}
function getFormattedData(estabmap, areamap, sectormap, spotmap) {
  var tableCardData = {
    estab: [],
    area: [],
    sector: [],
    spot: [],
  };

  Object.values(estabmap).forEach(function(item){
    let allSpots = Object.values(spotmap).filter(itemSp => itemSp?.placeData?.id === item.id);
    let freeSpots = allSpots.filter((item) => item.status);
    item.quantitySpots = allSpots == null ? 0 : allSpots.length;
    item.freeSpots = freeSpots == null ? 0 : freeSpots.length;
    item.percentSpot = (item.freeSpots / (item.quantitySpots === 0 ? 1 : item.quantitySpots)) * 100;
    tableCardData.estab.push(item);
  });

  Object.values(areamap).forEach(function(item){
    let allSpots = Object.values(spotmap).filter(itemSp => itemSp?.areaData?.id === item?.id);
    let freeSpots = allSpots.filter((item) => item.status);
    item.quantitySpots = allSpots == null ? 0 : allSpots.length;
    item.freeSpots = freeSpots == null ? 0 : freeSpots.length;
    item.percentSpot = (item.freeSpots / (item.quantitySpots === 0 ? 1 : item.quantitySpots)) * 100;
    tableCardData.area.push(item);
  });

  Object.values(sectormap).forEach(function(item){
    let allSpots = Object.values(spotmap).filter(itemSp => itemSp?.sectorData?.id === item?.id);
    let freeSpots = allSpots.filter((item) => item.status);
    item.quantitySpots = allSpots == null ? 0 : allSpots.length;
    item.freeSpots = freeSpots == null ? 0 : freeSpots.length;
    item.percentSpot = (item.freeSpots / (item.quantitySpots === 0 ? 1 : item.quantitySpots)) * 100;
    tableCardData.sector.push(item);
  });

  Object.values(spotmap).forEach(function(item){
    tableCardData.spot.push(item);
  });

  return tableCardData;
}