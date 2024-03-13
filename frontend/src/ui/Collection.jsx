export default function Collection({ image, name }) {
    return (
        <div className=" mx-3">
            <div className=" min-h-[150px] min-w-[150px] shadow-lg p-10 rounded-full flex-1 flex items-center justify-center">
                <img src={image} alt="product-img" className=" w-36 h-36" />
            </div>
            <h3 className="pt-5 text-center font-bold text-xl">{name}</h3>
        </div>
    );
}
