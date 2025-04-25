export default function DeleteButton({ personId, onDelete }: { personId: string, onDelete: (id: string) => void }) {
    return (
        <button
            onClick={() => onDelete(personId)}
            className="bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest
            cursor-pointer">Delete
        </button>
    );
}
