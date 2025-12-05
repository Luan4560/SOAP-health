import { useListOrder } from "../hooks/useListOrder";
import { Dialog } from "./Dialog";
import type { ChangeEvent } from "react";

export const ListOrders = () => {
  const {
    termId,
    showDetails,
    listOrders,
    openDialog,
    handleChange,
    handleSubmit,
    setOpenDialog,
  } = useListOrder();

  return (
    <>
      <Dialog
        openDialog={openDialog}
        onSetOpenDialog={setOpenDialog}
        showDetails={showDetails}
      />

      <div className="search-content">
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value)
          }
        />
        <button disabled={!termId} onClick={handleSubmit}>
          Pizza Details
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Final Price</th>
            <th scope="col">Created Date</th>
          </tr>
        </thead>
        <tbody>
          {listOrders?.map((item: ShowDetailsProps) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item?.customerName}</td>
              <td>{item?.finalPrice}</td>
              <td>{item?.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
