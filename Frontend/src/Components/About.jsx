import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 text-center mb-6 mt-6">About Us</h1>
      
      {/* Welcome Section */}
      <section className="mb-8">
        <p className="text-lg text-gray-700">
          Welcome to <span className="font-semibold">Our Bookstore</span>, your cozy corner for discovering stories that inspire, enlighten, and entertain. Established with a passion for literature, we aim to bring the joy of reading to every visitor, whether you're a lifelong book lover or just beginning your reading journey.
        </p>
      </section>

      {/* Our Story 
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Our Story</h2>
        <p className="text-gray-700">
          Founded in 2020, we began as a small community bookstore. Over the years, we've grown into a beloved space where readers can come together to explore a vast range of genres, from classic literature and contemporary novels to non-fiction and niche genres. Our mission is simple: to connect readers with the books they’ll love.
        </p>
      </section> */}

      {/* Mission Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At Our Bookstore, we believe that books can change lives, broaden perspectives, and foster empathy. Our mission is to support our community through a curated selection of books, a welcoming atmosphere, and personalized recommendations. We strive to make reading accessible and enjoyable for everyone.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-10 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Dive into our collection and discover your next favorite book. Let’s embark on a journey through words and ideas together.
        </p>
        <a
          href="/collection"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Explore Our Collection
        </a>
      </section>
    </div>
  );
};

export default About;
