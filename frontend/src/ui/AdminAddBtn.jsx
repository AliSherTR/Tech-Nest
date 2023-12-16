export default function AdminAddBtn({ text, onclick }) {
    return (
        <button
            className=" px-4 py-2 bg-green-400 rounded-lg"
            onClick={onclick}
        >
            {" "}
            {text}{" "}
        </button>
    );
}
