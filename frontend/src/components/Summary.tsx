import useFormData from "../store/form";
import { selectedSize } from "../utils";

export const Summary = () => {
  const previewData = useFormData((state) => state.previewData);

  return (
    <div className="card">
      <div>
        <div className="summary-item">
          <p>Customer name: </p>
          <strong>{previewData?.customerName}</strong>
        </div>

        <div className="summary-item">
          <p>Pizza size: </p>
          <strong>{selectedSize(previewData?.sizeId || "")}</strong>
        </div>

        <div className="summary-item">
          <p>Ingredients: </p>
          <div className="badge-content">
            {previewData?.ingredientIds?.map((item: string) => (
              <div key={item} className="badge">
                <strong key={item}>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="summary-item">
          <p>Final Price: </p>
          <strong>${Number(previewData?.finalPrice || 0).toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};
