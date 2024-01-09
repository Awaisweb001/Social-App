import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCamera } from "react-icons/fa";
import Navbar from "../Navbar";
import Mainlayout from "../../Layouts/Mainlayout";

function LandingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Mainlayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
        <motion.main
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center py-10"
        >
          <section className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to Awesome Social App
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Connect, Share, and Explore!
            </p>
            <p className="text-lg text-gray-200 mb-8">
              A vibrant and interactive platform to connect, share memories, and
              explore new horizons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center flex-col">
                <FaUsers className="text-4xl text-blue-500 mb-4" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Connect with Friends
                  </h2>
                  <p className="text-gray-700">
                    Easily connect and stay in touch with your friends and
                    family no matter where they are.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center flex-col">
                <FaCamera className="text-4xl text-blue-500 mb-4" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Share Moments</h2>
                  <p className="text-gray-700">
                    Share your favorite moments - photos, videos, and stories -
                    with your social circle.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.main>
        <footer className="text-center py-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-gray-300"
          >
            © 2024 Awesome Social App. All rights reserved.
          </motion.p>
        </footer>
      </div>
    </Mainlayout>
  );
}

export default LandingPage;
