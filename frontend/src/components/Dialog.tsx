import { selectedSize } from "../utils";

export const Dialog = ({
  openDialog,
  onSetOpenDialog,
  showDetails,
}: DialogProps) => {
  return (
    <dialog open={openDialog}>
      <div className="dialog-content">
        <button onClick={(item) => onSetOpenDialog(!item)}>X</button>
      </div>

      <ul>
        <li>
          Name Customer:<strong>{showDetails?.customerName}</strong>
        </li>
        <li>
          Size:<strong>{selectedSize(showDetails?.sizeId || "")}</strong>
        </li>

        <li>
          Ingredients:{" "}
          <div>
            {showDetails?.ingredientIds?.map((item: string) => (
              <strong className="captalize" key={item}>
                {item}{" "}
              </strong>
            ))}
          </div>
        </li>

        <li>
          Final Price:{" "}
          <strong>${Number(showDetails?.finalPrice || 0).toFixed(2)}</strong>
        </li>
      </ul>
    </dialog>
  );
};
