export default function AdminAddBtn({ text, onclick, classname }) {
    return (
        <button
            className={`px-4 py-2 w-full bg-green-400 rounded-lg ${classname}`}
            onClick={onclick}
        >
            {" "}
            {text}{" "}
        </button>
    );
}
