import { FaCheckCircle } from "react-icons/fa";

interface FormErrorProps {
message: string;
}

export const FormSuccess: React.FC<FormErrorProps> = ({ message }) => {
if(!message) return null;
return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
        <FaCheckCircle className="h-5 w-5" />
        <span>{message}</span>
    </div>
)
}