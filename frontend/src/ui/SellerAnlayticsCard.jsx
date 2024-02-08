export default function SellerAnlayticsCard({ number, text }) {
    return (
        <div className=" flex items-center justify-center font-sans p-6 bg-white rounded-sm shadow-md ">
            <p className=" text-2xl font-semibold ">
                {number}{" "}
                <span className=" text-base mx-4 text-green-800">{text}</span>
            </p>
        </div>
    );
}
