type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({currentPage, totalPages, onPageChange}: Props) => {
    const pages = Array.from({length: totalPages}, (_, index) => index + 1);

    return (
        <div className="flex justify-center space-x-2 mt-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
                disabled={currentPage === 0}
                onClick={() => onPageChange(currentPage - 1)}>Previous
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`px-4 py-2 rounded-md cursor-pointer ${
                        page - 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => onPageChange(page - 1)}>{page}
                </button>
            ))}
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
                disabled={currentPage === totalPages - 1}
                onClick={() => onPageChange(currentPage + 1)}>Next
            </button>
        </div>
    )
}

export default Pagination;