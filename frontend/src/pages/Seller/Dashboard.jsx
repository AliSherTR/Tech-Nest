import SellerAnlayticsCard from "../../ui/SellerAnlayticsCard";

export default function Dashboard() {
    return (
        <div>
            <div className=" grid md:grid-cols-3 gap-3">
                <SellerAnlayticsCard text={"Sales"} number={100} />
                <SellerAnlayticsCard text={"Views"} number={400} />
                <SellerAnlayticsCard text={"Profit"} number={`$3000`} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between w-full min-w-full p-3 bg-white gap-3 mt-4 rounded-xl">
                    <h5 className="font-bold text-center font-sans">Image</h5>
                    <h5 className="flex-1 text-center font-bold font-sans">
                        Name
                    </h5>
                    <h5 className="flex-1 font-bold text-center font-sans">
                        Stock
                    </h5>
                    <h5 className="flex-1 font-bold text-center font-sans">
                        Views
                    </h5>
                </div>
            </div>
        </div>
    );
}
