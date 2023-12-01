export default function FormError({ errorMessage, additionalClass }) {
    return (
        <p className={`text-xs font-semibold text-red-600 ${additionalClass}`}>
            {errorMessage}
        </p>
    );
}
