import googleLogo from ".././assets/google-logo.png";
export default function GoogleButton({ text, handler }) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                handler();
            }}
            className="border border-black h-14 px-2  flex items-center justify-center shadow-lg"
        >
            <img
                src={googleLogo}
                alt="google-logo"
                className=" w-10 h-6 me-auto flex-grow-0"
            />
            <span className=" flex-1 text-left">{text}</span>
        </button>
    );
}
