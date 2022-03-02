import React from "react";
import Product from "../Product/Product";
import "./Home.scss";

function Home() {
  const row1 = [
    {
      id: 1,
      rating: 5,
      price: 35,
      title:
        "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      image:
        "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      rating: 5,
      price: 299,
      title: "Kenwood KMM021 7QT Chef Titanium Kitchen Machine, Silver",
      image:
        "https://m.media-amazon.com/images/I/81tCWi0BusL._AC_UL640_FMwebp_QL65_.jpg",
    },
  ];

  const row2 = [
    {
      id: 3,
      title:
        "Padgene DZ09 Bluetooth Smart Watch with Camera for Samsung S5 / Note 2/3 / 4, Nexus 6, HTC, Sony, Black",
      image:
        "https://m.media-amazon.com/images/I/61CIS3RfFAL._AC_UL640_FMwebp_QL65_.jpg",
      price: 35,
      rating: 4,
    },
    {
      id: 4,
      title: "All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal",
      image:
        "https://m.media-amazon.com/images/I/71fnXKyRa4L._AC_UL640_FMwebp_QL65_.jpg",
      price: 69,
      rating: 5,
    },
    {
      id: 5,
      title: "2021 Apple 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Grey",
      image:
        "https://m.media-amazon.com/images/I/61gQ245+F-S._AC_UL640_FMwebp_QL65_.jpg",
      price: 1399,
      rating: 5,
    },
  ];

  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://m.media-amazon.com/images/I/71vyqP0n+oL._SX3000_.jpg"
          alt="container-jpg"
          className="home-image"
        />

        <div className="home_row">
          {row1.map((value, index) => {
            return (
              <Product
                key={index}
                id={value.id}
                title={value.title}
                price={value.price}
                image={value.image}
                rating={value.rating}
              />
            );
          })}
        </div>
        <div className="home_row">
          {row2.map((value, index) => {
            return (
              <Product
                key={index}
                id={value.id}
                title={value.title}
                price={value.price}
                image={value.image}
                rating={value.rating}
              />
            );
          })}
        </div>
        <div className="home_row">
          <Product
            id={6}
            rating={5}
            price={1599}
            title="AOC VA Curved (1800R) Gaming MNT 2HDMI/2DP/Ha, Black/Silver, 49 Inch Dual QHD [5120x144] (AG493UCX)"
            image="https://m.media-amazon.com/images/I/71IXyLtFzpL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
