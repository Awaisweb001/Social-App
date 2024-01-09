import React, { useState } from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import axios from "axios";

function CreatePost() {
  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "SocialUpload");

    try {
      setIsloading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/djwuojoue/image/upload",
        formData
      );

      setFormData({
        ...formData,
        imageUrl: res.data.secure_url,
      });
      setIsloading(false);
    } catch (err) {
      console.error("Error uploading image: ", err);
      setIsloading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Perform post creation logic here (e.g., send data to an API, etc.)
  };

  return (
    <Mainlayout>
      <div className="flex items-center justify-center min-h-screen w-full">
        <main className="flex-1 flex items-center justify-center  p-6 w-full min-h-screen bg-blue-500">
          <div className="h-1/2 w-1/4 shadow-md p-5 bg-white text-blue-500 rounded">
            <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter post title"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 py-2 rounded-lg border-2 max-h-32 border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter post content"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block mb-2">
                  Image Upload
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="bg-white text-blue-500 py-2 px-4 rounded-lg w-full border-b-2"
                />
                {formData.imageUrl && (
                  <img
                    src={formData.imageUrl}
                    alt="Uploaded"
                    className="h-20 w-20 mb-4"
                  />
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg  w-full"
              >
                Create Post
              </button>
            </form>
          </div>
        </main>
      </div>
    </Mainlayout>
  );
}

export default CreatePost;
