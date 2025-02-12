import { IoBedOutline } from "react-icons/io5";
import { LiaToiletSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
export default function Flat({
  city,
  district,
  title,
  image,
  total_price,
  discount,
  currency,
  num_of_bedrooms,
  num_of_bathrooms,
}) {
  return (
    <div className="flat">
      <img className="image" src={image} alt="test"  />

      <div className="content">
        <div className="titleAdressDiscount">
          <p className="discount">خصم % {discount}</p>
          <div>
            <h2
              style={{
                color: "#2c1d65",
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              {title}
            </h2>
          </div>
        </div>

        <div className="adress">
          <p style={{ color: "black" }}>
            `{city},{district}`
          </p>
          <IoLocationOutline
            style={{
              color: "#2c1d65",
              fontSize: "20px",
            }}
          />
        </div>

        <div
          className="flatDetails"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              alignItems: "center",
              gap: "10px",
              marginLeft: "20px",
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              تقييم 18
            </p>
            <div className="icon">
              <FaStar
                style={{
                  color: "orange",
                  fontSize: "20px",
                }}
              />{" "}
              <span style={{ color: "orange" }}>9.9</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div className="icon">
              <LiaToiletSolid
                style={{
                  color: "black",
                  fontSize: "20px",
                }}
              />{" "}
              <span>{num_of_bathrooms}</span>
            </div>
            <div className="icon">
              <IoBedOutline
                style={{
                  color: "black",
                  fontSize: "20px",
                }}
              />{" "}
              <span>{num_of_bedrooms}</span>
            </div>
          </div>
        </div>
        <div className="price">
          <p>
            <span>{total_price}</span> {currency}{" "}
          </p>
          <p>ليله واحده</p>
        </div>
      </div>
    </div>
  );
}

// 'limit',
//     'page',
//     'start_date',
//     'end_date',
//     'price_from',
//     'price_to',
//     'offer',
//     'category[]',
//     'city',
//     'rooms_no',
//     'rent_by_hour'
