import React, { useState } from "react";

export const Add = () => {
  const [uy, setUy] = useState({
    address: "Samarqand Ishtixan",
    attachments: [
      {
        imgPath: "string",
      },
    ],
    categoryId: 0,
    city: "string",
    componentsDto: {
      additional: "string",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "Uzbekistan",
    description: "zo'r uy",
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
    },
    houseDetails: {
      area: 100,
      bath: 200,
      beds: 400,
      garage: 20,
      room: 15,
      yearBuilt: 1995,
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "Villa",
    price: 200000000,
    region: "Samarqand",
    salePrice: 0,
    status: true,
    zipCode: "151251512",
  });

  const addUy = (id) => {
    return fetch(`http://158.51.99.245:8081/api/v1/houses`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(uy),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <hr />
      <h1>Add Form</h1>
      <span>
        Address <input type="text" />
      </span>
      <span>
        name <input type="text" />
      </span>
      <button onClick={addUy}>AddUy</button>
    </div>
  );
};

export default Add;
