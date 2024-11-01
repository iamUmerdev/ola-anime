import React from "react";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaMusic,
  FaLandmark,
  FaCocktail,
} from "react-icons/fa";

export default function DetroitEpicWeekend() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Detroit Epic Weekend Guide
        </h1>
        <p className="text-xl text-gray-600">
          Ready for an unforgettable weekend in the Motor City? Here's your
          go-to guide to maximize your time in Detroit.
        </p>
      </div>

      {/* Day 1 */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Day 1: Exploring the Heart of Detroit
        </h2>

        {/* Morning */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Morning: Downtown Stroll
          </h3>
          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-3xl text-green-500 mr-4" />
            <p className="text-lg text-gray-700">
              Start your day with a walk around the vibrant downtown area. Visit
              the iconic <strong>Campus Martius Park</strong>, check out the
              beautiful architecture, and grab a coffee from a local café.
            </p>
          </div>
        </div>

        {/* Afternoon */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Afternoon: Detroit Institute of Arts
          </h3>
          <div className="flex items-start mb-4">
            <FaLandmark className="text-3xl text-purple-500 mr-4" />
            <p className="text-lg text-gray-700">
              Spend the afternoon at the{" "}
              <strong>Detroit Institute of Arts</strong>—one of the most
              renowned museums in the country. Explore incredible collections of
              art from across the globe.
            </p>
          </div>
        </div>

        {/* Evening */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Evening: Dinner at Selden Standard
          </h3>
          <div className="flex items-start mb-4">
            <FaUtensils className="text-3xl text-red-500 mr-4" />
            <p className="text-lg text-gray-700">
              End your day with a delicious dinner at{" "}
              <strong>Selden Standard</strong>, where locally-sourced
              ingredients meet upscale comfort food.
            </p>
          </div>
        </div>

        {/* Night */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Night: Jazz at Cliff Bell's
          </h3>
          <div className="flex items-start mb-4">
            <FaMusic className="text-3xl text-yellow-500 mr-4" />
            <p className="text-lg text-gray-700">
              Wrap up the night at <strong>Cliff Bell's</strong>, a famous jazz
              club where you can enjoy live music and cocktails in a classic Art
              Deco setting.
            </p>
          </div>
        </div>
      </section>

      {/* Day 2 */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Day 2: Adventure and Entertainment
        </h2>

        {/* Morning */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Morning: Eastern Market
          </h3>
          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-3xl text-green-500 mr-4" />
            <p className="text-lg text-gray-700">
              Begin your day with a visit to <strong>Eastern Market</strong>,
              one of the nation's largest public markets. Stroll through the
              vendor stalls, enjoy fresh produce, artisan goods, and local
              delicacies.
            </p>
          </div>
        </div>

        {/* Afternoon */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Afternoon: Belle Isle Park
          </h3>
          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-3xl text-green-500 mr-4" />
            <p className="text-lg text-gray-700">
              Head over to <strong>Belle Isle Park</strong> for an afternoon of
              outdoor fun. Visit the aquarium, explore nature trails, or just
              relax by the water and enjoy beautiful views of the Detroit
              skyline.
            </p>
          </div>
        </div>

        {/* Evening */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Evening: Dinner at Wright & Company
          </h3>
          <div className="flex items-start mb-4">
            <FaUtensils className="text-3xl text-red-500 mr-4" />
            <p className="text-lg text-gray-700">
              Dine in style at <strong>Wright & Company</strong>, a trendy spot
              offering small plates and craft cocktails, perfect for sharing
              with friends.
            </p>
          </div>
        </div>

        {/* Night */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-blue-600">
            Night: Drinks at The Sugar House
          </h3>
          <div className="flex items-start mb-4">
            <FaCocktail className="text-3xl text-pink-500 mr-4" />
            <p className="text-lg text-gray-700">
              Cap off your weekend with a trip to{" "}
              <strong>The Sugar House</strong>, one of Detroit’s best cocktail
              bars known for its creative and expertly crafted drinks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
