function RevenueCard({ total, canDelete, onDelete }) {
  return (
    <div className="p-2 md:p-4 landscape:p-0 ">
      <div className="flex flex-row-reverse justify-evenly md:justify-center landscape:justify-center p-2">
        <button
          type="button"
          onClick={onDelete}
          disabled={!canDelete}
          className="ml-4 rounded border border-green-600 bg-green-100 px-2 text-large font-semibold text-green disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-100 cursor-pointer"
        >
              Delete
        </button>
        <h2>Total Penjualan: Rp {total.toLocaleString("id-ID")}</h2>
      </div>
    </div>
  );
}

export default RevenueCard;
