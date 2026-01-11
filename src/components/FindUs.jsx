import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body p-4">
                <h2 className="font-semibold text-lg mb-3">Find Us On</h2>

                <div className="border rounded-lg divide-y">
                    {/* Facebook */}
                    <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-base-200">
                        <FaFacebookF className="text-blue-600" />
                        <span className="text-sm font-medium">Facebook</span>
                    </div>

                    {/* Twitter */}
                    <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-base-200">
                        <FaTwitter className="text-sky-500" />
                        <span className="text-sm font-medium">Twitter</span>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-base-200">
                        <FaInstagram className="text-pink-500" />
                        <span className="text-sm font-medium">Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindUs;
