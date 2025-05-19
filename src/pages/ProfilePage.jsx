




import { ArrowLeftIcon, CameraIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Mocked authentication state (you can replace this with actual authentication logic)
const mockAuth = { isAuthenticated: true, user: { name: "John Doe", walletAddress: "bddyygeygygesaadsdsfsfsffttettdte" } };

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    username: "john_doe",
    phoneNumber: "1234567890",
    gender: "Male",
    dateOfBirth: "1990-01-01",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(mockAuth.isAuthenticated);

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Here, you can send the updated profile data to a backend or local storage
    // Example of what could be done with backend API
    console.log("Profile data saved:", profileData);
    console.log("Profile image saved:", profileImage);
    // Add additional saving logic here (e.g., make API call)

    // Optionally: show a success message after saving
    alert("Profile updated successfully!");
  };

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect or show login screen if the user is not authenticated
      console.log("User is not authenticated");
    }
  }, [isAuthenticated]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0b0f1d] flex justify-center min-h-screen"
    >
      <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">My Profile</h1>
      </header>

      <div className="mt-20 min-h-[500px] mb-10 p-4 w-full max-w-[412px]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[300px] rounded-md w-full justify-center items-center bg-[#2C2C30] p-3 shadow-lg"
        >
          <div className="flex justify-center flex-col items-center mt-10 relative">
            {/* Profile Image with overlay camera icon */}
            <div className="w-20 h-20 rounded-full bg-blue-500 border p-1 flex justify-center items-center">
              <img
                src={profileImage || "/default-profile.png"} // If no image is selected, show a default image
                alt="profile"
                className="w-full h-full rounded-full object-contain"
              />
              <label htmlFor="profile-image-upload" className="absolute inset-0 flex justify-center items-center cursor-pointer">
                <CameraIcon className="w-8 h-8 text-white bg-[#00000080] rounded-full p-2" />
              </label>
            </div>
            <input
              type="file"
              id="profile-image-upload"
              accept="image/*"
              onChange={handleSelectImage}
              className="hidden" // Hide the file input
            />
            <p className="text-white mt-2 text-2xl font-bold">{profileData.fullName}</p>
          </div>
          <div className="p-4">
            <h1 className="text-white mt-2 text-xl font-bold text-center">
              Wallet Address:{" "}
              <span className="text-sm">{mockAuth.user.walletAddress}</span>
            </h1>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="w-full mt-10 text-white"
        >
          {[ 
            { label: "Full Name", name: "fullName", type: "text", value: profileData.fullName },
            { label: "Username", name: "username", type: "text", value: profileData.username },
            { label: "Phone Number", name: "phoneNumber", type: "number", value: profileData.phoneNumber },
            {
              label: "Gender",
              name: "gender",
              type: "select",
              value: profileData.gender,
              options: ["Male", "Female"],
            },
            { label: "Date of Birth", name: "dateOfBirth", type: "date", value: profileData.dateOfBirth },
          ].map((field, index) => (
            <motion.div
              key={index}
              className="space-y-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <label className="text-xl font-bold">{field.label}</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  className="w-full border border-blue-500 py-4 outline-none bg-transparent p-2 rounded-xl"
                >
                  {field.options.map((opt) => (
                    <option key={opt} className="bg-[#2C2C30]" value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  className="w-full border border-blue-500 py-4 outline-none bg-transparent p-2 rounded-xl"
                />
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="space-y-4 mt-4"
          >
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white w-full py-4 rounded-md"
            >
              Save
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
