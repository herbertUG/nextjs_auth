import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps {
message: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
if(!message) return null;
return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
        <FaExclamationTriangle className="h-5 w-5" />
        <span>{message}</span>
    </div>
)
}