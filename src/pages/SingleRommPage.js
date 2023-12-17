import React, { useContext } from "react";
import { MyContext } from "../Context";
import Title from "../components/Title";
import BannerComponent from "../components/BannerComponent";

export default function SingleRommPage({ match }) {
  const context = useContext(MyContext);
  const room = context.rooms.find(
    (room) => room.room_slug === match.params["room_slug"]
  );
  if (!room) {
    return <div>Eroror</div>;
  } else {
    return (
      <>
        <BannerComponent room={room} />
        <div className="container my-5 align-items-center justify-content">
          <Title title="DESCRIPTION" />

          <div className="row">
            <div className="col-md-6 m-auto">
              <h6>DETAILS</h6>
              <p className="text-justify" style={{ width: "80%" }}>
                The cool embrace of air conditioning soothes your sun-kissed skin. Two plush beds, draped in crisp linens, promise the deepest slumber as the rhythmic lull of the waves serenades you. Wake up to the ocean's dazzling sunrise, painting the sky in hues of coral and pearl, visible through your expansive windows.
              </p>
            </div>
            <div className="col-md-6 m-auto">
              <h6>INFORMATION</h6>
              <p>Price Rs.{room.price_per_night}</p>
              <p>Size {room.room_size} Sqr Feet</p>
              <p>Capacity Maxium {room.capacity} People</p>
              <p>Meals Included</p>
            </div>
          </div>

          <Title title="FACILITIES" />
          <div className="row mt-5">
            <div className="col-md-4">
              <p>
              Stay connected with our complimentary Wi-Fi. Share your beachside moments with loved ones back home, or plan your next adventure.
              </p>
              {/* <p>
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p>
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p> */}
            </div>
            <div className="col-md-4">
              <p>
              Coffee and tea making facilities in the room mean you can start each morning with a warm beverage, savored on your private balcony as you watch the sunrise paint the sky.
              </p>
              {/* <p>
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p>
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p> */}
            </div>
            <div className="col-md-4">
              <p>
              Modern amenities like a sleek ensuite bathroom, plush towels, and high-speed Wi-Fi ensure your comfort and convenience.
              </p>
              {/* <p>
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p>
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. */}
              {/* </p> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
