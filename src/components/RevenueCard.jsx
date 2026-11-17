function RevenueCard({ total, canDelete, onDelete }) {
  return (
    <div className="p-2 md:p-4">
      <div className="">
        <button
          type="button"
          onClick={onDelete}
          disabled={!canDelete}
          className="rounded bg-red-500 p-1 px-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer"
        >
              Delete
        </button>
        <h2>Total Penjualan: Rp {total.toLocaleString("id-ID")}</h2>
      </div>
    </div>
  );
}

export default RevenueCard;
